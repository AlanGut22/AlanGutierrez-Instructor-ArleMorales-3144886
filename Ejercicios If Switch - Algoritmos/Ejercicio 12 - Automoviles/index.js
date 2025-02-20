let valor = false
while(valor != true){
    let opcion = Number(prompt(`Bienvenido, seleccione: \n 1 Iniciar el programa de servicio automovilístico \n 2 Salir`));
    switch (opcion){
        case 1 :
            
            let modelocarro = Number(prompt("Ingrese el modelo del automóvil: "));
            
            if (modelocarro == 119 || modelocarro == 179 || modelocarro == 189 || modelocarro == 190 || modelocarro == 191 || modelocarro == 192 || modelocarro == 193 || modelocarro == 194 || modelocarro == 195 || modelocarro == 221 || modelocarro == 780) {
                alert("El automóvil esta defectuoso, llevar a garantía.");
            } else {
                alert("Su automóvil no esta defectuoso.");
            }
            
        break;
        
        case 2 : valor = true; break;
    } 
}