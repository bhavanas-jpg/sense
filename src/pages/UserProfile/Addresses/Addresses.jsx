import React from "react";
import { useAddress } from "../../../context/AddressContext";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import "./Address.css";

const Addresses = () => {
  const {
    setAddressState,
    addressState,
    addressListState,
    addressState: { currAddress },
    setFormValues,
  } = useAddress();
  const { addressList } = addressListState;
  const { addNewAddress } = addressState;

  const addressForm = () => {
    setAddressState((prev) => ({ ...prev, addNewAddress: true }));
    setFormValues(currAddress);
  };

  return (
    <div className="user-profile addresses ">
      <h3 className="mb-1">My Addresses</h3>
      <button className=" add-address--btn" onClick={addressForm}>
        Add New Address <span>+</span>
      </button>
      <ul>
        {addressList.map((address) => (
          <AddressCard key={address.id} address={address} />
        ))}
      </ul>
      <div>{addNewAddress && <AddressForm />}</div>
    </div>
  );
};

export default Addresses;
