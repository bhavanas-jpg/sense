import React from 'react'
import { useData } from '../../context/DataContext'


const Cart = () => {
  const {state} = useData();
  const {cartProducts} = state;
  return (
    <div className="container" style={{height: "100vh"}}>
    <h1>Cart</h1>
    <p>my cart has {cartProducts.length} items</p>
    {
      cartProducts.map((item)=>(
        <>
        <p>{item.name}</p>
        <p>{item.price}</p>
        </>
        
      ))
    }
    </div>

  )
}

export default Cart