import React from 'react'
import { useAddress } from '../../../context/AddressContext'
import {useData} from '../../../context/DataContext'
import AddressCard from './AddressCard';

const Addresses = () => {
  const {setAddressState} = useAddress();
  const {state} = useData();
  const { addressList} = state;

console.log(addressList)
  return (
    <div>
      <h3>My Addresses</h3>
      <button
      onClick={()=>
        setAddressState((prev) => ({...prev, addNewAddress : true}))
      }
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