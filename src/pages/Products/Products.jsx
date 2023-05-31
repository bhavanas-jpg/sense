import React, { useState } from 'react'
import ProductCard from './ProductCard';
import '../Products/Products.css'
import Filters from './ProductsFilters';
import { useFilterHook } from '../../Hooks/filterHook';
import { useData } from '../../context/DataContext';


const Products = () => { 
    const  {filteredData } = useFilterHook();
    const {loader} = useData();
    
  return (
   <>
   {
    loader ?
    <img 
    style={{width: "100%", height: "500px", margin:"0 auto"}}
    src="https://i.pinimg.com/originals/1f/2d/f8/1f2df8fad7e9bfcb18d9d553f8fc259b.gif"/> :
    <main className="container ">
    <h3 className="mb-1">All Products</h3>   
    <Filters />
    <div className='product-card-container'>
      {
        filteredData.length === 0 ? <p>No Item found</p> : filteredData.map(product => (
          <ProductCard  key = {product._id} product={product} />
        ))
      }
   
    </div>
</main>
   }
   
   </>
  )
}

export default Products