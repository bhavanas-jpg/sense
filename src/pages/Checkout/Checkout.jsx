import React from "react";
import CheckoutAddress from "./CheckoutAddress";
import { useAddress } from "../../context/AddressContext";

const Checkout = () => {
  const {
    addressListState: { selectedAddress },
  } = useAddress();

  return (
    <div className="container hg-100">
      <div style={{ display: "flex", gap: "16rem" }}>
        <div>
          <CheckoutAddress />
        </div>
        <div>
          <p>order details : </p>
          <div style={{ borderBottom: "1px solid #000" }}>
            <p>purchased items</p>
            <p>item 1: 1 X 100= 100</p>
          </div>
          <div style={{ borderBottom: "1px solid #000" }}>
            <p>Billing</p>
            <p>Total MRP</p>
            <p>Total discount</p>
            <p>delivery fee: free</p>
          </div>
          <div style={{ borderBottom: "1px solid #000" }}>
            <p>delivering to:</p>
            <p>selected address come here</p>

            <div>
              <p>
                <b>{selectedAddress.name}</b>
              </p>
              <p>{selectedAddress.street}</p>
              <p>
                {selectedAddress.city}, {selectedAddress.state}
              </p>
              <p>
                {selectedAddress.country} -{selectedAddress.pincode}
              </p>
              <p>Phone Number: {selectedAddress.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
