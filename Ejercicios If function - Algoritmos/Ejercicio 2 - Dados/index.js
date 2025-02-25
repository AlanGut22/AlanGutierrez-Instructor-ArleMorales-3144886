let valor = true
while(valor == true){
    let opcion = Number(prompt(`Bienvenido, seleccione: \n 1 Lanzar el dado \n 2 No lanzar el dado`));
    switch (opcion){
        case 1 :
            
            let dados = Math.floor(Math.random()*6) + 1;

            alert(`El número que cayó en el dado es: ${dados}`);

            function lanzardado(){
                if (dados % 2 == 0) { 
                    alert(`El número que cayó ${dados} es par.`);
                } else {
                    alert(`El número que cayó ${dados} es impar.`);
                }
            }

            lanzardado()

            break;
        
        case 2 : valor = false; break;

        default:
            alert("Opción no válida. Intente nuevamente.");
        break;
    } 
}