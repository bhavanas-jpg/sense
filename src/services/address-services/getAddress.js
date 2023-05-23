import axios from "axios";

export const getAddress = token => {
    return axios.get("/api/user/address",
    {
        headers : {authorization: token}
    });
}
