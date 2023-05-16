import React from "react"
import { Route, Routes } from "react-router-dom";
import MockAPI from "./components/Mockman/Mockman";
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Wishlist from '../src/pages/Wishlist/Wishlist';
import Cart from '../src/pages/Cart/Cart';
import Profile from '../src/pages/Profile/Login'
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/wishlist" element={<Wishlist />}/>
     <Route path="/cart" element={<Cart />}/>
     <Route path="/login" element={<Profile />}/>
     <Route path="/products" element={<Products/>}/>
      <Route path="/mockman" element={<MockAPI />}/>
     </Routes>
    </div>
  );
}

export default App;
