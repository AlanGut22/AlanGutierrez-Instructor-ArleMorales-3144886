// Productos con precios usando objetos
const productos = {
    1: { nombre: "Chocolate", precio: 3 },
    2: { nombre: "Galletas", precio: 2 },
    3: { nombre: "Chips", precio: 4 },
    4: { nombre: "Refresco", precio: 5 },
    5: { nombre: "Caramelo", precio: 1 }
};

// Stock de productos usando objetos
const stock = {
    1: 5,
    2: 4,
    3: 3,
    4: 6,
    5: 8
};

// Función para mostrar productos disponibles
function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";
    for (let codigo in productos) {
        let producto = productos[codigo];
        let cantidad = stock[codigo];
        mensaje += `${codigo}. ${producto.nombre} - $${producto.precio} (${cantidad} disponibles)\n`;
    }
    alert(mensaje);
}

// Función para sugerir otro producto si el elegido está agotado
function sugerirProducto() {
    for (let codigo in productos) {
        if (stock[codigo] > 0) {
            return codigo; // Devuelve el primer producto con stock disponible
        }
    }
    return null; // Si no hay productos disponibles
}

// Función para comprar productos
function comprarProducto() {
    mostrarProductos();
    let codigo = Number(prompt("Ingrese el código del producto:"));

    // Validar si el código existe
    if (!productos[codigo]) {
        alert("Código inválido.");
        return;
    }

    let stockDisponible = stock[codigo];

    // Si el producto está agotado, sugerir otro
    if (stockDisponible === 0) {
        let sugerido = sugerirProducto();
        if (sugerido) {
            let productoSugerido = productos[sugerido];
            alert(`El producto seleccionado está agotado. Te sugerimos: ${productoSugerido.nombre} - $${productoSugerido.precio}`);
            return;
        } else {
            alert("No hay productos disponibles en la máquina.");
            return;
        }
    }

    let producto = productos[codigo];

    let cantidad = Number(prompt(`Ingrese la cantidad que desea comprar de ${producto.nombre}:`));

    // Validar cantidad
    if (cantidad <= 0) {
        alert("Cantidad inválida.");
        return;
    }

    let precioTotal = producto.precio * cantidad;

    // Validar stock
    if (cantidad > stockDisponible) {
        alert(`No hay suficiente stock de ${producto.nombre}.`);
        return;
    }

    let dineroIngresado = Number(prompt(`El total es $${precioTotal}. Ingrese su dinero:`));

    // Validar dinero
    if (dineroIngresado < precioTotal) {
        alert("Dinero insuficiente.");
        return;
    }

    // Calcular cambio
    let cambio = dineroIngresado - precioTotal;

    // Actualizar stock
    stock[codigo] -= cantidad;

    alert(`Compra exitosa: Recibe ${cantidad} ${producto.nombre}. ${cambio > 0 ? `Su cambio es $${cambio}. Gracias por su compra.` : "Gracias por su compra."}`);
}

// Menú principal
while (true) {
    let opcion = prompt("1. Ver productos\n2. Comprar\n3. Salir\nElige una opción:");

    if (opcion === "1") {
        mostrarProductos();
    } else if (opcion === "2") {
        comprarProducto();
    } else if (opcion === "3") {
        alert("Saliendo...");
        break;
    } else {
        alert("Opción inválida.");
    }
}
