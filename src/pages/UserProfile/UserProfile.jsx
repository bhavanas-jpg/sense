import React from 'react';
import {useState} from "react";
import {Link, Outlet} from "react-router-dom";
import "./UserProfile.css"

const UserProfile = () => {
  const [currPage, setCurrPage] = useState("Profile");



  return (
    <div className="container hg-100" >    
      <div className='user-profile'>
        <ul className="user-profile--links">
          <li>
            <Link 
            className="user-profile--link"
            to="/profile">Profile</Link>
          </li>      
          <li>
            <Link 
            className="user-profile--link"
            to="/profile/addresses">Addresses</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default UserProfile