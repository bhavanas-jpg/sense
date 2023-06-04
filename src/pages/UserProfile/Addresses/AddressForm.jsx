import React, { useEffect, useState } from "react";
import { useAddress } from "../../../context/AddressContext";
import "./Address.css";

import { useNavigate } from "react-router-dom";

const AddressForm = () => {
  const {
    addressState: { addNewAddress },
    setAddressState,
    formValues,
    setFormValues,
    addressDispatch,
  } = useAddress();
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);

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
    setFormValues((prev) => ({ ...prev, [name]: value }))
    setDisable(false);
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
      addressDispatch({
        type: "ADD_ADDRESS",
        payload: formValues,
      });
      resetForm();
  };

  return (
    addNewAddress && (
      <div className=" address-form mb-1">
        <div>
          <form onSubmit={submitHandler} className="form-container">
            <input
              type="text"
              name="name"
              required
              placeholder="Enter name"
              value={formValues.name}
              onChange={changeHandler}
            />
            <input
              type="text"
              name="street"
              required
              placeholder="Enter House No. and Street address"
              value={formValues.street}
              onChange={changeHandler}
            />
            <div className="d-flex">
              <input
                className="flex-wd--50"
                type="text"
                name="city"
                required
                placeholder="Enter city"
                value={formValues?.city}
                onChange={changeHandler}
              />
              <input
                className="flex-wd--50 ml-1"
                type="text"
                name="state"
                required
                placeholder="Enter state"
                value={formValues?.state}
                onChange={changeHandler}
              />
            </div>
            <div className="d-flex ">
              <input
                className="flex-wd--50"
                type="text"
                name="pincode"
                required
                placeholder="Enter pincode"
                value={formValues?.pincode}
                onChange={changeHandler}
              />
              <input
                className="flex-wd--50 ml-1"
                type="text"
                name="country"
                required
                placeholder="Enter country"
                value={formValues?.country}
                onChange={changeHandler}
              />
            </div>
            <input
              type="text"
              name="phone"
              required
              placeholder="Enter phone number"
              value={formValues?.phone}
              onChange={changeHandler}
              pattern="[0-9]{10}"
            />

            <div>
              <button
                disabled={disable}
                className="save-btn address-form-btn"
                type="submit"   
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
                  setDisable(false);
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
