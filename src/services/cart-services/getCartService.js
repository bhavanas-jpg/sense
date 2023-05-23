import axios from "axios";

export const getCartService = (token) =>{
    return  axios.get("/api/user/cart",{
        headers: {authorization: token}
    })
}