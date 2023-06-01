import React from "react";
import { useAddress } from "../../context/AddressContext";
import { useData } from "../../context/DataContext";
import "./OrderSummary.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { removeFromCart } from "../../services/cart-services/removeFromCart";




const OrderSummary = () => {
  const {
    addressListState: { selectedAddress },
  } = useAddress();
  const {
    state: { cartProducts },
    showModal,
    setShowModal,
    dispatch
  } = useData();
  const {auth} = useAuth();

  const navigate = useNavigate();
  let res = null
  const cartReset =() =>{
 cartProducts.map(({_id})=>
   (async () => {
    try{
      res = await  removeFromCart(_id, auth.token)
      if(res.status === 200){
        dispatch({
          type: "CART_RESET",
          payload: res.data.cart
        })
      }
    }catch(error){
      console.error(error)
    }
  })()
       )

  }
  console.log(cartProducts);



  const totalPrice = cartProducts.reduce(
    (acc, curr) => (acc += Number(curr.price) * curr.qty),
    0
  );
  const discount = Math.floor((totalPrice * 20) / 100, 2);
  const subTotal = totalPrice - discount;

  return (
    // <section className="container hg-100">
    <>
{showModal &&
  <div className="order-summary overlay">
    <div className="modal">
    <button
    className="modal-close"
    style={{ float: "right" }}
    onClick={()=>setShowModal(false)}
    >X</button>
      <div className="modal-body">
      <h3 className="mb-1 txt-algn--center">Order Summary</h3>
      <div>
        <h4 className="mb-1">Address</h4>
        <div className="selected-address--order">
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
      <div className="ordered-products">
        <p>
          Total Products <span>{cartProducts.length}</span>{" "}
        </p>
        <p>
          Sub Total <span>${totalPrice}</span>{" "}
        </p>
        <p>
          {" "}
          Discount <span> - ${discount}</span>{" "}
        </p>
        <p>
          Delivery Charges: <span>Free</span>{" "}
        </p>
        <p className="subTotal-price">
          {" "}
          Total <span>${subTotal}</span>{" "}
        </p>
      </div>
      <div className="confirm-order">
        <button onClick={()=>{
setTimeout(
  ()=>{
   
navigate("/")
setShowModal(false) 
  }, 1500
)
navigate("/orderPlaced")
cartReset()
        }
          
         }>Confirm Order</button>
      </div>
      </div>
    </div>
     
      
    </div>
   }
    
    </>
    // </section>
  );
};

export default OrderSummary;
