// Objeto colaClientes, inicialmente vacío
const colaClientes = {};

// Función para agregar un cliente a la cola
const agregarCliente = () => {
    if (Object.keys(colaClientes).length < 7) { // Verificamos si hay menos de 7 clientes
        let nombre = prompt("Ingrese el nombre del cliente:");
        if (nombre && !colaClientes[nombre]) { // Verificamos que el cliente no exista ya
            colaClientes[nombre] = true; // Se agrega el cliente con un valor de 'true' para marcar que está en la cola
            alert(`Cliente ${nombre} agregado a la cola.`);
        } else if (colaClientes[nombre]) {
            alert("Este cliente ya está en la cola.");
        } else {
            alert("Nombre inválido.");
        }
    } else {
        alert("La cola está llena. No se pueden agregar más clientes.");
    }
};

// Función para atender al siguiente cliente
const atenderCliente = () => {
    if (Object.keys(colaClientes).length > 0) {
        // El primer cliente que se agregó (basado en el orden de las claves del objeto)
        let primerCliente = Object.keys(colaClientes)[0];
        delete colaClientes[primerCliente]; // Lo eliminamos de la cola
        alert(`Atendiendo a ${primerCliente}.`);
    } else {
        alert("No hay clientes en la cola para atender.");
    }
};

// Función para mostrar el estado de la cola
const mostrarCola = () => {
    if (Object.keys(colaClientes).length === 0) {
        alert("La cola está vacía.");
    } else {
        let listaClientes = "Clientes en la cola:\n";
        let numero = 1;
        for (let cliente in colaClientes) {
            listaClientes += `${numero}. ${cliente}\n`;
            numero++;
        }
        alert(listaClientes);
    }
};

// Menú principal
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
