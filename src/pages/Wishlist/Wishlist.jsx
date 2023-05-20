import React from 'react'
import { useData } from '../../context/DataContext';

const Wishlist = () => {
  const {state} = useData();
  const {wishlistProducts} = state;
  return (
    <div style={{height: "100vh"}}>
    <h1>WISHLIST</h1>
    <p>my wishlist has {wishlistProducts.length} items</p>
    {
      wishlistProducts.map((item)=>(
        <>
        <p>{item.name}</p>
        <p>{item.price}</p>
        </>
        
      ))
    }
    </div>
  )
}

export default Wishlist