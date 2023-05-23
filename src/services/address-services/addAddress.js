import axios from "axios";

export const addAddressService = (address, token) =>{
    return axios.post("/api/user/address",
    { address },
    { headers: { authorization: token}}
    )
}