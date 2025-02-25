let valor = true
while(valor == true){
    let opcion = Number(prompt(`Bienvenido, seleccione: \n 1 Iniciar el programa del gimnasio \n 2 Salir`));
    switch (opcion){
        case 1 :
            
            let dias = Number(prompt("Ingrese de cuantos días es mensualidad (15 - 30 días o 3 meses):"));
            
            function calcularMensualidad(){
                if (dias === 15) {
                    return 18000;
                } else if (dias === 30) {
                    return 35000;
                } else if (dias === 3) {
                    return 86000;
                } else {
                    alert("Días no válidos.");
                }
            }

            let costoMensualidad = calcularMensualidad();

            alert(`El valor de la mensualidad por ${dias} ${dias === 3 ? "meses" : "días"} es: ${costoMensualidad}.`);
            
        break;
        
        case 2 : valor = false; break;

        default:
            alert("Opción no válida. Intente nuevamente.");
        break;
    } 
}