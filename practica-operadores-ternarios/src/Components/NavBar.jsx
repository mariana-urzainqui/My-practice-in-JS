import React from 'react'

const NavBar = (props) => {
    const isLogged = props.userData.isLogged
    const isAdmin = props.userData.isAdmin
    const lang = props.userData.lang.toUpperCase()
    const language = props.languageData[lang]
    return (
        <nav>
            <span>Logo</span>
            <span>{language.inicio}</span>
            {isAdmin && <button>{language.producto}</button>}
            {!isLogged && <button>{language.login}</button>}
        </nav>

    )
}

export default NavBar
