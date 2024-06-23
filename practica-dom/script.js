/* 
const usuario = {
    nombre,
    apellido,
    direccion,
    edad
}

Mostarlo dentro de un div 

h2: Nombre completo: {nombre} {apellido}
span: Edad: {edad}
span: Direccion: {direccion}
*/

const usuarioHTML = document.getElementById('usuario')

const usuario = {
    nombre: 'Pepe',
    apellido: 'Suarez',
    direccion: '9 de julio 5847',
    edad: 20
}

usuarioHTML.innerHTML = `
<h2>Nombre completo: ${usuario.nombre}  ${usuario.apellido}</h2>
<span>Dirección: ${usuario.direccion}</span>
<span>Edad: ${usuario.edad}</span>
`
