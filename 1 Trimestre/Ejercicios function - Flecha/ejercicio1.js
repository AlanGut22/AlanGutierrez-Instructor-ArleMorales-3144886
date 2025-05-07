const productoDigitos = (num) => {
    // Convertir el número a una cadena de texto y tomar el valor absoluto
    const numString = Math.abs(num).toString();

    // Inicializar la variable para almacenar el producto
    let producto = 1;

    // Iterar sobre cada dígito de la cadena de texto
    for (let i = 0; i < numString.length; i++) {
        // Convertir el dígito actual de cadena a número
        const digito = parseInt(numString[i]);

        // Multiplicar el dígito a la variable producto
        producto *= digito;
    }

    // Devolver el producto de los dígitos
    return producto;
}

console.log(productoDigitos(1234)); // Salida: 24 (1*2*3*4)
console.log(productoDigitos(567));  // Salida: 210 (5*6*7)
console.log(productoDigitos(0));    // Salida: 0
console.log(productoDigitos(9));    // Salida: 9
console.log(productoDigitos(-123)); // Salida: 6 (1*2*3)