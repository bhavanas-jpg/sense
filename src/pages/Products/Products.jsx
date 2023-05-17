import React from 'react'
import { useData } from '../../context/DataContext';
import ProductCard from './ProductCard';
import '../Products/Products.css'
import Filters from './ProductsFilters';
import { useFilterHook } from '../../Hooks/filterHook';


const Products = () => {
    const {state, dispatch} = useData();
    const  {filteredData } = useFilterHook();
  return (
    <main className="container">
        <h3>All Products</h3>
        
        <Filters />

        <div className='product-card-container'>
        <ProductCard products={filteredData} />
        </div>
    </main>
  )
}

export default Products