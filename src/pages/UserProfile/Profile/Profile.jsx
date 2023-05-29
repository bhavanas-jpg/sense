import React from "react";
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../../../reducer/actionTypes";

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
    <div className="user-profile">
      <p>
        Full Name: {auth?.firstName} {auth?.lastName}
      </p>
      <p> Email : {auth?.userEmail}</p>
      <button onClick={ProfileLogoutHandler}>Log out</button>
      
      
    </div>
  );
};

export default Profile;
