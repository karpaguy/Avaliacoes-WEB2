import React, { useState } from "react";
import './Forms.css';
import TextField from "../FormsComponents/TextField/TextField";
import Dropdown from "../FormsComponents/Dropdown/Dropdown";
import Button from "../Button/Button";

const Forms = (props) => {
    const [itemSection, setItemSection] = useState(props.sectionArea[0]);
    const [itemBrand, setItemBrand] = useState(props.brandsArea[0]);
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');

    const onSave = (e) => {
        e.preventDefault();

        props.onAddProduct(itemSection,{
            "itemSection":
            "brand": itemBrand,
            "name": itemName,
            "price": itemPrice 
        });
        setItemSection(props.sectionArea[0]);
        setItemBrand(props.brandsArea[0]);
        setItemName('');
        setItemPrice('');
    }

    return (
        <div className="forms">
            <form onSubmit={onSave}>
                <Dropdown label="Seção:" value={itemSection} items={props.sectionArea} onChange={(e) => setItemSection(e.target.value)}/>
                <Dropdown label="Marca:" value={itemBrand} items={props.brandsArea} onChange={(e) => setItemBrand(e.target.value)}></Dropdown>
                <TextField label="Nome:" value={itemName} placeholder="Texto" onChange={(e) => setItemName(e.target.value)}></TextField>
                <TextField label="Valor:" value={itemPrice} placeholder="Texto" onChange={(e) => setItemPrice(e.target.value)}></TextField>
                <Button>Cadastrar Item</Button>
            </form>
        </div>
    ) 
}

export default Forms;