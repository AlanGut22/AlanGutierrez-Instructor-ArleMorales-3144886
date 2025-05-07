let valor = true
while(valor == true){
    let opcion = Number(prompt(`Bienvenido, seleccione: \n 1 Iniciar el programa de SandwichOrder \n 2 Salir`));
    switch (opcion){
        case 1 :

            function obtenerTamaño(){
                while (true) {
                    sandwich = prompt("¿De qué tamaño es el sándwich? (Pequeño/Grande)");
        
                    if (sandwich === "pequeño" || sandwich === "grande") {
                        break;  // Si es válido, sale del bucle
                    } else {
                        alert("Tamaño no válido. Ingrese 'pequeño' o 'grande'.");
                    }
                }
            }

            obtenerTamaño();
        
            let tocineta = prompt("¿Quiere tocineta? (si/no)");
            let jalapeño = prompt("¿Quiere jalapeño? (si/no)");
            let pavo = prompt("¿Quiere pavo? (si/no)");
            let queso = prompt("¿Quiere queso? (si/no)");

            function calcularCosto(){
                precioBase = (sandwich === "pequeño") ? 6000 : 12000;
                costoTocineta = (tocineta === "si") ? 3000 : 0;
                jalapeño = 0;
                costoPavo = (pavo === "si") ? 3000 : 0;
                costoQueso = (queso === "si") ? 2500 : 0;
            }
            
            function calcularcostoTotal(){
                costoTotal = precioBase + costoTocineta + jalapeño + costoPavo + costoQueso;
            }

            calcularCosto();
            calcularcostoTotal();

            alert(`Resumen del Pedido: \n Tamaño del Sandwich: ${sandwich} \n Precio del Sandwich: $${precioBase} \n Tocineta: $${costoTocineta} \n Jalapeño: $${jalapeño} \n Pavo: $${costoPavo} \n Queso: $${costoQueso} \n Total a pagar: $${costoTotal}`);
    
        break;
        
        case 2 : valor = false; break;

        default:
            alert("Opción no válida. Intente nuevamente.");
        break;
    } 
}