import React from "react";
import './Dropdown.css';

const Dropdown = (props) => {
    return (
        <div className="dropdown-field">
            <label>{props.label}</label>
            <select value={props.value} onChange={props.onChange}>
            {props.items.map(item => { return <option key={item} value={item}>{item}</option> })}
            </select>

        </div>
    )
}

export default Dropdown;