import React from "react";
import UserItems from "./UserItems";

const UserList = ({products, onDeleteProduct}) => {
    const totalWorth = products.reduce((acc, product) => acc + product.price, 0);

    return (
        <div>
            <p>Product</p>
            <ul>
            {products.map((product) => (
              <UserItems key={product.id} product={product} onDeleteProduct={onDeleteProduct}/>
            ))}
            </ul>
            <p>Total Worth: {totalWorth}</p>
 
        </div>
        
    );

}

export default UserList;