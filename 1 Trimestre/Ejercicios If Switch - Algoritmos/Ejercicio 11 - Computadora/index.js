let valor = true
while(valor == true){
    let opcion = Number(prompt(`Bienvenido, seleccione: \n 1 Iniciar el programa de mantenimiento \n 2 Salir`));
    switch (opcion){
        case 1 :
            
            let emitePitido = prompt("¿La computadora emite un pitido al iniciar? (si/no)");
            let discoDuroGira = prompt("¿El disco duro gira? (si/no)");
            
            if (emitePitido == "si" && discoDuroGira == "si") {
                alert(mensaje = "Póngase en contacto con el técnico de apoyo.");
            } else if (emitePitido == "si" && discoDuroGira == "no") {
                alert(mensaje = "Verificar contactos de la unidad.");
            } else if (emitePitido === "no" && discoDuroGira === "no") {
                alert(mensaje = "Traiga la computadora para repararla en la central.");
            } else if (emitePitido === "no" && discoDuroGira === "si") {
                alert(mensaje = "Compruebe las conexiones de altavoces.");
            } else {
                alert(mensaje = "Entrada no válida. Por favor, responda con 'si' o 'no'.");
            }
            
        break;
        
        case 2 : valor = false; break;

        default:
            alert("Opción no válida. Intente nuevamente.");
        break;
    } 
}