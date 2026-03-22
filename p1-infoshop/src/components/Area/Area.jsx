import React from "react";
import './Area.css';
import Item from "../Item/Item";

const Area = (props) => {
    return (
        (props.items.length > 0) ? 
        <section className="area">
            <h3 className={props.primaryColor}>{props.name}</h3>
            <div className="items">
                {props.items.map((item) => <Item
                    key={item.name}
                    brand={item.brand}
                    name={item.name}
                    price={item.price}
                    condition={item.condition}
                    /> )}
            </div>
        </section> : ''
    )
}

export default Area;