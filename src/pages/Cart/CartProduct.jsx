import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { actionTypes } from "../../reducer/actionTypes";
import { removeFromCart } from "../../services/cart-services/removeFromCart";
import { cartCounterService } from "../../services/cart-services/cartCounterService";
import { useData } from "../../context/DataContext";
import "./Cart.css"
import { addToWishlistService } from "../../services/wishlist-services";
import { useNavigate } from "react-router-dom";

const CartProduct = ({ product }) => {
  const {state , dispatch } = useData();
  const { auth } = useAuth();
  const [inWishlist, setInWishlist] = useState(false);
  const { wishlistProducts} = state;
  const [addingToWishList, setAddingToWishlist] = useState(false);
  const { SET_CART, SET_WISHLIST } = actionTypes;
  const navigate = useNavigate();

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

  const addToWishlistServerCall =async()=>{
    setAddingToWishlist(true)
    try{
    const res = await addToWishlistService(product, auth.token);
    if(res.status === 200 || res.status === 201){
      // toast.success("added to wishlist");
      setAddingToWishlist(false)
      dispatch({
        type: SET_WISHLIST,
        payload: {wishlist : res.data.wishlist}
      })
    }
    }catch(error){
      console.error(error);
      // toast.error("Couldn't add to wishlist, try again later!")
    }
  }
  useEffect(() => {
    wishlistProducts.find((item) => item._id === product._id) &&
      setInWishlist(true);
  }, [ wishlistProducts])

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
          <button 
             className={inWishlist ? "cart-wishlist-btn active":"cart-wishlist-btn " }
             onClick={
              auth.isAuth ?  inWishlist ?
                            () => navigate("/wishlist") : ()=>addToWishlistServerCall()
                            :()=>navigate("/login")

             }
            >
            {inWishlist ? "Go to Wishlist" : "Add to WishList"}                
            </button>
      </div>
      </div>
  {/***product-quantity */}
      <div className="product-quantity">
        <span className="product-quantity--btn">
        <button 
        className="plus-icon"
        onClick={() => cartCounterServerCall("increment")}>+</button>
    <span>{product.qty}</span>
    <button 
    className="minus-icon"
    onClick={() => cartCounterServerCall("decrement")}>-</button>
        </span>
    <button 
    className="delte-icon"
    onClick={() => cartCounterServerCall("remove")}>

    <i class=" fa fa-solid fa-trash"></i>
    </button>
    
    </div>
   
       
      <div className="product-total">
        <p>${product.price * product.qty}</p>
      </div>
      
    </div>
 

  );
};

export default CartProduct;
