let valor = true
while(valor == true){
    let opcion = Number(prompt(`Bienvenido, seleccione: \n 1 Iniciar el programa de impresión \n 2 Salir`));
    switch (opcion){
        case 1 :
            
            let copiaimp = Number(prompt("Ingrese el número de copias que va a imprimir: "));
            
            if (copiaimp > 0 && copiaimp <= 499) {
                preciocopia = 120;
                preciototal = copiaimp * preciocopia;
            } else  if (copiaimp >= 500 && copiaimp <= 749) {
                preciocopia = 100;
                preciototal = copiaimp * preciocopia;
            } else if (copiaimp >= 750 && copiaimp <= 999) {
                preciocopia = 80;
                preciototal = copiaimp * preciocopia;
            } else if (copiaimp >= 1000) {
                preciocopia = 50;
                preciototal = copiaimp * preciocopia;
            } else {
                alert("El número de copias ingresado no es válido.");
            }

            alert(`El precio por copia es de $${preciocopia} y el precio total es de: $${preciototal}.`);
            
        break;
        
        case 2 : valor = false; break;

        default:
            alert("Opción no válida. Intente nuevamente.");
        break;
    } 
}