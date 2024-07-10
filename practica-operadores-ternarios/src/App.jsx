import React from 'react'
import NavBar from './Components/NavBar'

function App() {
  const userData = {
    isLogged: false,
    isAdmin: true,
    lang: 'es'
  }

  const languageData = {
    EN:{
      inicio: 'Home',
      login: 'Log in',
      producto: 'Create product'
    },
    ES:{
      inicio: 'Inicio',
      login: 'Iniciar Sesion',
      producto: 'Crear producto'
    }
  }


  return (
    <NavBar userData={userData} languageData={languageData}/>
  )
}

export default App

