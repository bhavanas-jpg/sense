import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginService } from '../../../services/services';


const Login = () => {
const[formVal, setFormVal]=useState({email:"", password:""});
const {setAuth} = useAuth();
const navigate = useNavigate();
const location = useLocation();
const from =  ( location?.state?.from?.pathname) || "/";



const loginHandler= async(e, email, password)=>{
  setFormVal({email, password});
  e.preventDefault();
  try{
    const res = await loginService(email, password);
    if(res.status === 200){
      localStorage.setItem("token", res.data.encodedToken);
      localStorage.setItem("isAuth", true);

    setAuth({
      token: res.data.encodedToken,
      isAuth: true,
      firstName: res.data.foundUser.firstName,
      lastName: res.data.foundUser.lastName,
      userEmail:res.data.foundUser.email
    });
 navigate(from, {replace: true})
    }

  }catch(error){
    console.error(error)
  }
}  


  return (
    <>
    <h5>Login </h5>
    <form onSubmit={(e) => loginHandler(e, formVal.email, formVal.password)}>
    <label>Email Address</label>
    <input 
    type="email"
    required
    value={formVal.email}
    onChange={(e)=> setFormVal(prev=>({...prev, email: e.target.value}) )}
    />

    <label>Password</label>
    <input 
    type="password"
    required
    value={formVal.password}
    onChange={(e)=> setFormVal(prev=>({...prev, password: e.target.value}) )} 
    />

  <button type="submit">Login</button>
  <button
   type="submit"
   onClick={(e) =>
    loginHandler(e, "adarshbalika@gmail.com", "adarshbalika")}         
  >Login As a Guest</button>

  <div>
    <p>Don't have an account?
        <Link to="/signup">Sign Up</Link>
    `</p>
  </div>
    </form>
    </>
   
  )
}

export default Login