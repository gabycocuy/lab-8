const opciones = ["piedra","papel","tijera"]

function getramdonInt(max){
    return Math.floor(Math.random() * max)
}

console.log(getramdonInt(3))
//expected output: 0, 1 or 2

let computadora = opciones[getramdonInt(3)].toLowerCase();
console.log ("computadora eligio", computadora)
//expected output: 0, 1 or 2

let jugar = true
while (jugar) {
    let usuario = prompt ("juegue piedra, papel o tijera").toLowerCase();
    console.log("usuario eligio", usuario)

    if(usuario == computadora){
        console.log("Empate")
    }else if ((usuario == "piedra" && computadora == "tijera")
        || (usuario == "papel" && computadora == "piedra")
        || (usuario == "tijera" && computadora == "papel")){
        console.log("Ganaste")
        jugar= false;
    }else {
        console.log("perdiste")
    }

    let respuesta= prompt("¿Quieres jugar de nuevo? (S/N)").toLowerCase();
    if (respuesta === 'n') {
    jugar = false;
    console.log("Gracias por jugar");
    } 
}

