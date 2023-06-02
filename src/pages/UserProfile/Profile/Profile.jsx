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
  const firstName =   localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName")
 const email =  localStorage.getItem("email" )



  const ProfileLogoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    localStorage.removeItem("email" );
    localStorage.removeItem("lastName");
    localStorage.removeItem("firstName");
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
    <div className="user-profile profile ">
      <p className="mb-1">
        <b>Full Name:</b> {firstName} {lastName}
      </p>
      <p className="mb-1"> 
        <b>Email :</b>
       {email}</p>
      <button 
      className="logout-btn"
      onClick={ProfileLogoutHandler}>Log Out</button>
      
      
    </div>
  );
};

export default Profile;
