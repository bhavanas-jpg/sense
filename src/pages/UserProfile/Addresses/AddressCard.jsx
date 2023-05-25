import React from 'react'
import { useAddress } from '../../../context/AddressContext'

import {removeAddress} from '../../../services/address-services/removeAddress'
import { useNavigate } from 'react-router-dom'

const AddressCard = ({address}) => {
    
    const {setAddressState, addressState, removeAddressCard} = useAddress();
    // const [removeAddressServerCall] = useAddressUpdater(
    //     removeAddress,
    //     address,
    //     "Address has been deleted"
    // );

    // console.log(removeAddressServerCall() , "addresscall");

  const navigate = useNavigate();
    
  return (
    <div>
     <p><b>{address.name}</b></p>
     <p>{address.street}</p>
     <p>{address.city}, {address.state}</p>
     <p>{address.country} -{address.pincode}</p>
     <p>Phone Number: {address.phone}</p>

     <button 
     onClick={()=>{
      setAddressState(
        {
          addNewAddress : true,
          currAddress : { ...address}
        })
      navigate ("/profile/addresses/addressForm")
     }
     }
     >Edit</button>
     <button
     onClick = {()=> removeAddressCard(address)}
     >Delete</button>


    </div>
  )
}

export default AddressCard