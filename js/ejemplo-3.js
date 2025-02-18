let maquina_dulces = 1
let pago =true
let precio = 2000

if (pago) {
    if (maquina_dulces == 1 && precio == 2000) {
        console.log("Eligió el dulce 1")
    } else if (maquina_dulces == 2 && precio == 2500) {
        console.log("Eligió el dulce 2")
    } else if (maquina_dulces == 3 && precio == 3500) {
        console.log("Eligió el dulce 3")
    } else if (maquina_dulces == 4 && precio == 5000) {
        console.log("Eligió el dulce 4")
    } else if (maquina_dulces == 5&& precio == 3000) {
        console.log("Eligió el dulce 5")
    } else {
        console.log("Error")
    }
} else {
    console.log("No imgresó el dinero")
}