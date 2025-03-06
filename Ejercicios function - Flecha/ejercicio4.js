const contarConsonantes = (str) => {
    // Convertir la cadena a minúsculas para evitar diferencias
    str = str.toLowerCase();
    
    let consonantes = 0;
    
    // Recorrer la cadena
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // Verificar si el carácter es una consonante (letra pero no vocal)
        if (char >= 'a' && char <= 'z' && !"aeiou".includes(char)) {
            consonantes++;
        }
    }

    // Devolver el número de consonantes
    return consonantes;
}

// Pruebas del programa
console.log(contarConsonantes("Hola")); // Salida: 2 (H, l)
console.log(contarConsonantes("JavaScript")); // Salida: 7 (J, v, S, c, r, p, t)
console.log(contarConsonantes("xyz")); // Salida: 3 (x, y, z)
console.log(contarConsonantes("AeIoU")); // Salida: 0 (No hay consonantes)
