let valor = false
while(valor != true){
    let opcion = Number(prompt(`Bienvenido seleccione: \n 1 Registrar sus horas trabajadas \n 2 Salir`));
    switch (opcion){
        case 1 :
            
            let nombre = prompt("Ingrese su nombre: ");
            let horas = Number(prompt("Ingrese la cantidad de horas trabajadas: "));
            
            if (horas <= 10) { 
                salario = horas * 30000;
            } else {
                salario = horas * 33000;
            }
        
            alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a ${salario}.`);
            break;
        
        case 2 : valor = true; break;
    } 
}