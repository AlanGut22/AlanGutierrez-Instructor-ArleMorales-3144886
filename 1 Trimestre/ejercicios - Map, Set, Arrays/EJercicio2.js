const preciosProductos = [500, 1200, 300, 1500, 800]
const hayPreciosAltos = preciosProductos.some(num => num > 1000)
console.log(hayPreciosAltos)