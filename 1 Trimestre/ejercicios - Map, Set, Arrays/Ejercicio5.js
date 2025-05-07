const productosVendidos = new Set([1001, 1002, 1003]);
const verificarProducto = (codigo) => productosVendidos.has(codigo)
console.log(verificarProducto(1002))
console.log(verificarProducto(1004))