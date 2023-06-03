import React from 'react';
import "./PageNotFound.css"
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
 const navigate = useNavigate();

  return (
    <div className="container error-page hg-100">
       <img 
       className="error-image"
       src="https://img.freepik.com/premium-photo/flat-concept-404-error-page-file-found-web-page-banner-presentation-social-media-documents-website-maintenance-error-webpage-construction-vector-ultraviolet-illustration_317038-260.jpg" alt="" /> 
      <div className="txt-algn--center home-btn">
      <button
      onClick={()=>navigate("/")}
      >Back to Home</button>
      </div>
       

        
    </div>
  )
}

export default PageNotFound