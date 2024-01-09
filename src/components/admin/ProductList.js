import React from 'react'

const ProductList = (props) => {
  return (
    <div>
      <h1>Warehouse</h1>
      <hr/>
      <label>Medicine name: </label>
      <label>Description: </label>
      <label>Price: </label>
      <label>Quantity: </label>
      <label>Add to Cart Button</label>
      {props.adminData.map((admin,index)=>(
        <li>
        {admin.name} -- {admin.des} --{admin.amount} -- {admin.quant} -- <button>Add to Cart</button>
      </li>))}
    </div>
  )
}

export default ProductList
