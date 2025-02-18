let modelocarro = Number(prompt("Ingrese el modelo del automóvil: "));

if (modelocarro == 119 || modelocarro == 179 || modelocarro == 189 || modelocarro == 190 || modelocarro == 191 || modelocarro == 192 || modelocarro == 193 || modelocarro == 194 || modelocarro == 195 || modelocarro == 221 || modelocarro == 780) {
    alert("El automóvil esta defectuoso, llevar a garantía.");
} else {
    alert("Su automóvil no esta defectuoso.");
}