let operador = prompt("Ingrese su operador (Tigo, Claro o Movistar):");
let minutosInternacionales = Number(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));


if (operador == "tigo") {
    cargoFijo = 45000;
    valorMinuto = 200;
    valorPaqueteDatos = 12000;
} else if (operador == "claro") {
    cargoFijo = 30000;
    valorMinuto = 100;
    valorPaqueteDatos = 18000;
} else if (operador == "movistar") {
    cargoFijo = 40000;
    valorMinuto = 250;
    valorPaqueteDatos = 8000;
} else {
    alert("Operador no válido. Ingrese Tigo, Claro o Movistar.");
}

costoMinutos = minutosInternacionales * valorMinuto;
costoTotal = cargoFijo + costoMinutos + valorPaqueteDatos;

alert(`Resumen de costos:
    Operador: ${operador}
    Cargo fijo: $${cargoFijo}
    Valor por minuto internacional: $${valorMinuto}
    Costo por minutos internacionales: $${costoMinutos}
    Paquete de datos: $${valorPaqueteDatos}
    Total a pagar: $${costoTotal}`);