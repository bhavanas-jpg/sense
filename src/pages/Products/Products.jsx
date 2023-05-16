import React from 'react'
import { useData } from '../../context/DataContext';
import ProductCard from './ProductCard';
import '../Products/Products.css'
import Filters from './Filters';



const Products = () => {
    const {state, dispatch} = useData();
  return (
    <section className="container">
        <h3>All Products</h3>
        <Filters />
        <div className='product-card-container'>
        {
            state.productsData.map(product =>(
                <ProductCard {...product}/>
                
            ))
        }
        </div>

    </section>
  )
}

export default Products