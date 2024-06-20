//Crear una funcion que dado 3 valores  nos devuelva la sumatoria
/* function sumatoria (a,b,c){
    return a + b + c
}

console.log(sumatoria(1,2,3)) */

//Crear una funcion que reciba 2 numeros y siempre devuelva el mayor

/* function mayor (a,b){
    if (a > b){
        return a
    }
    else{
        return b
    }
}

console.log(mayor(3,5)) */

// Crear una funcion que se llame generarEmail que reciba un nombreDeUsuario y retorne nombreDeUsuario + '@gmail.com'

/* function generarEmail(nombreDeUsuario){
    return nombreDeUsuario + '@gmail.com'
}

console.log(generarEmail('pepe85')) */

// Pasarlas a arrow function

/* const sumatoria = (a,b,c) => a + b + c

const mayor = (a,b) => {
    if (a > b){
        return a
    }
    else{
        return b
    }
}

const generarEmail= (nombreDeUsuario) => nombreDeUsuario + '@gmail.com'

const calcularSumatoria = (a,b) =>{
    a = Number(a)
    b = Number(b)
    return a + b 
} */

/* const solicitarYValidarString = () =>{
    let stringSolicitado = prompt('Ingrese un string: ')
    while(!stringSolicitado || !isNaN(stringSolicitado)){
        alert('error: el dato ingresado no es un string')
        stringSolicitado = prompt('Ingrese un nuevo string')
    }
    return stringSolicitado
}
solicitarYValidarString() */

//Objetos:
/* Crear un objeto llamado producto que tenga las siguientes propiedades
precio: number
nombre: string
marca: string
id: number
descripcion: string */

/* let producto = {
    precioUnitario: 1500,
    nombre_completo: 'remera bullbenny',
    marca: 'bullbenny',
    id: 123,
    descripcion: 'remera calavera bullbenny'
} */

/* const user = {
    name: 'pepe',
    lastname: 'suarez',
    'user preferences':{
        theme: 'dark-mode',
        lang: 'spanish'
    },
    'user info':{
        'created_at': '18/9/2005',
        'adress': 'av siempre viva 742',
        tel: '+22 1323-2122'
    }
} */

/* Por consola mostrar un informe del usuario:
El usuario name lastname tiene las preferencias de usuario en \nModo: lenguaje:*/

/* console.log(`El usuario ${user["name"]} ${user["lastname"]} tiene las preferencias de usuario en: 
    - Modo: ${user["user preferences"]["theme"]}
    - Lenguaje: ${user["user preferences"]["lang"]}`) */

//El usuario name lastname creo su cuenta en la fecha, vive en adress y su telefono es tel

/* console.log(`El usuario ${user['name']} ${user['lastname']} creo su cuenta en ${user['user info']['created_at']}, vive en ${user['user info']['adress']} y su telefono es ${user['user info']['tel']}`) */
/* 
console.log(`El usuario ${user.name} ${user.lastname} creo su cuenta en ${user['user info'].created_at}, vive en ${user['user info'].adress} y su telefono es ${user['user info'].tel}`) */

/* Crear una funcion llamada
calcularIva(precio, tipo_factura)
tipo_factura 'A', 'C', 'B'
En el caso de si la factura es C o B el precio tendra el iva incluido
Ejemplo
calcularIva(100, 'C' | 'B')
{
    precio: 121
    iva: 21
    precioConIva: 121,
    factura: 'B' | 'C'
}
En el caso de si la factura es A el precio tendra el iva discriminado
Ejemplo
calcularIva(100, 'A')
{
    precio: 100
    iva: 21
    precioConIva: 121,
    factura: 'A'
}
{
    precio: number
    iva: number
    precioConIva,
    factura:
} */


const calcularIva = (precio,tipo_factura) =>{
    let iva = precio * 0.21
    
    const resultado = {
        precio: null,
        iva: iva,
        precionConIva: precio + iva,
        factura: tipo_factura
    }
    if(tipo_factura == 'B'|| tipo_factura == 'C'){
        resultado.precio = precio + iva
    }
    else if(tipo_factura == 'A'){
        resultado.precio = precio
    }
    return resultado   
}

console.log(calcularIva(1000,'A'))
console.log(calcularIva(1000,'B'))