import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginService } from '../../../services/services';
import "../Auth.css"
import { toast } from 'react-toastify';


const Login = () => {
const[formVal, setFormVal]=useState({email:"", password:""});
const {setAuth, auth} = useAuth();
const navigate = useNavigate();
const location = useLocation();
const from =  ( location?.state?.from?.pathname) || "/";

console.log(auth);

const loginHandler= async(e, email, password)=>{
  setFormVal({email, password});
  e.preventDefault();
  try{
    const res = await loginService(email, password);
    console.log(res.data , "login response");
    if(res.status === 200){
     toast.success("Login Successfully")
      localStorage.setItem("token", res.data.encodedToken);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("firstName", res.data.foundUser.firstName);
      localStorage.setItem("lastName", res.data.foundUser.lastName)
      localStorage.setItem("email",res.data.foundUser.email )

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
    <div className="container hg-100 login">
      <div className='login-container'>    
    <form 
    className="login-form"
    onSubmit={(e) => loginHandler(e, formVal.email, formVal.password)}>
      <h2>Welcome</h2>
    <p>Great to have you back!</p>
     <div>
     <input 
    type="email"
    placeholder='Email Address'
    required
    value={formVal.email}
    onChange={(e)=> setFormVal(prev=>({...prev, email: e.target.value}) )}
    />
     </div>
     <div>     
    <input 
    placeholder='Password'
    type="password"
    required
    value={formVal.password}
    onChange={(e)=> setFormVal(prev=>({...prev, password: e.target.value}) )} 
    />
     </div>
     <div>
     <button 
     className="login-btn"
     type="submit">LOG IN</button>
     </div>
     <div>
     <button
     className="guest-login"
   type="submit"
   onClick={(e) =>
    loginHandler(e, "adarshbalika@gmail.com", "adarshbalika")}         
  >Login As  Guest</button>

     </div>
  <div>
    <p>Don't have an account ?
        <Link 
        className="signup-link"
        to="/signup"> Sign Up</Link>
    </p>
  </div>
    </form>
      </div>   
    </div>
   
  )
}

export default Login