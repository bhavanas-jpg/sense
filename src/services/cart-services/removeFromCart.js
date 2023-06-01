import axios from "axios";

export const removeFromCart = (productId, token) =>{
    console.log("from cart");
return axios.delete(`/api/user/cart/${productId}`,
{
    headers: { authorization : token}
})
}