import React from 'react'
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const {
      auth: {firstName, lastName, userEmail},
      setAuth
    } = useAuth();
  const navigate = useNavigate();
  
  const ProfileLogoutHandler = () => {
   localStorage.removeItem("token");
   localStorage.removeItem("isAuth");
   setAuth({
    token:"",
    isAuth: false,
    firstName:"",
    lastname: "",
    userEmail: ""
   })
    navigate('/');
  };
  return (
    <div>
      <h1>you are logged out</h1>
       <button onClick={ProfileLogoutHandler}>Logout</button> 
    </div>
  )
}

export default Logout