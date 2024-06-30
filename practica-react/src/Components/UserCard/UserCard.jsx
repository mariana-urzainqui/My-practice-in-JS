import React from 'react'
import './UserCard.css'

const UserCard = (props) => {
    return (
        <div className='user-card'>
            <h3>{props.nombre}</h3>
            <div>Rol: {props.rol}</div>
            <div>Años de Experiencia:{props.anios_experiencia}</div>
        </div>
    )
}

export default UserCard
