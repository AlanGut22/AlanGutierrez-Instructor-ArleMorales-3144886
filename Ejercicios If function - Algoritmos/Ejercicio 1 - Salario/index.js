let valor = true
while(valor == true){
    let opcion = Number(prompt(`Bienvenido seleccione: \n 1 Registrar sus horas trabajadas \n 2 Salir`));
    switch (opcion){
        case 1 :
            
            let nombre = prompt("Ingrese su nombre: ");
            let horas = Number(prompt("Ingrese la cantidad de horas trabajadas: "));

            function calcularsalario(){
                if (horas <= 10) { 
                    return horas * 30000;
                } else {
                    return horas * 33000;
                }
            }
            
            let salario = calcularsalario()
            
            alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a ${salario}.`);
            break;
        
        case 2 : valor = false; break;

            default:
            alert("Opción no válida. Intente nuevamente.");
        break;
    } 
}