import React from "react";
import CheckoutAddress from "./CheckoutAddress";
import { useAddress } from "../../context/AddressContext";
import "./Checkout.css"
import { useData } from "../../context/DataContext";
import OrderSummary from "../Order/OrderSummary";

const Checkout = () => {
  const {
    addressListState: { selectedAddress },
  } = useAddress();
  const {state :{cartProducts}, showModal, setShowModal} = useData();


  console.log(selectedAddress , "from place order");
  console.log( selectedAddress.length );


  const productPrice=(price, qty) => Number(price) * qty;
  const totalPrice = cartProducts.reduce(
    (acc, curr) => (acc += Number(curr.price) * curr.qty),
    0
  );
  const discount = Math.floor(totalPrice * 20 /100 , 2);
  const subTotal = totalPrice - discount;

  return (
    <div className="container hg-100">
      <div className="checkout ">
        <div className="checkout-address-card">
          <CheckoutAddress />
        </div>
        <div className="checkout-card">
          <h3 className="txt-algn--center mb-1">Order Details  </h3>
          <div style={{ borderBottom: "1px solid #000" }}>
            <h4>Purchased Items</h4>
            {
              cartProducts.map((product)=>(
            <div 
            className="purchased-items"
            key={product._id}>
            <p style={{display:"flex", justifyContent:"space-between"}}>
              <span className="purchased-product"> {product.name}</span>
           * 
           <span> {product.qty}</span>
           =
           <span>{productPrice(product.price,product.qty)}</span>
        
          </p>
          </div>
        ))
      } 
          </div>
          <h4>Billing</h4>
          <div 
          className="order-billing"
          style={{ borderBottom: "1px solid #000" }}>
            
            <p>Sub Total <span>${totalPrice}</span>  </p>
            <p> Discount  <span> - ${discount}</span> </p>
            <p>Delivery Charges: <span>Free</span> </p>
            <p className="subTotal-price"> Total <span>${subTotal}</span>  </p>
          </div>
          <div >
            <h4>Delivering To:</h4>
            {
              Object.keys(selectedAddress).length === 0
            ? <p>No Address Selected</p> : 
            <div   className="selected-address">
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
             }
            <div
             style={{display: "flex",
    justifyContent: "center",
    alignItems: "center"}}>
 <button
 disabled={!Object.keys(selectedAddress).length }
 onClick={()=>setShowModal(true)}
 className="order-btn">Place Order</button>
{showModal && <OrderSummary />}

            </div>
           
          </div>
        </div>
      </div>
    </div>



  );
};

export default Checkout;
