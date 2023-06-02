import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';
import flower_image from "../../assets/home_page_images/flower.png"

const Footer = () => {
  return (
    <footer className="bg-color">
    <div className="container footer">
     <div>
      <h2> Our Store</h2>
      <p> 3455 St Laurent Blvd</p>
      <p>Montreal, Quebec H2X 2T6</p>
      <p><b>Mon - Fri </b>9 a.m. - 7 p.m.</p>
      <p><b>Sat - Sun </b>10 a.m. - 6 p.m.</p>  
      </div>
     <div>
      <img src={flower_image} alt="flower-image"
      width="180" height="180" />
     </div>
     <div>
      <h2> Our Promise</h2>
      <p className="promise-text">To create high quality plant-based products
        that are safe for people and the planet.
      </p>
     
      </div>
     <div>
      <div className="social-media--links">
        <Link 
        className="link-item"
        target='_blank'
        to="https://github.com/bhavanas-jpg">
        <i class='bx bxl-github'></i>
        </Link>
        <Link 
         className="link-item"
           target='_blank'
        to="https://www.linkedin.com/in/bhavana-s-38513a168">
        <i class='bx bxl-linkedin'></i></Link>
        <Link 
         className="link-item"
           target='_blank'
        to="https://twitter.com/Bhavana814">
        <i class='bx bxl-twitter'></i></Link>
      </div>
     </div>
             
        </div>
        <p className="copyright-text"><span>©2023 | Oshna |🤍</span></p>
    </footer>
  )
}

export default Footer