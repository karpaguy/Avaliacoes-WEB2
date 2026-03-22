import React from "react";
import './Field.css';

const Field = (props) => {
    return (
        <div className="field">
            <label>{props.label}</label>
            <input type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            />
        </div>
    )
}


export default Field;