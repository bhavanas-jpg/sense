import React from 'react'
import { useAddress } from '../../context/AddressContext';
import { useData } from '../../context/DataContext';

const OrderSummary = () => {
    const {
        addressListState: { selectedAddress },
      } = useAddress();
      const {state :{cartProducts}} = useData();
      const totalPrice = cartProducts.reduce(
        (acc, curr) => (acc += Number(curr.price) * curr.qty),
        0
      );
      const discount = Math.floor(totalPrice * 20 /100 , 2);
      const subTotal = totalPrice - discount;

  return (
    <div className="container hg-100">
       <h3>OrderSummary</h3> 
       <div>
        <h4>Address</h4>
        <div   className="selected-address">
              <p>
                <b>{selectedAddress.name}</b>
              </p>
              <p>{selectedAddress.street}</p>
              <p>
                {selectedAddress.city}, {selectedAddress.state}
              </p>
              <p>
                {selectedAddress.country} -{selectedAddress.pincode}
              </p>
              <p>Phone Number: {selectedAddress.phone}</p>
            </div>
       </div>
       <div>
       <p>Sub Total <span>${totalPrice}</span>  </p>
            <p> Discount  <span> - ${discount}</span> </p>
            <p>Delivery Charges: <span>Free</span> </p>
            <p className="subTotal-price"> Total <span>${subTotal}</span>  </p>
       </div>
       <button>Confirm Order</button>
        
    </div>
  )
}

export default OrderSummary