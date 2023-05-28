import React from 'react';
import {useState} from "react";
import {Link, Outlet} from "react-router-dom";

const UserProfile = () => {
  const [currPage, setCurrPage] = useState("Profile");



  return (
    <div className="container"
    style={{height:"100vh"}}
    >
      <h1>My Profile</h1>
      <div >
        <ul style={{display:"flex", justifyContent:"space-between"}}>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
         
          <li>
            <Link to="/profile/addresses">Addresses</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default UserProfile