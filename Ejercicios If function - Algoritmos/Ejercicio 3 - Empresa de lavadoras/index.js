let valor = true
while(valor == true){
    let opcion = Number(prompt(`Bienvenido, seleccione: \n 1 Ingresar los datos de su lavadora \n 2 Salir`));
    switch (opcion){
        case 1 :
            
            let tipoLavadora = Number(prompt("Ingrese el tipo de lavadora, 1 Grande, 2 Pequeña: "));
            let cantidad = Number(prompt("Ingrese la cantidad de lavadoras: "));
            let horas = Number(prompt("Ingrese la cantidad de horas del alquiler: "));
            
            function calcularvalortipo(){
                if (tipoLavadora == 1) {
                    return 4000;
                } else if (tipoLavadora == 2) {
                    return 3000;
                } else {
                    return 0;
                }
            }

            function calculardescuento(){
                if (cantidad >= 3) {
                    return 0.03;
                } else {
                    return 0;
                }
            }

            function calcularhorascosto(){
                return calcularvalortipo() * horas * cantidad - (calcularvalortipo() * horas * cantidad) * calculardescuento();
            }
            
            let total = calcularhorascosto()

            alert(`Costo total por alquiler ${cantidad} lavadoras tipo ${tipoLavadora} por ${horas} horas: ${total}.`);
        break;
        
        case 2 : valor = false; break;

        default:
            alert("Opción no válida. Intente nuevamente.");
        break;
    } 
}