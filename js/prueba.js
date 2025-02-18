let color = "rojo"
let estadoSemaforo = true

let mensajeSemaforo = color == "verde"? `seguir..` : color == "rojo"? `detengase`:
color == "amarillo"? `alistarse` : `dañado`

let encendido = estadoSemaforo? mensajeSemaforo : `Esta apagado`
console.log(encendido)