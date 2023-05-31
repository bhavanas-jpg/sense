import React from "react";
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../../../reducer/actionTypes";
import "../UserProfile.css"

const Profile = () => {
  const { auth, setAuth } = useAuth();
  const { dispatch } = useData();
  const navigate = useNavigate();
  const { RESET } = actionTypes;



  const ProfileLogoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    setAuth({
      token: "",
      isAuth: false,
      firstName: "",
      lastname: "",
      userEmail: "",
    });
    dispatch({ type: RESET });
    navigate("/");
  };

  return (
    <div className="user-profile profile">
      <p className="mb-1">
        <b>Full Name:</b> {auth?.firstName} {auth?.lastName}
      </p>
      <p className="mb-1"> 
        <b>Email :</b>
       {auth?.userEmail}</p>
      <button 
      className="logout-btn"
      onClick={ProfileLogoutHandler}>Log Out</button>
      
      
    </div>
  );
};

export default Profile;
