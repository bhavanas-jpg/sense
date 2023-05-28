import React, { useState } from 'react'
import ProductCard from './ProductCard';
import '../Products/Products.css'
import Filters from './ProductsFilters';
import { useFilterHook } from '../../Hooks/filterHook';


const Products = () => { 
    const  {filteredData } = useFilterHook();
    
  return (
   <>
    <main className="container ">
        <h3>All Products</h3>   
        <Filters />
        <div className='product-card-container'>
          {
            filteredData.length === 0 ? <p>No Item found</p> : filteredData.map(product => (
              <ProductCard  key = {product._id} product={product} />
            ))
          }
       
        </div>
    </main>
   </>
  )
}

export default Products