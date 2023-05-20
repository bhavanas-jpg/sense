import axios from "axios";

export const removeFromWishlistService = async(productId, token)=>{
    return await axios.delete(`/api/user/wishlist/${productId}`,{
        headers: {authorization: token}
    })
}