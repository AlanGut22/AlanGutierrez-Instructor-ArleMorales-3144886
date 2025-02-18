let edad = "verde"
let encendido = true

if (encendido) {
    if (colorSemaforo == "rojo") {
        console.log(`Debe parar porque el semáforo esta en color ${colorSemaforo}`)
    } else if (colorSemaforo == "verde") {
        console.log(`Debe seguir porque el semáforo esta en color ${colorSemaforo}`)
    } else if (colorSemaforo == "amarillo") {
        console.log(`Prepárese...`)
    } else {
        console.log("El semáforo esta dañado")
    }
} else {
    console.log("semáforo apagado")
}