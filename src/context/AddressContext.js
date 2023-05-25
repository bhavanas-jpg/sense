import { createContext, useContext, useState } from "react";
import { removeAddress } from "../services/address-services/removeAddress";
import { useAuth } from "./AuthContext";

export const AddressContext = createContext(null);

export const AddressProvider = ({children}) =>{
    const {
        auth: {token}
    } = useAuth();
 const [addressState, setAddressState] = useState({
    addNewAddress : false,
    currAddress :{
        name: "",
        street: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        phone: ""
    }
 })

 const removeAddressCard = async (address) =>{
    try{
        const res = await removeAddress(address, token);
        console.log(res)

    }catch(e){
        console.error(e)
    }
 }

return(
<AddressContext.Provider value={{addressState, setAddressState, removeAddressCard}}>
    {children}
    </AddressContext.Provider>
)    
}

export const useAddress =()=> useContext(AddressContext);