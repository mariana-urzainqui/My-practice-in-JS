import React, { useState } from "react"
const Counter = (props) => {
    const [contador, setContador] = useState(0)

    const handleClickAddButton = () => {
        setContador(contador + 1)
    }

    const handleClickRemoveButton = () => {
        contador > 0
            ? setContador(contador - 1)
            : setContador(contador)
    }
    return (
        <div>
            <div>
                <button onClick={handleClickRemoveButton}>-</button>
                <span>{contador}</span>
                {contador < props.limit
                    ? <button onClick={handleClickAddButton}>+</button>
                    : <span>No se puede incrementar mas de {props.limit}</span>
                }
            </div>
        </div>
    )
}

export default Counter
