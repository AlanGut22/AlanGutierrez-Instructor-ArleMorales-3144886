let tipoLavadora = Number(prompt("Ingrese el tipo de lavadora, 1 Grande, 2 Pequeña: "));
let cantidad = Number(prompt("Ingrese la cantidad de lavadoras: "));
let horas = Number(prompt("Ingrese la cantidad de horas del alquiler: "));

if (tipoLavadora == 1) {
    if (cantidad >= 3) {
        total = ((horas * 4000) * cantidad) * 0.97;
    }  else {
        total = (horas * 4000) * cantidad;
    } 
} else  if (tipoLavadora == 2) {
    if (cantidad >= 3) {
        total = ((horas * 3000) * cantidad) * 0.97;
    }  else {
        total = (horas * 3000) * cantidad;
    }
} else {
    alert("Tipo de lavadora no válido.");
}

alert(`Costo total por alquiler ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: ${total}.`);