let valor = false
while(valor != true){
    let opcion = Number(prompt(`Bienvenido, seleccione: \n 1 Ingresar notas \n 2 Salir`));
    switch (opcion){
        case 1 :
            
            let fis = Number(prompt("Ingrese su nota de física (0 - 10): "));
            let quim = Number(prompt("Ingrese su nota de química entre (0 - 10): "));
            let bio = Number(prompt("Ingrese su nota de biología entre (0 - 10): "));
            let mat = Number(prompt("Ingrese su nota de matemáticas entre (0 - 10): "));
            let inf = Number(prompt("Ingrese su nota de informática entre (0 - 10): "));
            
            porcentaje = ((fis + quim + bio + mat + inf)/50)*100;
            
            if (porcentaje >= 0 && porcentaje <= 59.9) { 
                calificacion = "Mala"
            } else if (porcentaje >= 60 && porcentaje < 80) {
                calificacion = "Buena"
            } else {
                calificacion = "Excelente"
            }
            
            alert(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}.`);
        break;
        
        case 2 : valor = true; break;
    } 
}