/* import React from 'react'
import CodePointInfo from './Components/CodePointInfo'

function App() {
  return (
    <CodePointInfo>
      <span>Unicode: U+F61F</span>
      <span>CSS: \F61F</span>
      <span>JS: \uF61F</span>
      <span>HTML: &#xF61f ;</span>
    </CodePointInfo>
  )
}

export default App */

/* import React from "react"
import RowInfo from "./Components/RowInfo"

const App = () =>{
  return(
    <>
    <RowInfo title = 'Icon Font'>
      <span>Using the web font? Copy, paste, and go.</span>
      <code>{`<i class="bi bi-window-sidebar"></i>`}</code>
    </RowInfo>
    <RowInfo title = 'Code point'>
      <span>Unicode: U+F61F</span>
      <span>CSS: \F61F</span>
      <span>JS: \uF61F</span>
      <span>HTML: &#xF61f ;</span>
    </RowInfo>
    <RowInfo title = 'Copy HTML'>
      <span>Paste the SVG right into your project's code.</span>
      <code>{`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-window-sidebar" viewBox="0 0 16 16">
  <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
  <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h4v8H2a1 1 0 0 1-1-1m5 1V6h9v7a1 1 0 0 1-1 1z"/>
</svg>`}</code>
    </RowInfo>
    </>
  )
}

export default App */

/* import React from "react"


const App = () =>{
  const nombres = ['pepe', 'juan', 'diego', 'maria']
  const listaNombres = nombres.map((nombre)=>{
    return <div>{nombre}</div>
  })
  return(
    <>
    <h2>Nombres</h2>
      {listaNombres}
    </>
  )
}

export default App
*/

import React from "react" 
import UserCard from "./Components/UserCard/UserCard"
import UserCardList from "./Components/UserCardList/UserCardList"


const App = () =>{
  const usuarios = [
    {
      nombre: 'Pepe',
      rol: 'Web Developer',
      anios_experiencia: 14
    },
    {
      nombre: 'Julieta',
      rol: 'SEO Master',
      anios_experiencia: 10
    }
  ]


  
  return(
    <>
      <UserCardList usuarios={usuarios}/>
    </>
  )
}

export default App