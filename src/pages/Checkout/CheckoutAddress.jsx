import React from 'react'
import { useAddress } from '../../context/AddressContext'
import { useNavigate } from 'react-router-dom';

const CheckoutAddress = () => {
    const {addressListState,setAddressState,addressState :{currAddress},  
    setFormValues, checkoutAddress, setCheckoutAddress,addressDispatch} = useAddress();
    const {addressList} = addressListState;
    const navigate = useNavigate();
    

    const addressForm = () =>{
        setAddressState((prev) => ({...prev, addNewAddress : true}));
        setFormValues(currAddress);
        navigate ("/profile/addresses/addressForm");
        setCheckoutAddress(true)
      }

  return (
    <div>
      <h2>CheckoutAddress</h2>  
      <button
       onClick={addressForm  }
      >Add new address +</button>
      <div>
        {addressList.map((address)=>(
            <div>
            
                <p>
                <input
                 type="radio" 
                 name="selected-address"
                 checked="true"
                 onChange={()=> 
                    addressDispatch({
                        type: "SELECTED_ADDRESS",
                        payload: address.id
                    })
                 }
                 
                 /><b>{address.name}</b></p>
     <p>{address.street}</p>
     <p>{address.city}, {address.state}</p>
     <p>{address.country} -{address.pincode}</p>
     <p>Ph No: {address.phone}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default CheckoutAddress