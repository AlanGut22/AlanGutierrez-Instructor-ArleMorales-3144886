const esNumeroPerfecto = (num) => {
    // Verificar si el número es entero
    if (!Number.isInteger(num) || num <= 0) {
        return "El valor debe ser un número entero positivo.";
    }

    // Tomar el valor absoluto del número
    num = Math.abs(num);

    let suma = 0;

    // Iterar sobre todos los posibles divisores
    for (let i = 1; i < num; i++) {
        // Verificar si i es un divisor de num
        if (num % i === 0) {
            suma += i;
        }
    }

    // Verificar si el número es perfecto
    return suma === num ? `${num} es un número perfecto.` : `${num} no es un número perfecto.`;
}

// Casos de prueba
console.log(esNumeroPerfecto(6));   // Salida: "6 es un número perfecto."
console.log(esNumeroPerfecto(28));  // Salida: "28 es un número perfecto."
console.log(esNumeroPerfecto(12));  // Salida: "12 no es un número perfecto."
console.log(esNumeroPerfecto(-6));  // Salida: "El valor debe ser un número entero positivo."
console.log(esNumeroPerfecto(3.5)); // Salida: "El valor debe ser un número entero positivo."