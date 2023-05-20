import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useData } from '../../context/DataContext';
import "./ProductDetails.css"
import { actionTypes } from '../../reducer/actionTypes';
import { addToCartService } from '../../services/services';
import { useAuth } from '../../context/AuthContext';
import { addToWishlistService } from '../../services/wishlist-services';

const ProductDetails = () => {
 const {productId} = useParams();
 const {state , dispatch} = useData();
 const {cartProducts, wishlistProducts} = state;
 const {auth} = useAuth();
 //cart, wishList states
const [inCart, setInCart] = useState(false);
const [inWishlist, setInWishlist] = useState(false);
const [addingToCart, setAddingToCart] = useState(false);
const [addingToWishList, setAddingToWishlist] = useState(false);
const {SET_CART, SET_WISHLIST} = actionTypes;
const navigate = useNavigate();

 const product = state.productsData?.find((item)=> item._id === productId);

const addToCartServerCall = async() =>{
    setAddingToCart(true);
    try{
        const res = await addToCartService(product, auth.token );
        if(res.status === 200  || res.status === 201){
        //   toast.success("Added to Cart");
          setAddingToCart(false);
          dispatch({
            type: SET_CART,
            payload: {cart: res.data.cart}
          })
        }
    }catch(error){
        console.error(error);
        // toast.error("Couldn't add to cart, try again later!");
    }
}

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
  cartProducts.find((item) => item._id === product._id) && setInCart(true);
  wishlistProducts.find((item) => item._id === product._id) &&
    setInWishlist(true);
}, [cartProducts, wishlistProducts]);


  return (
    <div className="container product-details">
        <h1>ProductDetails</h1>
        <p>{product?.name}</p>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
        <p>{product?.ratings}</p>
        
        <div>
            <button onClick={
              auth.isAuth ? inCart ?
                            ()=> navigate("/cart") : ()=>addToCartServerCall()
                          : ()=> navigate("/login")
            }>
              <span>{inCart ? "Go to Cart" : "Add to Cart"}</span>  
            </button>
            <button 
             onClick={
              auth.isAuth ?  inWishlist ?
                            () => navigate("/wishlist") : ()=>addToWishlistServerCall()
                            :()=>navigate("/login")

             }
            >
            <span>{inWishlist ? "Go to Wishlist" : "Add to WishList"}</span>  
                
            </button>
        </div>
        
        
        </div>

  )
}

export default ProductDetails