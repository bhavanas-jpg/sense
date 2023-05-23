import axios from "axios";

export const updateAddress = (address, token) =>{
    return axios.post(`/api/user/address/${address._id}`),
    {
        address,
    },
    {
        headers :{ authorization: token}
    }
}