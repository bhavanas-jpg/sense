import React from 'react';

const Feature =({img,title,description})=>{
    return(
        <>
        <div className="feature">
        <img src={img} alt="" />
        <h3 className="feature-title">{title}</h3>
        <p className="feature-descrp">{description}</p>
        </div>
        
        </>
    )
}
export default Feature;