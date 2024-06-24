/* 
Realizar una función que nos permita realizar las 4 operaciones aritméticas, es decir, que nos permita sumar, restar, dividir y multiplicar. La función debe recibir 3 parámetros, dos de ellos deben ser los valores (a y b) y uno el nombre de la operación (en minúsculas). Si el parámetro de la operación no es válido que mande un error personalizado a la consola.
 */

const operaciones = (a,b,operacion) =>{
    if(operacion.toLowerCase() === 'sumar'){
        return a + b
    }
    else if(operacion.toLowerCase() === 'restar'){
        return a - b
    }
    else if(operacion.toLowerCase() === 'multiplicar'){
        return a * b
    }
    else if(operacion.toLowerCase() === 'dividir'){
        return a / b
    }
}

console.log(operaciones(3,2,'sumar'))
console.log(operaciones(3,2,'restar'))
console.log(operaciones(3,2,'multiplicar'))
console.log(operaciones(3,2,'dividir'))