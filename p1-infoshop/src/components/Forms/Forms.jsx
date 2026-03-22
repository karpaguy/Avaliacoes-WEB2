import React from "react";
import { useState } from "react";
import './Forms.css';
import Field from "../FormsComponents/Field/Field";
import RadioField from "../FormsComponents/RadioField/RadioField";
import Dropdown from "../FormsComponents/Dropdown/Dropdown";
import Button from "../Button/Button";

const Forms = (props) => {
    const [itemSection, setItemSection] = useState(props.sectionArea[0]);
    const [itemBrand, setItemBrand] = useState(props.brandsArea[0]);
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemCondition, setItemCondition] = useState('Novo');

    const onSave = (e) => {
        e.preventDefault();

        props.onAddProduct({
            "section": itemSection,
            "brand": itemBrand,
            "name": itemName,
            "price": itemPrice,
            "condition": itemCondition
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
                <Field type="text" label="Nome:" value={itemName} placeholder="Nome" onChange={(e) => setItemName(e.target.value)}></Field>
                <Field type="number" label="Valor:" value={itemPrice} placeholder="0" onChange={(e) => setItemPrice(e.target.value)}></Field>
                <div className="radio-area">
                    <RadioField value="Novo" name="condition" selectedValue={itemCondition} onChange={(e) => setItemCondition(e.target.value)}></RadioField>
                    <RadioField value="Usado" name="condition" selectedValue={itemCondition} onChange={(e) => setItemCondition(e.target.value)}></RadioField>
                </div>
                <Button>Cadastrar Item</Button>
            </form>
        </div>
    ) 
}

export default Forms;