import React from 'react'

const ProductCard = ({_id,name,img,price,ratings}) => {
  return (
    <div className="product_card"
    key={_id}>
      <button className="wishlist-btn">  <i class=" fa fa-thin fa-heart"></i></button>
        <img src={img} alt="" />
      
        <div className="product_card--text">
        
        <h3 className="product-card--title">{name}</h3>
   
        <p>${price}.00</p>
        <p className="product-ratings">{ratings}
        <i class=" fa fa-thin fa-star"></i>
        </p>
       
        
        
        <button className="cart-btn">Add to cart</button>
        
        </div>
      

    
    </div>
  )
}

export default ProductCard