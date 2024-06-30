import React from 'react'

const RowInfo = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <div>{props.children}</div>
        </div>
    )
}

export default RowInfo
