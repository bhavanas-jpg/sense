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
     localStorage.setItem("firstName", res.data.createdUser
.firstName);
     localStorage.setItem("lastName", res.data.createdUser
.lastName)
     localStorage.setItem("email",res.data.createdUser
.email )
    

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
    <div className="container hg-100">
    <div className='signup-container'> 
      <form 
      className='signup-form'
      onSubmit={(e) =>
      signUpHandler(
        e,
        formVal.firstName,
        formVal.lastName,
        formVal.email,
        formVal.password
      )
      } >
        <h2>SIGN UP</h2>
      <div>
        <input 
        type="text"
        id="first-name"
        placeholder=' First Name'
        value={formVal.firstName}
        required
        onChange={(e)=>
        setFormVal((prev)=>({...prev, firstName: e.target.value}))
        }     
        />
      </div>
      <div>
       
        <input 
        type="text"
        id="last-name"
        placeholder=' Last Name'
        value={formVal.lastName}
        required
        onChange={(e)=>
        setFormVal((prev)=>({...prev, lastName: e.target.value}))
        }     
        />
      </div>
      <div>
        <input 
        type="email"
        id="email-address"
        placeholder='Email  Address'
        value={formVal.email}
        required
        onChange={(e)=>
        setFormVal((prev)=> ({...prev, email: e.target.value}))}
        />
      </div>
      <div>
        <input 
        type="password"
        id="pwd"
        placeholder="Password"
        required
        onChange={(e)=>
        setFormVal((prev)=>({...prev, password: e.target.value}))}
        />
      </div>
      <div>
        <button 
        className="signup-btn"
      type="submit">
        SIGN UP
        </button>
      </div>
      <div>
        <Link to="/login"
        className="login-link"
        >
          Back to login</Link></div>
   
     
      </form>
      </div>
    </div>
  
  )
}

export default Signup