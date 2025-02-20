let valor = false
while(valor != true){
    let opcion = Number(prompt(`Bienvenido, seleccione: \n 1 Iniciar el programa \n 2 Salir`));
    switch (opcion){
        case 1 :
            
            let num = Number(prompt("Ingrese un número: "))
            
            if (num % 2 == 0) { 
                alert(`El número ${num} es par.`);
            } else {
                alert(`El número ${num} es impar.`);
            }
        break;
        
        case 2 : valor = true; break;
    } 
}