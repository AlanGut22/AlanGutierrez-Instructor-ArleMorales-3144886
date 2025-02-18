let nombre = prompt("Ingrese su nombre: ");
let horas = Number(prompt("Ingrese la cantidad de horas trabajadas: "));

if (horas <= 10) { 
    salario = horas * 30000;
} else {
    salario = horas * 33000;
}

alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a ${salario}.`);