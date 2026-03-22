import React from "react";
import './Area.css';
import Item from "../Item/Item";

const Area = (props) => {
    return (
        // const css = { backgroundColor: props.corSecundaria} → Exemplo didático.

        (props.items.length > 0) ? <section className="area" style={{backgroundColor:props.primaryColor}}>
            <h3>{props.nome}</h3>
            {/* style={ {borderColor: props.corPrimaria } } */}
            <div className="items">
                {props.items.map((item) => <Item
                    key={item.name}
                    brand={item.brand}
                    name={item.name}
                    price={item.price}
                    /> )}
            </div>
        </section> : ''
    )
}

export default Area;