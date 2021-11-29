import React, { useState } from "react";
import "./styles.css";
import api from "../../Api";



function CreateProduct(){
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [discPrice, setDiscPrice] = useState("");
    const [qttInventory, setQttInventory] = useState("");
    const [cateId, setCateId] = useState("");

    async function sendForm(event){
        event.preventDefault();
        
        if (productName.length < 3){
            console.log(" Nome do produto muito curto")
        }else if (qttInventory.length < 1){
            console.log("Deve haver pelo menos um produto no estoque")
        }else {
            let response = await api.registerProduct(productName, price, discPrice, qttInventory, cateId);
            if (response){
                console.log("Produto registrado")
            }else{
                console.log("Produto não registrado")
            }
        }
    }

    function handleProductName(event){
        setProductName(event.target.value);
    }

    function handlePrice(event){
        setPrice(event.target.value);
    }

    function handleDiscPrice(event){
        setDiscPrice(event.target.value);
    }

    function handleQttInventory(event){
        setQttInventory(event.target.value);
    }

    function handleCateId(event){
        setCateId(event.target.value);
    }

    return(
        <div className="container">
            <h1>Register product</h1>
            <form className="form-container" onSubmit={sendForm}>
                <input placeholder="Product name" onChange={handleProductName}/>
                <input placeholder="Price" onChange={handlePrice}/>
                <input placeholder="Discount price (%)" onChange={handleDiscPrice}/>
                <input placeholder="Quantity in inventory" onChange={handleQttInventory}/>
                <input placeholder="Id of the category" onChange={handleCateId}/>
                <button type="submit">Register product</button>
            </form>
        </div>
    );
}

export default CreateProduct;