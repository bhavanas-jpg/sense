import React from 'react'
import { useData } from '../../context/DataContext';
import ProductCard from '../Products/ProductCard';
import "./Wishlist.css"

const Wishlist = () => {
  const {state} = useData();
  const {wishlistProducts} = state;
  return (
    <div style={{height: "100vh"}} className='container wishlist'>
    <h1>WISHLIST</h1>
    <p>my wishlist has {wishlistProducts.length} items</p>
    <div className='product-card-container'>
          {
            wishlistProducts.map(product => (
              <ProductCard  key = {product._id} product={product} />
            ))
          }
       
        </div>
    </div>
  )
}

export default Wishlist