import React from 'react'
import { useData } from '../../context/DataContext'
import { useAuth } from '../../context/AuthContext';
import { actionTypes } from '../../reducer/actionTypes';
import { removeFromCart } from '../../services/cart-services/removeFromCart';
import CartProduct from './CartProduct';
import CartDetails from './CartDetails';


const Cart = () => {
  const {state} = useData();
  const {cartProducts} = state;

 




  return (
    <div className="container" style={{height: "100vh"}}>
    <h1>Your Cart</h1>
    {/* <p>your cart has {cartProducts.length} items</p> */}
    <>
    {
      cartProducts.map((item)=>(  
        <div key={item._id}>
              <CartProduct product={item} />
        </div>
         ))
     } 
   <CartDetails products={cartProducts}/> 
      
        
    
   
    </>
    </div>
  )
}

export default Cart