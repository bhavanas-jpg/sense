import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext';
import { signUpService } from '../../../services/services';

const Signup = () => {
const [formVal,setFormVal]=useState({
  firstName: "",
  lastName:"",
  email:"",
  password:""
});
const {setAuth} = useAuth();
const navigate = useNavigate();
const signUpHandler = async (e, firstName, lastName, email, password)=>{
 e.preventDefault();

 try{
  const res = await signUpService(firstName, lastName, email, password);
  if(res.status === 201){
    localStorage.setItem("token", res.data.encodedToken);
    localStorage.setItem("isAuth", true);

    setAuth({
      token: res.data.encodedToken,
      isAuth: true,
      firstName,
      lastName,
      userEmail: email
    });
    navigate("/")
  }

 }catch(error){
  console.error(error);
 }


} 









  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={(e) =>
      signUpHandler(
        e,
        formVal.firstName,
        formVal.lastName,
        formVal.email,
        formVal.password
      )
      } >

      <div>
        <label for="first-name">First Name</label>
        <input 
        type="text"
        id="first-name"
        placeholder='Enter First Name'
        value={formVal.firstName}
        required
        onChange={(e)=>
        setFormVal((prev)=>({...prev, firstName: e.target.value}))
        }     
        />
      </div>
      <div>
        <label for="last-name">Last Name</label>
        <input 
        type="text"
        id="last-name"
        placeholder='Enter Last Name'
        value={formVal.lastName}
        required
        onChange={(e)=>
        setFormVal((prev)=>({...prev, lastName: e.target.value}))
        }     
        />
      </div>
      <div>
        <label for="email-address">Email</label>
        <input 
        type="email"
        id="email-address"
        placeholder='Enter Email'
        value={formVal.email}
        required
        onChange={(e)=>
        setFormVal((prev)=> ({...prev, email: e.target.value}))}
        />
      </div>
      <div>
        <label for="pwd">Password</label>
        <input 
        type="password"
        id="pwd"
        placeholder="Enter Password"
        required
        onChange={(e)=>
        setFormVal((prev)=>({...prev, password: e.target.value}))}
        />
      </div>
     <button type="submit">Sign Up</button>
     <Link to="/login">
     Already have an account
     <i className=" fa fas fa-chevron-right"></i>
     </Link>
      </form>
    </>
  
  )
}

export default Signup