import React from "react"
import { Route, Routes } from "react-router-dom";
import MockAPI from "./components/Mockman/Mockman";
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Wishlist from '../src/pages/Wishlist';
import Cart from '../src/pages/Cart';
import Profile from '../src/pages/Profile'

function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/wishlist" element={<Wishlist />}/>
     <Route path="/cart" element={<Cart />}/>
     <Route path="/login" element={<Profile />}/>
      <Route path="/mockman" element={<MockAPI />}/>
     </Routes>


    </div>
  );
}

export default App;
