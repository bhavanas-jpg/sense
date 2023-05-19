import React from "react";

import { NavLink } from "react-router-dom";
import logo from "../../assets/home_page_images/logo.png";
import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <>
      <header className="container">
        <nav className="navbar">
          <div>
            <NavLink to="/">
              <img src={logo} alt="sense-logo" />
            </NavLink>
          </div>
          <div className="search-input">
            <input type="text" placeholder="search here" />
          </div>
          <div >
            <ul className="list">
              <li className="list-items">
                <NavLink to="/wishlist">
                  <i class=" fa fa-thin fa-heart"></i>
                </NavLink>{" "}
              </li>
              <li className="list-items">
                <NavLink to="/cart">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </NavLink>
              </li>
              <li className="list-items">
                {" "}
                <NavLink to="/login">
                  <i class=" fa fa-thin fa-user"></i>
                </NavLink>
              </li>

              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
