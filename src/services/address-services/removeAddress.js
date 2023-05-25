import axios from "axios";

export const removeAddress = (address, token) =>{
    console.log(address._id , "removeAdress");
    
 return axios.delete(`/api/user/address/${address._id}`),
    {
        headers: {authorization: token}
    }
}