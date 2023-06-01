import React from "react";

import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/home_page_images/logo.png";
import "../Navbar/Navbar.css"
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import { actionTypes, filters } from "../../reducer/actionTypes";

const Navbar = () => {
  const {auth} = useAuth();
  const {state, dispatch} = useData();
  const {cartProducts, wishlistProducts} = state;
  const navigate = useNavigate()
  // console.log(state.filters);

  
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
            <input type="text" 
            placeholder="search here" 
            onChange ={(e)=> {
              dispatch({
                type: actionTypes.CHANGE_FILTER,
                payload: {
                  filterType: filters.SEARCH,
                  filterValue : e.target.value
                }
              }) 
              navigate("/products") 
            }
                              
            }
            />
          </div>
          <div >
            <ul className="list">
            <li className="list-items">
              <NavLink  className="shop-link" to="/products">Shop</NavLink>
              </li>
              <li className="list-items">
                <NavLink to="/wishlist">
                  <i class=" nav-icon fa fa-thin fa-heart"></i>
                  <span
                  style={{display: wishlistProducts.length !==0 ? "flex" : "none"}}
                  > {wishlistProducts.length !==0 && wishlistProducts.length }</span>
                 
                </NavLink>{" "}
              </li>
              <li className="list-items">
                <NavLink to="/cart">
                  <i class=" nav-icon fa fa-shopping-cart" aria-hidden="true"></i>
                  <span
                  style={{display: cartProducts.length!==0 ? "flex" : "none"}}
                  > {cartProducts.length !==0 && cartProducts.length}</span>   
                </NavLink>
              </li>
              <li className="list-items">
               
                {auth.isAuth ? (
                    <NavLink to="/profile">
                    <i class=" profile-icon fa fa-thin fa-user"></i>
                  </NavLink>
                ): (
                  <NavLink to="/login">
                  <i class=" fa fa-thin fa-user"></i>
                </NavLink>
                ) }
                
              </li>

              {/* <li>
                <NavLink to="/logout">Logout</NavLink>
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
