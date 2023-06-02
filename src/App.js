import React from "react";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
import UserProfile from "./pages/UserProfile/UserProfile";
import Profile from "./pages/UserProfile/Profile/Profile";
import Addresses from "./pages/UserProfile/Addresses/Addresses";
import AddressForm from "./pages/UserProfile/Addresses/AddressForm";
import Checkout from "./pages/Checkout/Checkout";
import OrderSummary from "./pages/Order/OrderSummary";
import OrderSuccessful from "./pages/Order/OrderSuccessful";
import Loader from "./components/Loader";
import { useData } from "./context/DataContext";
import ProductNotFound from "./pages/Products/ProductNotFound";
import Footer from "./components/Footer/Footer";


function App() {
  const {loader} = useData();
  return (
    <div className="App">
    
      <ToastContainer
					// theme="colored"
					autoClose={1000}
					position="bottom-center"
				/>
       
      <Navbar />
      {
    loader &&
   <Loader/>
      }
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
       <Route path="/profile" element={<UserProfile />}>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/profile/addresses" element={<Addresses />}/>
        <Route path="/profile/addresses/addressForm" element={<AddressForm />}/>
       </Route>


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/:productId" element={<ProductDetails />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/orderSummary" element={<OrderSummary />}/>
        <Route path="/orderPlaced" element={<OrderSuccessful />}/>
        <Route path="/loading" element={<Loader />}/>
        <Route path="/noItems" element={<ProductNotFound/>}/>
        <Route path="/mockman" element={<MockAPI />} />      
      </Routes>

     <Footer />
    </div>
  );
}

export default App;
