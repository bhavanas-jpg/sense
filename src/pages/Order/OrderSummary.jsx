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
    dispatch,
  } = useData();
  const {  auth } = useAuth();
  const navigate = useNavigate();
  const totalPrice = cartProducts.reduce(
    (acc, curr) => (acc += Number(curr.price) * curr.qty),
    0
  );
  const discount = Math.floor((totalPrice * 20) / 100, 2);
  const subTotal = totalPrice - discount;

  const cartReset = () => {
    cartProducts.map(({ _id }) =>
      (async () => {
        try {
       const   res = await removeFromCart(_id, auth.token);
          if (res.status === 200) {
            dispatch({
              type: "CART_RESET",
              payload: res.data.cart,
            });
          }
        } catch (error) {
          console.error(error);
        }
      })()
    );
  };

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      console.log("Razorpay SDK failed to load, check you connection", "error");
      return;
    }

    const options = {
      key: "rzp_test_6Tdsj7tud9D3Y8",
      amount: subTotal *100*83,
      currency: "INR",
      name: "Sense",
      handler: function () {
        navigate("/orderPlaced");
       cartReset();
      },
      prefill: {
        name: auth ? `${auth.firstName} ${auth.lastName}` : "Test",
        email: auth ? auth.email : "abc@gmail.com",
        contact: "9833445762",
      },
      theme: {
        color: "#f9ca24",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };


  const clickHandler =()=>{
    displayRazorpay();
    setTimeout(() => {
      navigate("/");
      setShowModal(false);
    }, 1500);
  }


 console.log(selectedAddress.length);

  return (
    <>
      {showModal && (
        <div className="order-summary overlay">
          <div className="modal">
            <button
              className="modal-close"
              style={{ float: "right" }}
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <div className="modal-body">
              <h3 className="mb-1 txt-algn--center">Order Summary</h3>
              <div>
                <h4 className="mb-1">Address</h4>
                {
                    selectedAddress  === {} ? <p>No Address Selected</p> : 
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
                }
               
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
                <button
                  onClick={clickHandler}
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderSummary;
