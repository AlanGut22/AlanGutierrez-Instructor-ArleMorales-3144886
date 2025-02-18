let emitePitido = prompt("¿La computadora emite un pitido al iniciar? (si/no)");
let discoDuroGira = prompt("¿El disco duro gira? (si/no)");


if (emitePitido == "si" && discoDuroGira == "si") {
    alert(mensaje = "Póngase en contacto con el técnico de apoyo.");
} else if (emitePitido == "si" && discoDuroGira == "no") {
    alert(mensaje = "Verificar contactos de la unidad.");
} else if (emitePitido === "no" && discoDuroGira === "no") {
    alert(mensaje = "Traiga la computadora para repararla en la central.");
} else if (emitePitido === "no" && discoDuroGira === "si") {
    alert(mensaje = "Compruebe las conexiones de altavoces.");
} else {
    alert(mensaje = "Entrada no válida. Por favor, responda con 'si' o 'no'.");
}