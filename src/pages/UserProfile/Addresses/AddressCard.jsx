import React from 'react'
import { useAddress } from '../../../context/AddressContext'

import { useNavigate } from 'react-router-dom'

const AddressCard = ({address}) => {
    
    const {setAddressState, addressState, formValues, setFormValues,
      addressDispatch
    
    } = useAddress();
  
  const navigate = useNavigate();
  console.log(address  ,"address card");
  console.log(formValues ,"address card");
  console.log(address.id);
    
  return (
    <div>
     <p><b>{address.name}</b></p>
     <p>{address.street}</p>
     <p>{address.city}, {address.state}</p>
     <p>{address.country} -{address.pincode}</p>
     <p>Phone Number: {address.phone}</p>

     <button 
     onClick={(e)=>{
      e.preventDefault();
      setAddressState((prev) => ({...prev, addNewAddress : true}));
      navigate ("/profile/addresses/addressForm");
      setFormValues((prev)=>({...prev, ...address}))
      addressDispatch({
        type: "EDIT_ADDRESS",
        payload: address.id
      })
     }
     }
     >Edit</button>
     <button
    onClick={(e) =>{
      addressDispatch({
        type: "DELETE_ADDRESS",
        payload: address.id
      })
    }}
     >Delete</button>


    </div>
  )
}

export default AddressCard