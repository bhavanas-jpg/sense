import { createContext, useContext, useState } from "react";

export const AddressContext = createContext(null);

export const AddressProvider = ({children}) =>{
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

return(
<AddressContext.Provider value={{addressState, setAddressState}}>
    {children}
    </AddressContext.Provider>
)    
}

export const useAddress =()=> useContext(AddressContext);