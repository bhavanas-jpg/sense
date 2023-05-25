import axios from "axios";

export const addAddress = (address, token) =>{
    console.log(address);
    return axios.post("/api/user/address",
    { address },
    { headers: { authorization: token}}
    )
}