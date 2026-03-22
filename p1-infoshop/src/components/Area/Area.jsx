import React from "react";
import './Area.css';
import Item from "../Item/Item";

const Area = (props) => {
    return (
        (props.items.length > 0) ? <section className="area" style={{backgroundColor:props.primaryColor}}>
            <h3>{props.name}</h3>
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