import React from 'react'
import { useAddress } from '../../../context/AddressContext'
import {useData} from '../../../context/DataContext'
import AddressCard from './AddressCard';
import { useNavigate } from 'react-router-dom';

const Addresses = () => {
  const {setAddressState, addressListState, addressState :{currAddress},  setFormValues} = useAddress();
  const {addressList} = addressListState;
  const {state} = useData();
  const navigate = useNavigate();

  const addressForm = () =>{
    setAddressState((prev) => ({...prev, addNewAddress : true}));
    setFormValues(currAddress);
    navigate ("/profile/addresses/addressForm")
  }

  console.log(addressList, "on save");

  return (
    <div>
      <h3>My Addresses</h3>
      <button
      onClick={addressForm  }
      >Add new address +</button>

      <ul>
        {addressList.map((address)=>(       
          <AddressCard key={address.id} address={address}/>
        ))}
      </ul>
    
      
      </div>
  )
}

export default Addresses