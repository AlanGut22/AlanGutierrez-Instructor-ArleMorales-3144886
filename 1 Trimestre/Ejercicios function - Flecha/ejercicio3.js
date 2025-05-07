const sumaDigitos = (num) => {
    if (!Number.isInteger(num)) return "Ingrese un número entero.";

    num = Math.abs(num); // Convertimos a positivo

    while (num >= 10) {
        let suma = 0;
        while (num > 0) {
            suma += num % 10; // Extraemos el último dígito y lo sumamos
            num = Math.floor(num / 10); // Eliminamos el último dígito
        }
        num = suma; // Asignamos la nueva suma a num
    }

    return num;
};

// Ejemplos
console.log(sumaDigitos(9875)); // Salida: 2
console.log(sumaDigitos(123));  // Salida: 6
console.log(sumaDigitos(49));   // Salida: 4
console.log(sumaDigitos(7));    // Salida: 7
console.log(sumaDigitos(3.5));  // Salida: "Ingrese un número entero."
