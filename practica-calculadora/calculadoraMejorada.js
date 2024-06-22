// Validaciones:

const validarOperacion = (operacion) => {
    const operacionesDisponibles = ['+' , '-']
    return operacionesDisponibles.includes(operacion)
}
const validarNumero = (numero) => numero && !isNaN(numero)

const validarPassword = (password) => {
    return password && password.length > 6 && password.toLowerCase() !== password
}
const validarEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)

//Datos:

const DATOS ={
    EMAIL: {
        mensaje: 'Ingrese su email para ingresar',
        error: 'Error: Ingrese un email correcto',
        validacion: validarEmail
    },
    PASSWORD: {
        mensaje:'Ingrese una contraseña que tenga mas de 6 caracteres y al menos una mayuscula',
        error: 'Error: Ingrese una contraseña válida',
        validacion: validarPassword
    },
    OPERACION:{
        mensaje:'Ingrese + si quiere sumar o - si quiere restar',
        error: 'Error: Ingrese una operación válida',
        validacion: validarOperacion
    },
    PRIMER_NUMERO:{
        mensaje:'Ingrese el primer numero',
        error:'Error: Ingrese un numero válido',
        validacion: validarNumero
    },
    SEGUNDO_NUMERO:{
        mensaje:'Ingrese el segundo numero',
        error:'Error: Ingrese un numero válido',
        validacion: validarNumero
    }
}

//Solicitud y validacion de datos

const solicitarDato = (objeto) =>{
    let dato = prompt(objeto.mensaje)
    while (!objeto.validacion(dato)){
        dato = prompt(objeto.error)
    }
    return dato
}

//Login

const login = () =>{
    const usuario = {
        email: null,
        password: null,
    }

    usuario.email = solicitarDato(DATOS.EMAIL)

    usuario.password = solicitarDato(DATOS.PASSWORD)

    alert(`Usuario ${usuario.email} registrado`)

    return usuario
}

//Calculadora

const calculadora = () =>{
    let operacion = solicitarDato(DATOS.OPERACION)

    let numero1 = solicitarDato(DATOS.PRIMER_NUMERO)

    let numero2 = solicitarDato(DATOS.SEGUNDO_NUMERO)

    let resultado = 0

    if(operacion === '+'){
        resultado = Number(numero1) + Number(numero2)
    }
    else if( operacion === '-'){
        resultado = Number(numero1) - Number(numero2)
    }
    
    alert(`El resultado de ${numero1} ${operacion} ${numero2} es ${resultado}`)
    
    return resultado
}

login()
calculadora()