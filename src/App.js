import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MockAPI from "./components/Mockman/Mockman";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Wishlist from "../src/pages/Wishlist/Wishlist";
import Cart from "../src/pages/Cart/Cart";
import Products from "./pages/Products/Products";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/SignUp/Signup";
import Logout from "./pages/Auth/Logout/Logout";
import ProductDetails from "./pages/Products/ProductDetails";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/:productId" element={<ProductDetails />}/>
        <Route path="/mockman" element={<MockAPI />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
