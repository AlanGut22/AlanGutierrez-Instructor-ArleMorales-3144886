let valor = true
while(valor == true){
    let opcion = Number(prompt(`Bienvenido, seleccione: \n 1 Iniciar el programa \n 2 Salir`));
    switch (opcion){
        case 1 :
            
            let genero = prompt("Ingrese su género (femenino - masculino): ");
            let edad = Number(prompt("Ingrese su edad: "));
            
            if (genero == "femenino") {
                if (edad < 30) {
                    ayuda = 0
                }  else if (edad >= 30 && edad <= 50) {
                    ayuda = 100000
                } else {
                    ayuda = 120000
                }
            } else if (genero == "masculino") {
                ayuda = 40000
            } else {
                alert("Género no válido.");
            }
            
            alert(`El valor de ayuda mensual es: ${ayuda}.`);
        break;
        
        case 2 : valor = false; break;

        default:
            alert("Opción no válida. Intente nuevamente.");
        break;
    } 
}