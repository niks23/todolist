import React from 'react'

const Input = props =>  {
    return (
        <input 
            name={props.name}
            type={props.type}
            value={props.values}
            onChange={props.changed}
        />
    )
}

export default Input;