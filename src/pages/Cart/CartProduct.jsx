import React from "react";
import { useAuth } from "../../context/AuthContext";
import { actionTypes } from "../../reducer/actionTypes";
import { removeFromCart } from "../../services/cart-services/removeFromCart";
import { cartCounterService } from "../../services/cart-services/cartCounterService";
import { useData } from "../../context/DataContext";

const CartProduct = ({ product }) => {
  const { dispatch } = useData();
  const { auth } = useAuth();
  const { SET_CART, SET_WISHLIST } = actionTypes;

  const cartCounterServerCall = async (operation) => {
    let res = null;
    try {
      if (product.qty === 1 && operation === "decrement") {
        res = await removeFromCart(product._id, auth.token);
      } else if (operation === "remove") {
        res = await removeFromCart(product._id, auth.token);
      } else {
        res = await cartCounterService(product._id, auth.token, operation);
      }
      if (res.status === 200) {
        // toast.success("Successfully updated cart");
        dispatch({
          type: SET_CART,
          payload: { cart: res.data.cart },
        });
      }
    } catch (error) {
      // toast.error("Could not update cart, try again later");
    }
  };

  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price * product.qty}</p>
      <button onClick={() => cartCounterServerCall("increment")}>+</button>
      <span>{product.qty}</span>
      <button onClick={() => cartCounterServerCall("decrement")}>-</button>
      <button onClick={() => cartCounterServerCall("remove")}>remove</button>
      <button>Add to wishlist</button>
    </div>
  );
};

export default CartProduct;
