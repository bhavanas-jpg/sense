import React from 'react';
import {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import "./UserProfile.css"

const UserProfile = () => {
  const [currPage, setCurrPage] = useState("Profile");



  return (
    <div className="container hg-100" >    
      <div className='tab-header'>
        <ul className="user-profile--links">
          <li className={currPage === "Profile" ? "active-link": ""}>
            <Link 
            style={{color:currPage === "Profile" ? "#fff": "" }}
            className="user-profile--link "
            to="/profile"
            onClick={()=> setCurrPage("Profile")}
            >Profile</Link>
          </li>      
          <li className={currPage === "Addresses" ? "active-link": ""}>
            <Link 
            style={{color:currPage === "Addresses" ? "#fff": "" }}
            className="user-profile--link "
            to="/profile/addresses"
            onClick={()=> setCurrPage("Addresses")}
            >Addresses</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default UserProfile