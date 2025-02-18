let num1 = Number(prompt("Ingrese el primer número: "));
let num2 = Number(prompt("Ingrese el segundo número: "));
let num3 = Number(prompt("Ingrese el tercer número: "));



if (num1 > num2 && num1 > num3) { 
    alert(`El número mayor es el primero: ${num1}.`);
} else if (num2 > num1 && num2 > num3) {
    alert(`El número mayor es el segundo: ${num2}.`);
} else if (num3 > num1 && num3 > num2) {
    alert(`El número mayor es el tercero: ${num3}.`);
} else {
    alert("Los números son iguales.");
}