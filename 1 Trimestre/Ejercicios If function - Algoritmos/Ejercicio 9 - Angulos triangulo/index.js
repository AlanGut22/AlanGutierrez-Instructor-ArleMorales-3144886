let valor = true
while(valor == true){
    let opcion = Number(prompt(`Bienvenido, seleccione: \n 1 Iniciar el programa \n 2 Salir`));
    switch (opcion){
        case 1 :

            let angulo1 = Number(prompt("Ingrese el primer ángulo: "));
            let angulo2 = Number(prompt("Ingrese el segundo ángulo: "));
            let angulo3 = Number(prompt("Ingrese el tercer ángulo: "));

            function calcularAngulos(){
                if (angulo1 >=1 && angulo2 >= 1 && angulo3 >= 1) {
                    (angulo1 + angulo2 + angulo3 === 180)
                    ? alert("Los ángulos ingresados forman un triángulo válido.") 
                    : alert("Los ángulos ingresados no forman un triángulo válido."); 
                } else {
                    alert("Los ángulos ingresados no son válidos.");
                }
            }

            calcularAngulos();
            
        break;
        
        case 2 : valor = false; break;

        default:
            alert("Opción no válida. Intente nuevamente.");
        break;
    } 
}