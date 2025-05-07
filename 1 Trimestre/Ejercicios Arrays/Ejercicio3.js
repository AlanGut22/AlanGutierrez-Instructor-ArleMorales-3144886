let colaClientes = [];

// Función para agregar un cliente a la cola
const agregarCliente = () => {
    if (colaClientes.length < 7) {
        let nombre = prompt("Ingrese el nombre del cliente:");
        if (nombre) {
            colaClientes.push(nombre);
            alert(`Cliente ${nombre} agregado a la cola.`);
        } else {
            alert("Nombre inválido.");
        }
    } else {
        alert("La cola está llena. No se pueden agregar más clientes.");
    }
};

// Función para atender al siguiente cliente
const atenderCliente = () => {
    if (colaClientes.length > 0) {
        let clienteAtendido = colaClientes.shift();
        alert(`Atendiendo a ${clienteAtendido}.`);
    } else {
        alert("No hay clientes en la cola para atender.");
    }
};

// Función para mostrar el estado de la cola
const mostrarCola = () => {
    if (colaClientes.length === 0) {
        alert("La cola está vacía.");
    } else {
        let listaClientes = "Clientes en la cola:\n";
        let numero = 1;
        for (let cliente of colaClientes) {
            listaClientes += `${numero}. ${cliente}\n`;
            numero++;
        }
        alert(listaClientes);
    }
};

// Menú
while (true) {
    let opcion = prompt("Menú del Supermercado\n1. Agregar Cliente\n2. Atender Cliente\n3. Ver Cola\n4. Salir\nElige una opción:");

    if (opcion === "1") {
        agregarCliente();
    } else if (opcion === "2") {
        atenderCliente();
    } else if (opcion === "3") {
        mostrarCola();
    } else if (opcion === "4") {
        alert("Saliendo...");
        break;
    } else {
        alert("Opción inválida. Inténtalo de nuevo.");
    }
}
