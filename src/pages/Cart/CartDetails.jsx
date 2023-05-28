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
    <div>
      <h3>cart price details:</h3>
      {
        products.map((product)=>(
            <div key={product._id}>
            <p>
            {product.name} * {product.qty} = {productPrice(product.price,product.qty)}
          </p>
          </div>
        ))
      }     
      <p>total price: {totalPrice}</p>
      <button 
      onClick={()=> navigate("/checkout")}
      >checkout</button>
    </div>
  );
};

export default CartDetails;
