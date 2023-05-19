
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {auth} = useAuth();
    

  return (
    auth.isAuth ? children : <Navigate to="/login"
    state={{from: location}} replace
    />
  )
}

export default PrivateRoute