let edad = 9

if(edad >=1) {
    if (edad <= 10) {
        console.log("Es un niño")
    } else if (edad >10 && edad < 18) {
        console.log("Es un adolescente")
    } else if (edad >= 18 && edad < 60) {
        console.log("Es un adulto")
    } else{ (edad >= 60)
        console.log("Es un adulto mayor")
    }
}else {
    console.log("Error")
}