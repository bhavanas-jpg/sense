import axios from "axios";

export const removeFromWishlistService = (productId, token)=>{
    return  axios.delete(`/api/user/wishlist/${productId}`,{
        headers: {authorization: token}
    })
}