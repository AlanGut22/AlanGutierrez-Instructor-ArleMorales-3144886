const puntajes = [85, 92, 78, 95, 88];
const mapaPuntajes = new Map(puntajes.map((puntaje, indice) => [indice, puntaje]));
mapaPuntajes.set(5, 90);
console.log(mapaPuntajes)