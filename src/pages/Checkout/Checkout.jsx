import React from 'react'

const Checkout = () => {
  return (
    <div className="container hg-100">     
        <h3>checkout</h3>
        <p>order details : </p>
        <div style={{borderBottom: "1px solid #000"}}> 
             <p>purchased items</p>
             <p>item 1: 1 X 100= 100</p>
             </div>
        <div style={{borderBottom: "1px solid #000"}}>
            <p>Billing</p>
            <p>Total MRP</p>
            <p>Total discount</p>
            <p>delivery fee: free</p>
            </div>
        <div style={{borderBottom: "1px solid #000"}}>
            <p>delivering to:</p>
            <p>selected address come here</p>
            </div>
      

        
    </div>
  )
}

export default Checkout