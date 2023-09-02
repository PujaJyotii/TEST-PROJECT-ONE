import React from "react";

const UserList = (props) => {

    return (
        <ul>
            <p>Product</p>
            
            {props.products.map(product => (
             <li key={product.unique}>
                {product.id} - {product.price} - {product.detail} {<button>Delete Product</button>}
             </li>
            ))}
            
 
        </ul>
    )

}

export default UserList;