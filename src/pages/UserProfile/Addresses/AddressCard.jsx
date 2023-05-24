import React from 'react'
import { useAddress } from '../../../context/AddressContext'
import {useAddressUpdater} from '../../../Hooks/useAddressUpdater'
import {removeAddress} from '../../../services/address-services/removeAddress'

const AddressCard = ({address}) => {
    console.log(address)
    const {setAddressState} = useAddress();
    const [removeAddressServerCall] = useAddressUpdater(
        removeAddress,
        address,
        "Address has been deleted"
    )
  return (
    <div>
     <p><b>{address.name}</b></p>
     <p>{address.street}</p>
     <p>{address.city}, {address.state}</p>
     <p>{address.country} -{address.pincode}</p>
     <p>Phone Number: {address.phone}</p>

     <button 
     onClick={()=> setAddressState(
      {
        addNewAddress : true,
        currAddress : { ...address}
      }
     )}
     >Edit</button>
     <button
     onClick = {()=> removeAddressServerCall()}
     >Delete</button>


    </div>
  )
}

export default AddressCard