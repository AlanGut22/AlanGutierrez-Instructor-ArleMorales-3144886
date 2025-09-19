// app.js — lógica del cotizador (guarda rows como datos, no innerHTML)

const STORAGE_KEY = "estimador_cotizacion_v1";

// helpers de formato
const fmt = new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 });

function formatMoney(n) {
	return fmt.format(Math.round(n)) + " COP";
}

function genId() {
	return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

/* Plantillas (coinciden con tu captura) */
const TEMPLATES = {
	minimo: [
		{ id: genId(), concepto: "Diseño básico", cantidad: 1, costoUnitario: 500000, notas: "" },
		{ id: genId(), concepto: "Hosting", cantidad: 1, costoUnitario: 200000, notas: "" }
	],
	estandar: [
		{ id: genId(), concepto: "Diseño avanzado", cantidad: 1, costoUnitario: 1000000, notas: "" },
		{ id: genId(), concepto: "Desarrollo frontend", cantidad: 120, costoUnitario: 130000, notas: "Horas - FE" },
		{ id: genId(), concepto: "Backend", cantidad: 120, costoUnitario: 135000, notas: "Horas - BE" },
		{ id: genId(), concepto: "Pruebas QA", cantidad: 50, costoUnitario: 110000, notas: "E2E y manual" }
	],
	alta: [
		{ id: genId(), concepto: "Arquitectura empresarial", cantidad: 1, costoUnitario: 5000000, notas: "" },
		{ id: genId(), concepto: "Frontend complejo", cantidad: 1, costoUnitario: 4000000, notas: "" },
		{ id: genId(), concepto: "Backend microservicios", cantidad: 1, costoUnitario: 6000000, notas: "" },
		{ id: genId(), concepto: "Pruebas automatizadas", cantidad: 1, costoUnitario: 2000000, notas: "" },
		{ id: genId(), concepto: "Infra cloud avanzada", cantidad: 1, costoUnitario: 3000000, notas: "" }
	]
};

// estado: array de filas
let rows = [];

// referencias DOM
const rowsBody = document.getElementById('rowsBody');
const ivaPercentInput = document.getElementById('ivaPercent');
const contPercentInput = document.getElementById('contPercent');
const subtotalEl = document.getElementById('subtotal');
const ivaAmountEl = document.getElementById('ivaAmount');
const contAmountEl = document.getElementById('contAmount');
const totalEl = document.getElementById('total');
const ivaLabel = document.getElementById('ivaLabel');
const contLabel = document.getElementById('contLabel');

// cargar desde localStorage
function loadState() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) {
			const parsed = JSON.parse(raw);
			if (Array.isArray(parsed.rows)) {
				rows = parsed.rows;
			} else {
				rows = TEMPLATES.estandar.map(r => ({ ...r, id: genId() }));
			}
			// IVA y cont si vienen guardados
			if (parsed.iva != null) ivaPercentInput.value = parsed.iva;
			if (parsed.cont != null) contPercentInput.value = parsed.cont;
			render();
			return;
		}
	} catch (e) {
		console.warn("Error leyendo localStorage:", e);
	}
	// por defecto plantilla estandar
	rows = TEMPLATES.estandar.map(r => ({ ...r, id: genId() }));
	render();
}

