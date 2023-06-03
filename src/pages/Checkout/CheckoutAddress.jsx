import React, { useEffect } from "react";
import { useAddress } from "../../context/AddressContext";
import { useNavigate } from "react-router-dom";
import AddressForm from "../UserProfile/Addresses/AddressForm";

const CheckoutAddress = () => {
  const {
    addressListState,
    setAddressState,
    addressState: { currAddress, addNewAddress },
    setFormValues,
    checkoutAddress,
    setCheckoutAddress,
    addressDispatch,
    checkAddress,
  } = useAddress();
  const { addressList, selectedId, selectedAddress } = addressListState;
  const navigate = useNavigate();

  const addressForm = () => {
    setAddressState((prev) => ({ ...prev, addNewAddress: true }));
    setFormValues(currAddress);
    setCheckoutAddress(true);
  };

  console.log(selectedAddress.id);

  return (
    <div>
      <button className="add-address--btn" onClick={addressForm}>
        Add New Address +
      </button>
      <div>
        {addressList.map((address) => (
          <div key={address.id} className="d-flex checkout-addresses ">
            <div>
              {" "}
              <input
                type="radio"
                name="selected-address"
                checked={selectedAddress.id === address.id}
                onChange={() =>
                  addressDispatch({
                    type: "SELECTED_ADDRESS",
                    payload: address.id,
                  })
                }
              />
            </div>
            <div className="ml-1">
              <p>
                <b>{address.name}</b>
              </p>
              <p>{address.street}</p>
              <p>
                {address.city}, {address.state}
              </p>
              <p>
                {address.country} -{address.pincode}
              </p>
              <p>Ph No: {address.phone}</p>
            </div>
          </div>
        ))}
      </div>
      <div>{addNewAddress && <AddressForm />}</div>
    </div>
  );
};

export default CheckoutAddress;
