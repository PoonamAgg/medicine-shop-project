import React, { useState } from "react";
import ProductList from "./ProductList";

const AddAdminData = () => {
  const [medicineName, setMedicineName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [adminData, setAdminData] = useState([]);

const medicineHandler = (e) =>{
    setMedicineName(e.target.value);
}

const priceHandler = (e) =>{
    setPrice(e.target.value);
}

const descriptionHandler = (e) =>{
    setDescription(e.target.value);
}

const quantityHandler = (e) =>{
    setQuantity(e.target.value);
}

  const submitHandler = (e) => {
    e.preventDefault();

    const obj = {
      name:medicineName,
      des: description,
      amount: price,
      quant: quantity
    };
setAdminData([...adminData, obj]);

localStorage.setItem(Math.random()+1, JSON.stringify(obj));

setDescription('');
setMedicineName('');
setPrice('');
setQuantity('');

  };

  

  return (
    <div style={{paddingTop: '200px'}}>
      <form onSubmit={submitHandler}>
        <label>Meidicine:</label>
        <input
          type="text"
          placeholder="Enter Medicine Name"
          value={medicineName}
          onChange={medicineHandler}
        ></input>

        <label> Description:</label>
        <input type="text" placeholder="Enter Description" value={description} onChange={descriptionHandler}></input>
        <label>Price:</label>
        <input type="number" placeholder="Enter Price" value={price} onChange={priceHandler}></input>
        <label>Quantity Available:</label>
        <input type="number" placeholder="Enter quantity" value={quantity} onChange={quantityHandler}></input>
        <button type="submit"> Add Product</button>
      </form>
      <ProductList adminData = {adminData}/>
    </div>
  );
};

export default AddAdminData;
