import axios from "axios";

export const removeAddress = (address, token) =>{
    return axios.delete(`/api/user/address/${address._id}`),
    {
        headers: {authorization: token}
    }
}