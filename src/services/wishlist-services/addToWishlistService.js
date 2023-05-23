import axios from "axios";

export const addToWishlistService = (product,token)=>{
    return  axios.post("/api/user/wishlist",
    {product},
    {headers: {authorization: token}}
    )
  }