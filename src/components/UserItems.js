import React from "react";

const UserItems = ({product, onDeleteProduct}) => {
    const DeleteProduct= () => {
        onDeleteProduct(product.id)
    }
    return (
        <li>
          {product.id} - {product.price} - {product.detail}
            <button onClick={DeleteProduct}>Delete</button>
        </li>
    );

};


export default UserItems