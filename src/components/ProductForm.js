import React, { useState } from "react";

const ProductForm =({onAddProduct}) => {
    const [enteredId,setEnteredId] = useState('');
    const [enteredPrice,setEnteredPrice] =useState('');
    const [enteredProduct,setEnteredProduct] = useState('');
    const submitFormHandler = (event) => {
        event.preventDefault();
        if(enteredId && enteredPrice && enteredProduct)
        {
        const products=
        { id:enteredId,
            price:parseFloat(enteredPrice),
            detail:enteredProduct}
        onAddProduct(products)
        setEnteredId('');
        setEnteredPrice('');
        setEnteredProduct('');
        }
    }
    const idChangeHandler = (event) => {
        setEnteredId(event.target.value)
    }
    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value)
    }
    const productChangeHandler = (event) => {
        setEnteredProduct(event.target.value)
    }

   
    return (
    <div>
        <form onSubmit={submitFormHandler}>
        <label htmlFor="productId">Product Id:</label>
        <input type="number" id="productId" onChange={idChangeHandler} value={enteredId}/>
        <label htmlFor="sellingPrice">Selling Price:</label>
        <input type="number" id="sellingPrice" onChange={priceChangeHandler} value={enteredPrice}/>
        <label htmlFor="productName">Product Name:</label>
        <input type="text" id="productName" onChange={productChangeHandler} value={enteredProduct}/>
        <button type="submit">Add Product</button>
        </form>
    </div>
    )
}

export default ProductForm