import React from "react";
import './Item.css';

const Item = ({brand, name, price, condition}) => {
    return (
        <div className="item">
            <p className="brand">{brand}</p>
            <p className="name">{name}</p>
            <p className="price">{price}</p>
            <p className="condition">{condition}</p>
        </div>
    )
}

export default Item;