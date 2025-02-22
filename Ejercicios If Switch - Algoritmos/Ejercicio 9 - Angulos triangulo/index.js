let valor = true
while(valor == true){
    let opcion = Number(prompt(`Bienvenido, seleccione: \n 1 Iniciar el programa \n 2 Salir`));
    switch (opcion){
        case 1 :

            let angulo1 = Number(prompt("Ingrese el primer ángulo: "));
            let angulo2 = Number(prompt("Ingrese el segundo ángulo: "));
            let angulo3 = Number(prompt("Ingrese el tercer ángulo: "));

            if (angulo1 >=1 && angulo2 >= 1 && angulo3 >= 1) {
                if (angulo1 + angulo2 + angulo3 === 180) {
                    alert("Los ángulos ingresados forman un triángulo valido."); 
                } else {
                    alert("Los ángulos ingresados no forman un triángulo valido.");
                } 
            } else {
                alert("Los ángulos ingresados no son válidos.");
            }
            
        break;
        
        case 2 : valor = false; break;

        default:
            alert("Opción no válida. Intente nuevamente.");
        break;
    } 
}