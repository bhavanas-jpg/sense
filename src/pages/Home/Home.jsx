import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

import heroImage from "../../assets/home_page_images/hero_image.jpg";
import vegan from "../../assets/home_page_images/vegan.png";
import natural from "../../assets/home_page_images/natural_sense.png";
import recycle from "../../assets/home_page_images/recycle_sense.png";
import compostable from "../../assets/home_page_images/compostable.png";
import arrow from "../../assets/home_page_images/arrow-right.svg"

import "./Home.css";
import Feature from "../../components/Features/Feature";

const Home = () => {
const [categories, setCategories] = useState([]);


useEffect(()=>{
const getCategories =async()=>{
  try{
    const res = await axios.get("/api/categories");
    setCategories(res.data.categories)
  }catch(error){
    console.error(error);
  }
}
getCategories();
},[])


  return (
    <main className="container">
      <section className="hero-container">
        <div className="hero-text">
          <h1>Glowing Skin, naturally</h1>
          <p>Indulge in plant-based skin care for naturally radiant results.</p>
          <Link className="shop-btn" to="/product">
            Shop Now
          </Link>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="hero-image" />
        </div>
      </section>
       <section className="feature-sec">
        <Feature
          img={vegan}
          title="Vegan"
          description="Our entire collection is vegan and cruelty free."
        />
        <Feature
          img={natural}
          title="Natural"
          description="We only use the finest
        natural ingredients."
        />
        <Feature
          img={recycle}
          title="Recycle"
          description="All packaging is recyclable and eco conscious."
        />
        <Feature
          img={compostable}
          title="Compostable"
          description="Orders are shipped with biodegradable peanuts."
        />
      </section>
      <section className="category-sec">
        {
          categories &&
          categories.slice(0,3).map(({_id,image,categoryName})=>(
            <div className="card-content"
            key={_id}>
              <img className="card-image" src={image} alt="" />
              <h3 className="card-heading">{categoryName}
              <img className="arrow-img" src={arrow} alt="" />
              </h3>
             
              </div>
            
          ))
        }
      </section>
    </main>
  );
};

export default Home;
