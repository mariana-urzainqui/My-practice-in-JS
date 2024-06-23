const formLoginHTML = document.getElementById('form-login')




const handleLogin = (evento) => {
    //Prevenimos que se recargue la pagina al enviarse el formulario
    evento.preventDefault()
    console.log('Formulario enviado')
    console.dir(formLoginHTML.password.value)
    console.dir(formLoginHTML.username.value)
}

formLoginHTML.addEventListener('submit', handleLogin)