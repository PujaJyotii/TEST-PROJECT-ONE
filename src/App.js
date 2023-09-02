import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import UserList from './components/UserList';


function App() {
  const [userList,setUserList] = useState([])

  const addUserHandler = (pId,pPrice,pName) => 
  {
 setUserList((prevProduct) => {
  return [...prevProduct,{id:pId ,price:pPrice,detail:pName , unique:pId}]
  
 })
 
  }
  return (
    <div>
<ProductForm onAddProduct={addUserHandler}/>
<UserList products={userList} />
    </div>
  );
}

export default App;