function saveState() {
	const payload = { rows, iva: Number(ivaPercentInput.value || 0), cont: Number(contPercentInput.value || 0) };
	localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

// renderizado de filas
function render() {
	rowsBody.innerHTML = '';
	if (rows.length === 0) {
		const tr = document.createElement('tr');
		tr.innerHTML = `<td colspan="6" class="empty" style="padding:22px;text-align:center;color:#6b7280">Sin filas. Añade una fila o aplica una plantilla.</td>`;
		rowsBody.appendChild(tr);
		updateTotals();
		saveState();
		return;
	}

	rows.forEach(row => {
		const tr = document.createElement('tr');

		tr.innerHTML = `
    <td><input type="text" value="${escapeHtml(row.concepto)}" oninput="onEdit('${row.id}','concepto',this.value)"></td>
    <td class="center"><input type="number" min="0" value="${row.cantidad}" oninput="onEdit('${row.id}','cantidad',this.value)"></td>
    <td class="right"><input type="number" min="0" value="${row.costoUnitario}" oninput="onEdit('${row.id}','costoUnitario',this.value)"></td>
    <td class="right subtotal-cell">${formatMoney((row.cantidad || 0) * (row.costoUnitario || 0))}</td>
    <td><input type="text" value="${escapeHtml(row.notas)}" oninput="onEdit('${row.id}','notas',this.value)"></td>
    <td class="center"><button class="btn-small" onclick="removeRow('${row.id}')">Eliminar</button></td>
    `;

		rowsBody.appendChild(tr);
	});

	updateTotals();
	saveState();
}

function escapeHtml(s = '') {
	return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// editar fila (invocado desde inputs)
function onEdit(id, field, value) {
	rows = rows.map(r => {
		if (r.id !== id) return r;
		const copy = { ...r };
		if (field === 'cantidad' || field === 'costoUnitario') {
			copy[field] = Number(value) || 0;
		} else {
			copy[field] = value;
		}
		return copy;
	});
	render();
}

// añadir fila
function addRow(defaults = {}) {
	rows.push({
		id: genId(),
		concepto: defaults.concepto || "Nuevo concepto",
		cantidad: defaults.cantidad != null ? defaults.cantidad : 1,
		costoUnitario: defaults.costoUnitario != null ? defaults.costoUnitario : 0,
		notas: defaults.notas || ""
	});
	render();
}

// eliminar fila
function removeRow(id) {
	rows = rows.filter(r => r.id !== id);
	render();
}

// aplicar plantilla
function applyTemplate(key) {
	if (!TEMPLATES[key]) return;
	rows = TEMPLATES[key].map(r => ({ ...r, id: genId() }));
	render();
}

// limpiar todo
function clearAll() {
	if (!confirm("¿Limpiar todas las filas?")) return;
	rows = [];
	render();
}

// totales
function updateTotals() {
	const ivaPercent = Number(ivaPercentInput.value) || 0;
	const contPercent = Number(contPercentInput.value) || 0;

	let subtotal = 0;
	rows.forEach(r => subtotal += (Number(r.cantidad) || 0) * (Number(r.costoUnitario) || 0));

	const ivaAmount = Math.round(subtotal * ivaPercent / 100);
	const contAmount = Math.round(subtotal * contPercent / 100);
	const total = subtotal + ivaAmount + contAmount;

	subtotalEl.textContent = formatMoney(subtotal);
	ivaAmountEl.textContent = formatMoney(ivaAmount);
	contAmountEl.textContent = formatMoney(contAmount);
	totalEl.textContent = formatMoney(total);

	ivaLabel.textContent = ivaPercent;
	contLabel.textContent = contPercent;
}

// export CSV
function exportCSV() {
	const header = ["Concepto", "Cantidad", "Costo unitario", "Subtotal", "Notas"];
	const lines = [header.join(",")];

	rows.forEach(r => {
		const c = Number(r.cantidad) || 0;
		const u = Number(r.costoUnitario) || 0;
		const sub = c * u;
		const row = [
			csvEscape(r.concepto),
			c,
			u,
			sub,
			csvEscape(r.notas)
		];
		lines.push(row.join(","));
	});

	// totales summary rows
	const ivaPercent = Number(ivaPercentInput.value) || 0;
	const contPercent = Number(contPercentInput.value) || 0;
	const subtotal = rows.reduce((a, r) => a + (Number(r.cantidad) || 0) * (Number(r.costoUnitario) || 0), 0);
	const ivaAmount = Math.round(subtotal * ivaPercent / 100);
	const contAmount = Math.round(subtotal * contPercent / 100);
	const total = subtotal + ivaAmount + contAmount;

	lines.push(["", "", "Subtotal", subtotal, ""].join(","));
	lines.push(["", "", `IVA (${ivaPercent}%)`, ivaAmount, ""].join(","));
	lines.push(["", "", `Contingencia (${contPercent}%)`, contAmount, ""].join(","));
	lines.push(["", "", "Total", total, ""].join(","));

	const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = `cotizacion_${Date.now()}.csv`;
	document.body.appendChild(a);
	a.click();
	a.remove();
	URL.revokeObjectURL(url);
}

function csvEscape(s = '') {
	const str = String(s).replace(/\r?\n/g, " ");
	if (str.includes(",") || str.includes('"')) {
		return '"' + str.replace(/"/g, '""') + '"';
	}
	return str;
}

// export PDF (jsPDF)
async function exportPDF() {
	if (!window.jspdf) {
		alert("jsPDF no cargó. Asegúrate de tener conexión a internet o incluye la librería localmente.");
		return;
	}
	const { jsPDF } = window.jspdf;
	const doc = new jsPDF({ unit: 'pt', format: 'a4' });
	const left = 40;
	let y = 40;
	doc.setFontSize(14);
	doc.text("Cotización — Estimador profesional", left, y);
	y += 24;
	doc.setFontSize(10);

	// encabezado de tabla
	rows.forEach(r => {
		const c = r.concepto;
		const q = Number(r.cantidad) || 0;
		const u = Number(r.costoUnitario) || 0;
		const sub = q * u;
		const line = `${c} — Cant: ${q} — Unit: ${fmt.format(u)} — Sub: ${fmt.format(sub)}`;
		const splitted = doc.splitTextToSize(line, 520);
		splitted.forEach(l => {
			if (y > 760) { doc.addPage(); y = 40; }
			doc.text(l, left, y);
			y += 14;
		});
	});

	// totales
	const subtotal = rows.reduce((a, r) => a + (Number(r.cantidad) || 0) * (Number(r.costoUnitario) || 0), 0);
	const ivaPercent = Number(ivaPercentInput.value) || 0;
	const contPercent = Number(contPercentInput.value) || 0;
	const ivaAmount = Math.round(subtotal * ivaPercent / 100);
	const contAmount = Math.round(subtotal * contPercent / 100);
	const total = subtotal + ivaAmount + contAmount;

	y += 18;
	if (y > 760) { doc.addPage(); y = 40; }

	doc.setFontSize(11);
	doc.text(`Subtotal: ${fmt.format(subtotal)} COP`, left, y);
	y += 14;
	doc.text(`IVA (${ivaPercent}%): ${fmt.format(ivaAmount)} COP`, left, y);
	y += 14;
	doc.text(`Contingencia (${contPercent}%): ${fmt.format(contAmount)} COP`, left, y);
	y += 18;
	doc.setFontSize(13);
	doc.text(`Total: ${fmt.format(total)} COP`, left, y);

	doc.save(`cotizacion_${Date.now()}.pdf`);
}

// listeners for IVA/cont inputs
ivaPercentInput.addEventListener('input', () => { render(); });
contPercentInput.addEventListener('input', () => { render(); });

// inicializar
loadState();