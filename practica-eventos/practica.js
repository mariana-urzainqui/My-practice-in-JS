/* 
En html tendremos un numero que se mostrara en un span, dicho numero seria inicialmente 1
Debemos crear el numero mediante JS
Habra un boton <button>+</button>
Cuando ese boton sea clickeado el numero debera incrementarse en 1

*/

const cantidadHTML = document.getElementById('cantidad')
const btnIncrementarHTML = document.getElementById('btn-incrementar')
const btnDecrementarHTML = document.getElementById('btn-decrementar')
const btnComprarHTML = document.getElementById('comprar')
const contenedorContadorHTML = document.getElementById('contenedor-contador')

contenedorContadorHTML.style.display = 'none'

const mostrarContador = () =>{
    btnComprarHTML.style.display = 'none'
    contenedorContadorHTML.style.display = 'flex'
} 

const renderizarContador = () => cantidadHTML.innerText = cantidad

let cantidad = 1
renderizarContador()

const incrementar = () =>{
    cantidad = cantidad + 1
    renderizarContador()
}

const decrementar = () =>{
    if(cantidad > 1){
        cantidad = cantidad - 1
    }
    else if (numero === 1){
    btnComprarHTML.style.display = 'flex'
    contenedorContadorHTML.style.display = 'none'
    }
    renderizarContador()
}

btnComprarHTML.addEventListener('click', mostrarContador)
btnIncrementarHTML.addEventListener('click', incrementar)
btnDecrementarHTML.addEventListener('click', decrementar)