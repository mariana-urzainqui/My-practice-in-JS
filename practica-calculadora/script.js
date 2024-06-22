/* ## Login

Debo tener una funcion llamada login que active toda la logica del login

logica de login:

Vamos a solicitar al usuario un email
Validarermos que el email sea un email
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(stringAValidar)

Ejemplo de uso
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test('pepe@gmail.com')

Vamos a solictar al usuario una password 
validar que tenga mas de 6 caracteres, que tenga almenos 1 mayuscula y que no sea '' o null

Si todo esta correcto dira por alerta('Usuario {email} registrado con exito') y retornara al usuario como objeto:

EJEMPLO:

login() //retorna  el usuario {
    email: 'value@gmail.com',
    password: 'Pepe123'
} */

const validarPassword = (password) => {
    return password && password.length > 6 && password.toLowerCase() !== password
}
const validarEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)

const login = () =>{
    const usuario = {
        email: null,
        password: null,
    }

    let solicitarEmail = prompt('Ingrese su email para ingresar')
        while (!validarEmail(solicitarEmail)){
    solicitarEmail = prompt('Error: Ingrese un email correcto')
    }
    usuario.email = solicitarEmail

    let solicitarPassword = prompt('Ingrese una contraseña que tenga mas de 6 caracteres y al menos una mayuscula')
        while(!validarPassword(solicitarPassword)){
    solicitarPassword = prompt('Error: Ingrese una contraseña válida')
    }
    usuario.password = solicitarPassword
    alert(`Usuario ${usuario.email} registrado`)

    return usuario
}


/* ## Calculadora de operaciones

Crear una funcion llamada calculadora() que de inicio a la sig logica
-Operaciones Disponibles:
    1) +
    2) -

Solicitar una operacion y verificar que la operacion sea valida (es valida si esta dentro de las operaciones disponibles)
Solicitar un numero 1 y validarlo
Solicitar un numero 2 y validarlo

Al finalizar las solicitudes mostrar el resultado por alerta de la sig manera:
'El resultado de {numero1} {operacion} {numero2} es {resultado} */

const validarOperacion = (operacion) => {
    const operacionesDisponibles = ['+' , '-']
    return operacionesDisponibles.includes(operacion)
}
const validarNumero = (numero) => numero && !isNaN(numero)

const solicitarNumero = () => {
    let numero = prompt('Ingrese un numero')
    while(!validarNumero(numero)){
        numero = prompt('Error: Ingrese un numero válido')
    }
    return Number(numero)
}


const calculadora = () =>{
    let operacion = prompt('Ingrese + si quiere sumar o - si quiere restar')
    while(!validarOperacion(operacion)){
        operacion = prompt('Error: Ingrese una operación válida')
    }
    
    let numero1 = solicitarNumero()

    let numero2 = solicitarNumero()

    let resultado = 0
    if(operacion === '+'){
        resultado = numero1 + numero2
    }
    else if( operacion === '-'){
        resultado = numero1 - numero2
    }

    alert(`El resultado de ${numero1} ${operacion} ${numero2} es ${resultado}`)
}

login()
calculadora()