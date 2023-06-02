import React, { useEffect, useState } from "react";
import { useAddress } from "../../../context/AddressContext";
import "./Address.css";

import { useLocation, useNavigate } from "react-router-dom";

const AddressForm = () => {
  const {
    addressState: { addNewAddress },
    setAddressState,
    formValues, setFormValues, addressDispatch
  } = useAddress();
  const navigate = useNavigate();
  const[disable, setDisable] = useState(true);
  
  const dummyData = {
    name: "Pavan",
    street: "Plot 999",
    city: "bnglr",
    state: "Karnataka",
    country: "India",
    pincode: "500099",
    phone: "9090907889",
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setDisable(false)
  };

  const resetForm = () => {
    setAddressState((prev) => ({
      ...prev,
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
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    resetForm();
    navigate("/profile/addresses");
  };

  return (
    addNewAddress && (
      <div className=" address-form mb-1">
        <div>
          <form
            onSubmit={submitHandler}
            className="form-container"
            
          >
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              value={formValues?.name}
              onChange={changeHandler}
              required
            />
            <input
              type="text"
              placeholder="Enter House No. and Street address"
              name="street"
              value={formValues?.street}
              onChange={changeHandler}
              required
            />
            <div className="d-flex">
              <input
                className="flex-wd--50"
                type="text"
                placeholder="Enter city"
                name="city"
                value={formValues?.city}
                onChange={changeHandler}
                required
              />
              <input
                className="flex-wd--50 ml-1"
                type="text"
                placeholder="Enter state"
                name="state"
                value={formValues?.state}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="d-flex ">
              <input
                className="flex-wd--50"
                type="text"
                placeholder="Enter pincode"
                name="pincode"
                value={formValues?.pincode}
                onChange={changeHandler}
                required
              />
              <input
                className="flex-wd--50 ml-1"
                type="text"
                placeholder="Enter country"
                name="country"
                value={formValues?.country}
                onChange={changeHandler}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Enter phone number"
              name="phone"
              value={formValues?.phone}
              onChange={changeHandler}
              pattern="[0-9]{10}"
              required
            />
            <div>
              <button
              disabled={disable}
                className="save-btn address-form-btn"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  addressDispatch({
                    type: "ADD_ADDRESS",
                    payload: formValues,
                  });
                  resetForm();
                }}
              >
                Save
              </button>

              <button
                className="cancel-btn address-form-btn ml-1"
                onClick={(e) => {
                  e.preventDefault();
                  resetForm();
                }}
              >
                Cancel
              </button>
              <button
                className="address-form-btn dummy-btn ml-1"
                onClick={(e) => {
                  e.preventDefault();
                  setFormValues((prev) => ({ ...prev, ...dummyData }));
                  setDisable(false)
                }}
              >
                Enter dummy values
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddressForm;
