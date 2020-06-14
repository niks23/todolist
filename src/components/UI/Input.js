import React from 'react'

const Input = props =>  {
    return (
        <input 
            name={props.name}
            className={props.class}
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.changed}
        />
    )
}

export default Input;