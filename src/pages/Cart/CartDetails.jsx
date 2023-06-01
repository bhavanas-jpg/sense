import React from "react";
import { useNavigate } from "react-router-dom";

const CartDetails = ({ products }) => {
  const navigate = useNavigate();

  const productPrice = (price, qty) => Number(price) * qty;
  const totalPrice = products.reduce(
    (acc, curr) => (acc += Number(curr.price) * curr.qty),
    0
  );

  return (
    <div className="total-price-container">
      <h3 className="mb-1 txt-algn--center">Cart Price Details</h3>
      {products.map((product) => (
        <div key={product._id}>
          <div className="dis-flex">
            <p>
              {product.name}( {product.qty})
            </p>
            <p>{productPrice(product.price, product.qty)}</p>
          </div>
        </div>
      ))}
      <div className="dis-flex cart-price-total">
        <p>SubTotal</p>
        <p>${totalPrice}</p>
      </div>

      <div className="mb-1 txt-algn--center">
        <button className="checkout-btn" onClick={() => navigate("/checkout")}>
          checkout
        </button>
      </div>
    </div>
  );
};

export default CartDetails;
