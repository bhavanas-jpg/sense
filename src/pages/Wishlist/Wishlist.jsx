import React from 'react'
import { useData } from '../../context/DataContext';
import ProductCard from '../Products/ProductCard';
import "./Wishlist.css"

const Wishlist = () => {
  const {state} = useData();
  const {wishlistProducts} = state;
  return (
    <>   
    {wishlistProducts?.length === 0 ?
    <div className="container hg-100">
      <h1>No Items in wishlist </h1>
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