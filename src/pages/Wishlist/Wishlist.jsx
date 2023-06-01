import React from 'react'
import { useData } from '../../context/DataContext';
import ProductCard from '../Products/ProductCard';
import "./Wishlist.css"
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const {state} = useData();
  const {wishlistProducts} = state;
  const navigate = useNavigate();
  return (
    <>   
    {wishlistProducts?.length === 0 ?
    <div className="container hg-100 txt-algn--center">
      <h1 className="mb-1 mt-1">No Items in wishlist </h1>
      <button 
      className="secondary--btn"
      onClick={()=>navigate("/products")}>Shop Now</button>
      </div>
     : 
    <div  className='container hg-100 wishlist'>
    <h1> YOUR WISHLIST</h1>
    <div className='product-card-container'>
          {
            wishlistProducts.map(product => (
              <ProductCard  key = {product._id} product={product} />
            ))
          }
       
        </div>
        </div>
    }
   
    </>
    
  )
}

export default Wishlist