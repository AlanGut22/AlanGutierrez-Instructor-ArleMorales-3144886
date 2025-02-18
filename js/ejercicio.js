let jugador1 = Math.floor(Math.random()*11)
let jugador2 = Math.floor(Math.random()*11)

let seguir1 = true
let seguir2 = true

console.log("Primera Ronda:")
console.log("Jugador 1: " + jugador1)
console.log("Jugador 2: " + jugador2)

jugador1 += Math.floor(Math.random()*11)
jugador2 += Math.floor(Math.random()*11)

console.log("Segunda Ronda:")
console.log("Jugador 1: " + jugador1)
console.log("Jugador 2: " + jugador2)

let continuar1 = seguir1? jugador1 += Math.floor(Math.random()*11) : `No sumó más` 
let continuar2 = seguir2? jugador2 += Math.floor(Math.random()*11) : `No sumó más`

let ganador = jugador1 > jugador2 && jugador1 > 21? `Se pasó, perdió el jugador 1, ganó el jugador 2` : jugador1 > jugador2 && jugador1 < 21? `Ganó el jugador 1` : jugador1 > jugador2 && jugador1 == 21? `Blackjack por parte del jugador 1` : jugador1 < jugador2 && jugador2 > 21? `Se pasó, perdió el jugador 2, ganó el jugador 1` : jugador1 < jugador2 && jugador2 < 21? `Ganó el jugador 2` : jugador2 > jugador1 && jugador2 == 21? `Blackjack por parte del jugador 2` : jugador1 = jugador2 && jugador1 > 21? `Se pasaron, ambos perdieron` : `Empate`

console.log("Tercera Ronda:")
console.log("Jugador 1: " + continuar1)
console.log("Jugador 2: " + continuar2)

console.log(ganador)