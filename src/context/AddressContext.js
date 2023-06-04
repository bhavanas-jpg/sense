import { createContext, useContext, useReducer, useState } from "react";
import {
  addressListReducer,
  initialAddressState,
} from "../reducer/AddressReducer";

export const AddressContext = createContext(null);

export const AddressProvider = ({ children }) => {
  const [addressState, setAddressState] = useState({
    addNewAddress: false,
    currAddress: {
      name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      phone: "",
    },
  });
  const [formValues, setFormValues] = useState({});
  const [checkoutAddress, setCheckoutAddress] = useState();

  const [addressListState, addressDispatch] = useReducer(
    addressListReducer,
    initialAddressState
  );

  return (
    <AddressContext.Provider
      value={{
        addressState,
        setAddressState,
        addressListState,
        addressDispatch,
        formValues,
        setFormValues,
        checkoutAddress,
        setCheckoutAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
