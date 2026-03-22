import React from "react";
import './Field.css';

const TextField = (props) => {
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            />
        </div>
    )
}

export default TextField;