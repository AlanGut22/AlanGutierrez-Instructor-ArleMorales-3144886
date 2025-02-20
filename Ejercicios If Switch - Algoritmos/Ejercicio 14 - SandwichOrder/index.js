let valor = false
while(valor != true){
    let opcion = Number(prompt(`Bienvenido, seleccione: \n 1 Iniciar el programa de SandwichOrder \n 2 Salir`));
    switch (opcion){
        case 1 :

            let sandwich = prompt("¿De qué tamaño es el sandwich? (Pequeño/Grande)");
            let tocineta = prompt("¿Quiere tocineta? (si/no)");
            let jalapeño = prompt("¿Quiere jalapeño? (si/no)");
            let pavo = prompt("¿Quiere pavo? (si/no)");
            let queso = prompt("¿Quiere queso? (si/no)");
            
            if (sandwich == "pequeño") {
                precioBase = 6000;
            } else if (sandwich == "grande") {
                precioBase = 12000;
            } else {
                alert("Tamaño no válido. Ingrese 'pequeño' o 'grande'.");
            }
            
            costoTocineta = (tocineta === "si") ? 3000 : 0;
            jalapeño = 0;
            costoPavo = (pavo === "si") ? 3000 : 0;
            costoQueso = (queso === "si") ? 2500 : 0;
            
            costoTotal = precioBase + costoTocineta + jalapeño + costoPavo + costoQueso;
            
            alert(`Resumen del Pedido: \n Tamaño del Sandwich: ${sandwich} \n Precio del Sandwich: $${precioBase} \n Tocineta: $${costoTocineta} \n Jalapeño: $${jalapeño} \n Pavo: $${costoPavo} \n Queso: $${costoQueso} \n Total a pagar: $${costoTotal}`);
    
        break;
        
        case 2 : valor = true; break;
    } 
}