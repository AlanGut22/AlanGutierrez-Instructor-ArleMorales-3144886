function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function lavarFruta(fruta) {
    console.log(`Lavando la ${fruta}...`);
    await esperar(2000);
    console.log(`${fruta} lavada`);
    return fruta;
}

async function licuarFruta(fruta) {
    console.log(`Licuando la fruta ${fruta}...`);
    await esperar(3000);
    const jugo = `jugo de ${fruta}`;
    console.log(`${fruta} listo`);
    return jugo;
}

async function servirJugo(jugo) {
    console.log(`Sirviendo el ${jugo}...`);
    await esperar(1000);
    console.log(`${jugo} servido. ¡A disfrutar!`);
}

async function prepararJugo() {
    console.log("Preparando un delicioso jugo...\n");
    const frutaLavada = await lavarFruta("fresa");
    const jugoHecho = await licuarFruta(frutaLavada);  
    await servirJugo(jugoHecho);
    console.log("\nJugo terminado. ¡Salud!");
}

// Ejecutar
prepararJugo();
