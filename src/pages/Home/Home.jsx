import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/home_page_images/hero_image.jpg';
import vegan from '../../assets/home_page_images/vegan.png';
import natural from '../../assets/home_page_images/natural_sense.png'
import recycle from '../../assets/home_page_images/recycle_sense.png'
import compostable from '../../assets/home_page_images/compostable.png'

import "./Home.css"
import Feature from '../../components/Features/Feature';

const Home = () => {
  return (
   
    <main className='container'>
       <section className="hero-container" >
       <div className="hero-text">
              <h1>Glowing Skin, naturally</h1>
              <p>
                Indulge in plant-based skin care for naturally radiant results.
              </p>
              <Link className="shop-btn" to="/product">
                Shop Now
              </Link>
        </div>
        <div className="hero-image">
        <img  src={heroImage} alt="hero-image" />
        </div>
      </section>

     
      <section className="feature-sec">
      <Feature img={vegan} title="Vegan" description="Our entire collection is vegan and cruelty free."/>
      <Feature img={natural} title="Natural" description="We only use the finest
natural ingredients."/>
      <Feature img={recycle} title="Recycle" description="All packaging is recyclable and eco conscious."/>
      <Feature img={compostable} title="Compostable" description="Orders are shipped with biodegradable peanuts."/>
      </section>
     
    </main>
  )
}

export default Home