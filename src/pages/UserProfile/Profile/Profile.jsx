import React from 'react'
import { useAuth } from '../../../context/AuthContext'
import { useData } from '../../../context/DataContext';
import { useNavigate } from 'react-router-dom';
import { actionTypes } from '../../../reducer/actionTypes';

const Profile = () => {
 const {
    auth,
    setAuth
 } = useAuth();
 const {dispatch} = useData();
 const navigate = useNavigate();
 const {RESET} = actionTypes;

//  console.log(firstName);
//  console.log(userEmail);
 console.log(auth);

  return (
    <div>
        <h4> Profile Details</h4>
        {/* <p>Full Name: {`${firstName} ${lastName}`}</p>*/}
        <p> Email : {auth?.userEmail}</p> 
        <button>Log out</button>
       
        
        </div>
  )
}

export default Profile