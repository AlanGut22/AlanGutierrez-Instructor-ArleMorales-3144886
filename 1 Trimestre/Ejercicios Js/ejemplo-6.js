let gasolina = "vacio"
let encendido = true

if (encendido) {
    if (gasolina == "vacio") {
        console.log(`No puede conducir porque el tanque esta ${gasolina}`)
    } else if (gasolina == "lleno") {
        console.log(`Puede conducir porque el tanque esta ${gasolina}`)
    } else if (gasolina == "parcial") {
        console.log(`Debe manejar con precaucción porque el tanque esta ${gasolina}`)
    } else {
        console.log("Error")
    }
} else {
    console.log("Carro apagado")
}