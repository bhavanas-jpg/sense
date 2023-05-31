import axios from "axios";

export const getWishlistService = (token)=>{
    return  axios.get("/api/user/wishlist",{
        headers: {authorization: token},
    })

}