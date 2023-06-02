import React from 'react'
import { useData } from '../../context/DataContext'
import { useAuth } from '../../context/AuthContext';
import { actionTypes } from '../../reducer/actionTypes';
import { removeFromCart } from '../../services/cart-services/removeFromCart';
import CartProduct from './CartProduct';
import CartDetails from './CartDetails';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const {state} = useData();
  const {cartProducts} = state;
  const navigate = useNavigate();

  console.log(cartProducts);

  return (
   <>
   {cartProducts?.length === 0 ?
      <div className="container hg-100 txt-algn--center">
      <h1 className="mb-1 mt-1">No Items in cart </h1>
      <button 
      className="secondary--btn"
      onClick={()=>navigate("/products")}>Shop Now</button>
      </div>
     : 
     <div className="container hg-100 cart" >
    <h1 className="heading">Your Cart</h1> 
    <section className="cart-section">
      <div className="cart-product--section">
      {
      cartProducts.map((item)=>(  
        <div key={item._id}>
              <CartProduct product={item} />
        </div>
         ))
     } 
      </div>
      <div className="cart-detail--section"><CartDetails products={cartProducts}/></div>
    </section>
    </div>
     }
   </> 
  )
}

export default Cart