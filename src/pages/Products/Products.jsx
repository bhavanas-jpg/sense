import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "../Products/Products.css";
import Filters from "./ProductsFilters";
import { useFilterHook } from "../../Hooks/filterHook";
import ProductNotFound from "./ProductNotFound";

const Products = () => {
  const { filteredData } = useFilterHook();

  return (
    <>
      <main className="container products-section">
        <h2 className="mb-1">All Products</h2>
        <Filters />
        {filteredData.length === 0 ? (
          <ProductNotFound />
        ) : (
          <div className="product-card-container">
            {filteredData.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Products;
