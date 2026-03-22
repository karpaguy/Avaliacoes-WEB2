import React from "react";
import './TextField.css';

const TextField = (props) => {
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            />
        </div>
    )
}

export default TextField;