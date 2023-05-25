import React, { useEffect, useState } from 'react'
import { useAddress } from '../../../context/AddressContext'

import {addAddress} from "../../../services/address-services/addAddress"

import { useNavigate } from 'react-router-dom';

const AddressForm = () => {

    const {
        addressState :{addNewAddress, currAddress},
        setAddressState
    } = useAddress();
  const navigate = useNavigate();
    console.log(addNewAddress);

    const [formValues, setFormValues] = useState();

    useEffect(()=>{
        setFormValues(currAddress);
    }, [currAddress]);

  const changeHandler = (e) =>{
    const {name , value} = e.target;
    setFormValues((prev)=> ({...prev, [name]: value}))
  }

  const dummyData = {
    name : "Pavan",
    street: "Plot 999",
    city: "bnglr",
    state: "Karnataka",
    country: "India",
    pincode: "500099",
    phone: "9090907889"
  };
 
 





  const resetForm =() =>{
    setAddressState((prev) =>({
        ...prev,
        addNewAddress : false,
        currAddress :{
            name : "",
            street: "",
            city: "",
            state: "",
            country: "",
            pincode: "",
            phone: ""
        }
    }))
    navigate("/profile/addresses")
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    // currAddress?._id ? updateAddressServerCall() :
    // addAddressServerCall();
    resetForm();
    navigate("/profile/addresses")
  }

  return (
    addNewAddress && (
    <div>
        <h4>AddressForm</h4>
        <div >
        <form
        onSubmit ={submitHandler}
        style={{display: "flex", flexDirection: "column"}}>
        <input 

        type="text" 
        placeholder="Enter name"
        name ="name"
        value={formValues?.name}
        onChange={changeHandler}
        required  
        />
        <input 
        type="text" 
        placeholder="Enter House No. and Street address"
        name="street"
        value={formValues?.street}
        onChange={changeHandler}
        required   
        />
        <input
        type="text"
        placeholder='Enter city'
        name="city"
        value={formValues?.city}
        onChange={changeHandler}
        required
        />
        <input
        type="text"
        placeholder="Enter state"
        name="state"
        value={formValues?.state}
        onChange={changeHandler}
        required    
        />
        <input
        type="number"
        placeholder='Enter pincode'
        name="pincode"
        value = {formValues?.pincode}
        onChange ={changeHandler}
        required
        />
        <select 
        name="country"
        value={formValues?.country}
        onChange={changeHandler}
        required
        >
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="Australia">Australia</option>
        </select>
        <input type="number"
        placeholder="Enter phone number"
        name="phone"
        value={formValues?.phone}
        onChange={changeHandler}
        pattern="[0-9]{10}"
        required
        />
         <div>
         <button type="submit">Save</button>
        <button
        onClick={(e)=>{
            e.preventDefault();
            resetForm();
        }}
        >Cancel</button>
        <button
        onClick={(e)=>{
            e.preventDefault();
            setFormValues((prev)=>({...prev, ...dummyData}))
        }}
        >Enter dummy values</button>
         </div>
      

        </form>
        </div>
       


    </div>
    )
    
  )
}

export default AddressForm