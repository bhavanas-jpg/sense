import React from "react";
import { useNavigate } from "react-router-dom";

const CartDetails = ({ products }) => {
  const navigate = useNavigate();

  const productPrice=(price, qty) => Number(price) * qty;
  const totalPrice = products.reduce(
    (acc, curr) => (acc += Number(curr.price) * curr.qty),
    0
  );
  
  return (
    <div className="container cart-detail">
      <div className="empty-div"></div>
      <div className="total-price-container">
      <p>SubTotal  :
         ${totalPrice}</p>
      <button 
      className="checkout-btn"
      onClick={()=> navigate("/checkout")}
      >checkout</button>
      </div>
      {/* <h3>cart price details:</h3>
      {
        products.map((product)=>(
            <div key={product._id}>
            <p>
            {product.name} * {product.qty} = {productPrice(product.price,product.qty)}
          </p>
          </div>
        ))
      }      */}
      
    </div>
  );
};

export default CartDetails;
