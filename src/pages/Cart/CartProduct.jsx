import React from "react";
import { useAuth } from "../../context/AuthContext";
import { actionTypes } from "../../reducer/actionTypes";
import { removeFromCart } from "../../services/cart-services/removeFromCart";
import { cartCounterService } from "../../services/cart-services/cartCounterService";
import { useData } from "../../context/DataContext";
import "./Cart.css"

const CartProduct = ({ product }) => {
  const { dispatch } = useData();
  const { auth } = useAuth();
  const { SET_CART, SET_WISHLIST } = actionTypes;

  const cartCounterServerCall = async (operation) => {
    let res = null;
    try {
      if (product.qty === 1 && operation === "decrement") {
        res = await removeFromCart(product._id, auth.token);
      } else if (operation === "remove") {
        res = await removeFromCart(product._id, auth.token);
      } else {
        res = await cartCounterService(product._id, auth.token, operation);
      }
      if (res.status === 200) {
        // toast.success("Successfully updated cart");
        dispatch({
          type: SET_CART,
          payload: { cart: res.data.cart },
        });
      }
    } catch (error) {
      // toast.error("Could not update cart, try again later");
    }
  };

  return (
   
      <div className="cart-product-card ">
      <div className="cart-product">
        <div className="cart-product-image">
        <img src={product.img} alt="" />
        </div>    

        <div >
          <div>
          <p className="cart-product-name">{product.name}</p>
        <p>${product.price }</p>
          </div> 
          <button>Add to wishlist</button>
      </div>
      </div>
  {/***product-quantity */}
      <div className="product-quantity">
        <span className="product-quantity--btn">
        <button onClick={() => cartCounterServerCall("increment")}>+</button>
    <span>{product.qty}</span>
    <button onClick={() => cartCounterServerCall("decrement")}>-</button>
        </span>
    <button onClick={() => cartCounterServerCall("remove")}>remove</button>
    
    </div>
   
       
      <div className="product-total">
        <p>Total</p>
        <p>${product.price * product.qty}</p>
      </div>
      
    </div>
 

  );
};

export default CartProduct;
