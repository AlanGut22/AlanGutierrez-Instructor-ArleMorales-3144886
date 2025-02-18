let dados = Math.floor(Math.random()*7) + 1;

alert(`El número que cayó en el dado es: ${dados}`);

if (dados % 2 == 0) { 
    alert(`El número que cayó ${dados} es par.`);
} else {
    alert(`El número que cayó ${dados} es impar.`);
}