import React from 'react'
import { useAddress } from '../../../context/AddressContext'
import {useData} from '../../../context/DataContext'
import AddressCard from './AddressCard';
import { useNavigate } from 'react-router-dom';

const Addresses = () => {
  const {setAddressState} = useAddress();
  const {state} = useData();
  const { addressList} = state;
  const navigate = useNavigate();

  const addressForm = () =>{
    setAddressState((prev) => ({...prev, addNewAddress : true}));
    navigate ("/profile/addresses/addressForm")
  }

 console.log(addressList , "other addresses")
  return (
    <div>
      <h3>My Addresses</h3>
      <button
      onClick={addressForm  }
      >Add new address +</button>

      <ul>
        {addressList.map((address)=>(
          <AddressCard key={address._id} address={address}/>
        ))}
      </ul>
    
      
      </div>
  )
}

export default Addresses