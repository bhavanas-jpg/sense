import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { actionTypes } from "../../reducer/actionTypes";
import { removeFromCart } from "../../services/cart-services/removeFromCart";
import { cartCounterService } from "../../services/cart-services/cartCounterService";
import { useData } from "../../context/DataContext";
import "./Cart.css"
import { addToWishlistService, removeFromWishlistService } from "../../services/wishlist-services";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';


const CartProduct = ({ product }) => {
  const {state , dispatch, setDisable, disable } = useData();
  const { auth } = useAuth();
  const { wishlistProducts} = state;
  const [addingToWishList, setAddingToWishlist] = useState(false);
  const { SET_CART, SET_WISHLIST } = actionTypes;
  const [wishlist, setWishlist] = useState({
    inWishlist :false,
    addingToWishlist: false,
    removeFromWishlist: false
  });
  const navigate = useNavigate();

  const cartCounterServerCall = async (operation) => {
    let res = null;
    try {
      if (product.qty === 1 && operation === "decrement") {
        toast.success("Item removed from cart");
        res = await removeFromCart(product._id, auth.token);
      } else if (operation === "remove") {
        res = await removeFromCart(product._id, auth.token);
        toast.success("Item removed from cart");
      } else {
          toast.success("Successfully updated cart");
        res = await cartCounterService(product._id, auth.token, operation);
      }
      if (res.status === 200) {
       
        dispatch({
          type: SET_CART,
          payload: { cart: res.data.cart },
        });
      }
    } catch (error) {
      toast.error("Could not update cart, try again later");
    }
  };

  const addToWishlistServerCall =async()=>{
    setAddingToWishlist(true);
    setDisable(true);
    try{
    const res = await addToWishlistService(product, auth.token);
    if(res.status === 200 || res.status === 201){
      toast.success("added to wishlist");
      setAddingToWishlist(false)
      dispatch({
        type: SET_WISHLIST,
        payload: {wishlist : res.data.wishlist}
      })
    }
    setDisable(false);
    }catch(error){
      console.error(error);
      toast.error("Couldn't add to wishlist, try again later!")
    }
  }
  
  const removeProductWishlistServerCall =async()=>{
    setWishlist({...wishlist, removeFromWishlist :true })
    setDisable(true);
    try{
      const res = await removeFromWishlistService(product._id, auth.token);
      if(res.status === 200 || res.status === 201){
        toast.success("Removed from wishlist");
        setWishlist({...wishlist, removeFromWishlist :false, inWishlist: false});
        dispatch({
          type: SET_WISHLIST,
          payload: {wishlist: res.data.wishlist}
        }) 
      }
      setDisable(false);
    }catch(error){
      toast.error("Please try again after some time")
    }
  }

  useEffect(() => {
    wishlistProducts.find((item) => item._id === product._id && setWishlist({...wishlist,inWishlist:true }))
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
          disabled={disable}
             className={wishlist.inWishlist ? "cart-wishlist-btn active":"cart-wishlist-btn " }
             onClick={
              auth.isAuth ?
              wishlist.inWishlist ?
                () =>{
                  console.log("remove it");
                  removeProductWishlistServerCall() 
                } : 
                () => addToWishlistServerCall()
                :() => navigate("/login")
             }
            >
              <i className={ wishlist.inWishlist ? "fa fa-thin fa-heart active" : "fa fa-thin fa-heart" }></i>       
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
