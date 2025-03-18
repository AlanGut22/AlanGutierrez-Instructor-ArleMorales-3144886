const asistentes = new Map([[101, "Carlos"], [102, "María"], [103, "José"]]);
const verificarAsistente = (map, codigo) => {
    return map.has(codigo);
}
console.log(verificarAsistente(asistentes, 102))
console.log(verificarAsistente(asistentes, 104))