import React from "react";
import './RadioField.css';

const RadioField = (props) => {
    return (
        <label>
            <input type="radio"
            value={props.value}
            name={props.name}
            checked={props.selectedValue === props.value}
            onChange={props.onChange}
            />
            {props.value}
        </label>
    )
}

export default RadioField;