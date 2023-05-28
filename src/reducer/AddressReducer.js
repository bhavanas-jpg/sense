let uniqueId = new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
 
export const initialAddressState = {
    addressList : [{
        id: uniqueId,
        name: "Bhavana",
        street : "#78, A block, Rathnagiri Nagar",
        city : "Shimoga",
        state: "Karnataka",
        country: "India",
        pincode: "512345",
        phone: "1234567890"
    }],
    editIndex: null
}

export const addressListReducer = (state,action)=>{
   switch(action.type){
    case "ADD_ADDRESS": 
    if(state.editIndex !== null && state.addressList){
        console.log(state.editIndex  , "editIndex value");
        const editedAddress = state.addressList.map((item)=> item.id === state.editIndex
        ? {id: item.id , ...action.payload}
        : item
        )
        console.log(editedAddress);
        return {
            ...state,
            addressList : [...state.addressList, ...editedAddress],
            editIndex: null
        }
    }

    return {
        ...state,
        addressList: [...state.addressList, {id: uniqueId,  ...action.payload}]
    }
    
    case "EDIT_ADDRESS":
        const editedAddress = state.addressList.find(({id})=> id === action.payload);
        return {
            ...state,
            addressList : [ ...state.addressList ,editedAddress],
            editIndex: action.payload
        }
    case "DELETE_ADDRESS":
        console.log(action.payload , "delete sec");
        const deletedNote = state.addressList.filter(({id}) => id !== action.payload)
        console.log(deletedNote);
        return {
            ...state,
            addressList : [...deletedNote]
        }

    default:
        return null;
   }
}