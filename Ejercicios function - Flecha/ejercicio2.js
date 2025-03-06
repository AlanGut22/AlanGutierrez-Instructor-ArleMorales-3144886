const generarTribonacci = (n) => {
    // Verificar si n es un número válido
    if (n <= 0 || !Number.isInteger(n)) {
        return "Por favor, ingrese un número entero positivo.";
    }

    // Casos base
    if (n === 1) return "0";
    if (n === 2) return "0, 1";
    if (n === 3) return "0, 1, 1";

    // Inicializar la serie con los tres primeros valores
    let a = 0, b = 1, c = 1;
    let resultado = `${a}, ${b}, ${c}`;

    // Generar la serie utilizando un ciclo
    for (let i = 3; i < n; i++) {
        let siguiente = a + b + c;
        resultado += `, ${siguiente}`;
        a = b;
        b = c;
        c = siguiente;
    }

    // Devolver la serie de Tribonacci
    return resultado;
};

// Ejemplos de uso
console.log(generarTribonacci(8));  // Salida: "0, 1, 1, 2, 4, 7, 13, 24"
console.log(generarTribonacci(3));  // Salida: "0, 1, 1"
console.log(generarTribonacci(-2)); // Salida: "Por favor, ingrese un número entero positivo."
