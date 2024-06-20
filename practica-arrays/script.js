
const nombres3 = ['maria', 'pedro', 'leonel', 'ezequiel', 'elias', 'lucas', 'julieta', 'abril', 'lautaro']
//Eliminar a leonel
//eliminar a el anterior a lucas
//agregar antes de abril a 'sofia' sin eliminar a abril
//REGLAS:
//-No se puede mirar el array
//-Si van a poder usar consola

/* let posicionDeLeonel = nombres3.indexOf('leonel')
nombres3.splice(posicionDeLeonel,1)

let posicionDeLucas = nombres3.indexOf('lucas') 
nombres3.splice((posicionDeLucas-1),1)

let posicionDeAbril = nombres3.indexOf('abril')
nombres3.splice(posicionDeAbril,0,'sofia') */


/* console.log(nombres3) */

for(let index = 0; index < nombres3.length; index += 1){
    console.log(nombres3[index])
}

/* 
Obtener cantidad total de caracteres de una lista de nombres:
Quiero que dado el array de nombres, por cada nombre sumes la cantidad de caracteres 
Al finalizar el recorrido decir 'la cantidad de caracteres es: {sumatoria caracteres}'


Ejemplo: ['pepe', 'juan'] //la sumatoria de caracteres es 8
*/

/* let totalCaracteres = 0

for(let index = 0; index < nombres3.length; index += 1){
    totalCaracteres = totalCaracteres + nombres3[index].length
}
console.log('La sumatoria de caracteres es:' + totalCaracteres) */

/* let totalCaracteres = 0
for(let nombre of nombres3){
    totalCaracteres = totalCaracteres + nombre.length
}

console.log('La sumatoria de caracteres es:' + totalCaracteres) */

//Dado el siguiente array crear un segundo array llamado mayusculas que solo contenga las palabras en mayusculas

/* const array = ['pepe', 'lucas', 'PEDRO', 'JuaN'] */

//esto debe generar un segundo array con ['PEDRO', 'JuaN']


/* const estaEnMinuscula = (string) => string === string.toLowerCase()

const arrayMayuscula = []
for(let nombre of array){
    if (!estaEnMinuscula(nombre)){
        arrayMayuscula.push(nombre)
    }
}

console.log(arrayMayuscula) */

/* const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
] */


/* Crear un array llamado samsung que contenga los productos que sean de la marca samsung */

/* const productosSamsung = []
for(const producto of productos){
    if(producto.marca === 'samsung'){
        productosSamsung.push(producto)
    }
}

console.log(productosSamsung) */




/* 
Crear una funcion que se llame buscarProducto(string) recibira un string y por cada producto del array 
de productos verificara si el titulo tiene incluido el string buscado
Esta funcion debe retornar un array de productos

EJEMPLO:
buscarProducto('noblex') //retorna:  
[ 
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    }
]
buscarProducto('celular')
[
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    }
]

*/
const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    },
]


const buscarProducto = (string) => {
    const resultadoBusqueda = []
    for(const producto of productos){
        if(producto.title.toLowerCase().includes(string.toLowerCase())){
            resultadoBusqueda.push(producto)
        }
    }
    return resultadoBusqueda
}

let stringBuscado = prompt('Ingrese lo que quiere buscar')

console.log(buscarProducto(stringBuscado))