import axios from "axios";

export const cartCounterService = (productId, token, type) =>{
    return axios.post(`/api/user/cart/${productId}`,
    { action: { type } },
    {headers: {authorization : token}}
    )
}