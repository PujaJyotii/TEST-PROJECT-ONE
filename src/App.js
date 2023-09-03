import React, { useEffect, useState } from 'react';
import ProductForm from './components/ProductForm';
import UserList from './components/UserList';


function App() {
  const [products,setProducts] = useState([])

  useEffect(() => {
const storedProduct = JSON.parse(localStorage.getItem('products'))|| [];
setProducts(storedProduct)
  },[])

  useEffect(() => {
    localStorage.setItem('products',JSON.stringify(products))
  },[products])

  const onAddProduct = (product) => {
    if(product.id && product.price && product.detail)
    {
    setProducts([...products,product])
    }
  }

  const DeleteProduct =(id) => {
    const updateProduct = products.filter((products) => products.id !== id);
    setProducts(updateProduct);
    localStorage.setItem('products',JSON.stringify(updateProduct))
  }

  return (
    <div>
<ProductForm onAddProduct={onAddProduct}/>
<UserList products={products} onDeleteProduct={DeleteProduct} />

    </div>
  );
}

export default App;
