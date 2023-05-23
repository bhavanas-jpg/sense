import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useData } from '../../context/DataContext';
import { addToCartService } from '../../services/services';
import { useAuth } from '../../context/AuthContext';
import { actionTypes } from '../../reducer/actionTypes';
import {addToWishlistService, removeFromWishlistService,getWishlistService } 
from '../../services/wishlist-services/index'


const ProductCard = ( {product}) => {
  const navigate = useNavigate();
  const {state, dispatch} = useData();
  const {cartProducts, wishlistProducts} = state;
  const {auth} = useAuth();
  const {SET_CART, SET_WISHLIST} = actionTypes;

  const [inCart, setInCart] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);
  const [wishlist, setWishlist] = useState({
    inWishlist :false,
    addingToWishlist: false,
    removeFromWishlist: false
  });
  


  const {_id,name,img,price,ratings} = product;

 
  const addToCartServerCall = async() =>{
    setAddingToCart(true);
    try{
      const res = await addToCartService(product, auth.token);
      if(res.status === 200 || res.status === 201 ){
        //toast.success("Added to Cart");
        setAddingToCart(false);
        dispatch({
          type: SET_CART,
          payload: {cart: res.data.cart}
        })
      }
    }catch(error){
      console.error(error);
      // toast.error("Couldn't add to cart, try again later!")
    }
  }
  const addToWishlistServerCall =async()=>{
    setWishlist({...wishlist, addingToWishlist :true})
    try{
    const res = await addToWishlistService(product, auth.token);
    if(res.status === 200 || res.status === 201){
      // toast.success("added to wishlist");
      setWishlist({...wishlist, addingToWishlist :false});
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

  const removeProductWishlistServerCall =async()=>{
    setWishlist({...wishlist, removeFromWishlist :true })
    try{
      const res = await removeFromWishlistService(product._id, auth.token);
      if(res.status === 200 || res.status === 201){
        // toast.success("Removed from wishlist");
        setWishlist({...wishlist, removeFromWishlist :false, inWishlist: false});
        dispatch({
          type: SET_WISHLIST,
          payload: {wishlist: res.data.wishlist}
        }) 
      }

    }catch(error){
      // toast.error("Please try again after some time")
    }

  }

  useEffect(()=>{  
    cartProducts.find((item) => item?._id === product?._id) && setInCart(true);
    wishlistProducts.find((item) => item._id === product._id && setWishlist({...wishlist,inWishlist:true }))
  }, [cartProducts,wishlistProducts ])



  return (
 <>
    <div className="product_card"
        key={_id}
        >
      <button      
      className=  "wishlist-btn"
      onClick={
        auth.isAuth ? 
        wishlist.inWishlist 
        ? ()=> removeProductWishlistServerCall()
        : () => addToWishlistServerCall()
        : ()=> navigate("/login")
      }     
      > 
       <i className= {wishlist.inWishlist ?"fa fa-thin fa-heart active" : "fa fa-thin fa-heart"}
        
        //  ,
      ></i>
       </button>
        <img src={img} alt="card-image" 
                onClick={()=> navigate(`/${_id}`)}/>
      <div className="product_card--text">  
        <h3 className="product-card--title"
        onClick={()=> navigate(`/${_id}`)}
        >{name}</h3>
        <p>${price}</p>
        <p className="product-ratings">{ratings}
        <i class=" fa fa-thin fa-star"></i>
        </p>
        <button 
        onClick={
          auth.isAuth ? 
          inCart ? ()=>navigate("/cart"): ()=>addToCartServerCall()
          : ()=>navigate("/login")
        }
        className="cart-btn">
          {inCart ? "Go to Cart" : "Add to cart"}
          </button>       
      </div>
    </div>
  
 </> 
  )
}

export default ProductCard