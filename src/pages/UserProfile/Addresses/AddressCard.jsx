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
    <div className="address-card mb-1">
      <div>
      <p className="address-name"><b>{address.name}</b></p>
     <p>{address.street}</p>
     <p>{address.city}, {address.state}</p>
     <p>{address.country} -{address.pincode}</p>
     <p>Phone Number: {address.phone}</p>
      </div>
      <div>
      <button
      className="edit-btn" 
     onClick={(e)=>{
      e.preventDefault();
      setAddressState((prev) => ({...prev, addNewAddress : true}));
      setFormValues((prev)=>({...prev, ...address}))
      addressDispatch({
        type: "EDIT_ADDRESS",
        payload: address.id
      })
     }
     }
     ><i class=" fa fa-solid fa-pencil"></i></button>
     <button
     className="delete-btn"
    onClick={(e) =>{
      addressDispatch({
        type: "DELETE_ADDRESS",
        payload: address.id
      })
    }}
     ><i class=" fa fa-solid fa-trash"></i></button>
      </div>
   
     


    </div>
  )
}

export default AddressCard