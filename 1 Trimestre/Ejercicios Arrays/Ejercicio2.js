let saldo = 0; // Saldo inicial
let transacciones = [];

// Función para consultar saldo
const consultarSaldo = () => {
    alert(`Tu saldo actual es: $${saldo}`);
};

// Función para depositar dinero
const depositar = () => {
    let monto = Number(prompt("Ingrese el monto a depositar:"));
    if (monto <= 0) {
        alert("Monto inválido.");
        return;
    }
    saldo += monto;
    registrarTransaccion(monto);
    alert(`Depósito exitoso. Nuevo saldo: $${saldo}`);
};

// Función para retirar dinero
const retirar = () => {
    let monto = Number(prompt("Ingrese el monto a retirar:"));
    if (monto <= 0) {
        alert("Monto inválido.");
        return;
    }
    if (monto > 500) {
        alert("No puedes retirar más de $500 en una sola transacción.");
        return;
    }
    if (monto > saldo) {
        alert("Fondos insuficientes.");
        return;
    }
    saldo -= monto;
    registrarTransaccion(-monto);
    alert(`Retiro exitoso. Nuevo saldo: $${saldo}`);
};

// Función para registrar las últimas 5 transacciones
const registrarTransaccion = (monto) => {
    if (transacciones.length >= 5) {
        transacciones.shift(); // Elimina la transacción más antigua si hay más de 5
    }
    transacciones.push(monto);
};

// Función para ver el historial de transacciones
const verTransacciones = () => {
    let historial = "Últimas 5 transacciones:\n";
    if (transacciones.length === 0) {
        historial += "No hay transacciones registradas.";
    } else {
        for (let i = 0; i < transacciones.length; i++) {
            let tipo = transacciones[i] > 0 ? "Depósito" : "Retiro";
            let monto = Math.abs(transacciones[i]); // Obtener el valor positivo
            historial += `${tipo}: $${monto}\n`;
        }
    }
    alert(historial);
};

// Menú principal
while (true) {
    let opcion = prompt("1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Ver transacciones\n5. Salir\nElige una opción:");

    if (opcion === "1") {
        consultarSaldo();
    } else if (opcion === "2") {
        depositar();
    } else if (opcion === "3") {
        retirar();
    } else if (opcion === "4") {
        verTransacciones();
    } else if (opcion === "5") {
        alert("Saliendo...");
        break;
    } else {
        alert("Opción inválida.");
    }
}