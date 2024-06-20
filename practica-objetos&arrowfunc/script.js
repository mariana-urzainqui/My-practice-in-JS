//Crear una funcion que dado 3 valores  nos devuelva la sumatoria
function sumatoria (a,b,c){
    return a + b + c
}

console.log(sumatoria(1,2,3))

//Crear una funcion que reciba 2 numeros y siempre devuelva el mayor

function mayor (a,b){
    if (a > b){
        return a
    }
    else{
        return b
    }
}

console.log(mayor(3,5))

// Crear una funcion que se llame generarEmail que reciba un nombreDeUsuario y retorne nombreDeUsuario + '@gmail.com'

function generarEmail(nombreDeUsuario){
    return nombreDeUsuario + '@gmail.com'
}

console.log(generarEmail('pepe85'))