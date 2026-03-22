import React from "react";
import './RadioField.css';

const RadioField = (props) => {
    return (
        <label>
            <input 
            type="radio"
            {...props}
            />
            {props.value}
        </label>
    )
}

export default RadioField;