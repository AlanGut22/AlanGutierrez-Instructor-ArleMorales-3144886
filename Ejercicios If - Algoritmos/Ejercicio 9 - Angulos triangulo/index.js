let angulo1 = Number(prompt("Ingrese el primer ángulo: "));
let angulo2 = Number(prompt("Ingrese el segundo ángulo: "));
let angulo3 = Number(prompt("Ingrese el tercer ángulo: "));



if (angulo1 + angulo2 + angulo3 === 180) {
    alert("Los ángulos ingresados forman un triángulo valido."); 
} else {
    alert("Los ángulos ingresados no forman un triángulo valido.");
}