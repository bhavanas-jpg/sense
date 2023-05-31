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
   <>
   {cartProducts?.length === 0 ?
    <div className="container hg-100"><h1>No Items in Cart </h1></div>
     : 
     <div className="container hg-100" >
    <h1 className="heading">Your Cart</h1> 
    {
      cartProducts.map((item)=>(  
        <div key={item._id}>
              <CartProduct product={item} />
        </div>
         ))
     } 
   <CartDetails products={cartProducts}/> 
    </div>
     }
   </> 
  )
}

export default Cart