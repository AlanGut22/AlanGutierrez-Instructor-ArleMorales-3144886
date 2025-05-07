let valor = true
while(valor == true){
    let opcion = Number(prompt(`Bienvenido, seleccione: \n 1 Iniciar el programa de impresión \n 2 Salir`));
    switch (opcion){
        case 1 :

            let copiaimp = Number(prompt("Ingrese el número de copias que va a imprimir: "));

            function calcularPrecio(){
                if (copiaimp > 0 && copiaimp <= 499) {
                    return 120;
                } else  if (copiaimp >= 500 && copiaimp <= 749) {
                    return 100;
                } else if (copiaimp >= 750 && copiaimp <= 999) {
                    return 80;
                } else if (copiaimp >= 1000) {
                    return 50;
                } else {
                    alert("El número de copias ingresado no es válido.");
                }
            }

            function calcularTotal(){
                return copiaimp * calcularPrecio()
            }

            let preciocopia = calcularPrecio()
            let preciototal = calcularTotal()

            alert(`El precio por copia es de $${preciocopia} y el precio total es de: $${preciototal}.`);

        break;
        
        case 2 : valor = false; break;

        default:
            alert("Opción no válida. Intente nuevamente.");
        break;
    } 
}