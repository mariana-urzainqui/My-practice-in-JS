// Validacion de numero

/* let numero = prompt('Ingrese un numero')

if(!numero || isNaN(numero)){
    alert ('Error dato no valido')
    numero = prompt('Ingrese el numero')
} */

/* Solicitar al usuario un string y validar que sea un string valido
Casos invalidos:
''
null
number (cualquier tipo de number excepto Nan) */

/* let string = prompt('Ingrese un string')
while(!string || !isNaN(string)){
    alert('No ingreso un string valido')
    string = prompt('Ingrese un nuevo string')
} */

// Decir por consola 'hola mundo' 5 veces

/* for (let i = 1; i<=5; i+= 1){
    console.log('hola mundo' + i)
} */

// Solicitar 1 nombre y mostrarlo por alerta 3 veces

/* for(let i = 1; i <=3; i+= 1){
    let nombre = prompt('Ingrese un nombre')
    alert(nombre)
} */

/* Solicitar 3 nombres y al final mostrarlos en una lista
lista de nombres:
- pepe
- juan
- ezequiel 
*/

/* let listaDeNombres = 'Lista de nombres: '
for(let i = 1; i <= 3; i += 1){
    let nombre = prompt('Ingrese un nombre: ')
    listaDeNombres = listaDeNombres + `
    - ${nombre}`
}

alert(listaDeNombres) */

/* Vamos a solicitar un numero 3 veces al finalizar mostrar el resultado de la sumatoria entre los tres numeros*/

/* let sumatoria = 0
for (let i = 1; i <= 3; i += 1){
    let numero = Number(prompt('Ingrese un numero: '))
    sumatoria = sumatoria + numero
}
alert(sumatoria) */

/* - Vamos a solicitar al usuario una cantidad de repeticiones
- Vamos a un numero la cantidad de repeticiones ingresada por el usuario, al finalizar mostrar el resultado de la sumatoria
- Validar que el numero y la cantidad de repeticiones sean un numero, en caso de que no volver a solicitarlo 
 */

/* let cantidadDeRepeticiones = prompt('Ingrese la cantidad de numeros que quiere sumar')
while(!cantidadDeRepeticiones || isNaN(cantidadDeRepeticiones)){
    alert('Dato no valido')
    cantidadDeRepeticiones = prompt('Ingrese un numero valido')
}

let sumatoria = 0
for(let i = 1; i <= cantidadDeRepeticiones; i+= 1){
    let numero = (prompt('Ingrese un numero'))
    while(!numero || isNaN(numero)){
        alert('Dato no valido')
        cantidadDeRepeticiones = prompt('Ingrese un numero valido')
    }
    sumatoria = sumatoria + Number(numero)
}

alert('El resultado es: ' + sumatoria) */ 

/* const solicitarYValidarNro = (mensaje) => {
    let numeroSolcitado = prompt(mensaje)
    while(!numeroSolcitado || isNaN(numeroSolcitado)){
        alert('Dato no valido')
        cantidadDeRepeticiones = prompt('Ingrese un numero valido')
    }
    return Number(numeroSolcitado)
}

let cantidadDeRepeticiones = solicitarYValidarNro('Ingrese la cantidad de numeros que quiere sumar')

let sumatoria = 0
for( let i = 1; i <= cantidadDeRepeticiones; i += 1){
    let numero = solicitarYValidarNro('Ingrese un numero a sumar')
    sumatoria = sumatoria + numero
}

alert('El resultado es : ' + sumatoria) */

// Crear una funcion llamada sumar, que reciba 2 numeros y muestre por consola el resultado

/* function sumar (a, b){
    let resultado = a + b
}

sumar (1,2) */

// Crear una funcion llamada calcularIva que reciba un precio y muestre por consola el iva de dicho precio

/* function calcularIva (precio){
    return precio * 0.21
}

console.log(calcularIva(100)) */

