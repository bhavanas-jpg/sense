import axios from "axios";

export const removeFromCart = (productId, token) =>{
return axios.delete(`/api/user/cart/${productId}`,
{
    headers: { authorization : token}
})
}