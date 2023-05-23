/**
 * /**
 *
 * This is a custom hook for address management
 *
 * @type {custom-hook} - useAddressUpdater
 * @param {function} serviceFunction - Service function related to Addresses :
 * 										addAddressService , getAddressListService ,
 * 										removeAddressService , updateAddressService
 * @param {object} address - optional argument , passed when it is needed in the service function
 * @param {string} msg - message to be displayed on toast after service calls
 * @return {function} servercall - a function which handles invoking the service function passed
 * @export {custom-hook} - useAddressUpdater
 */

import { useAuth } from "../context/AuthContext";
import { useData } from "../context/DataContext";
import { actionTypes } from "../reducer/actionTypes";

export const useAddressUpdater = (serviceFunction, address, msg) =>{
    const {
        auth: {token}
    } = useAuth();
    const {dispatch} =useData();
    const {SET_ADDRESSLIST} = actionTypes;

    const serverCall = async () => {
        try{
            const res = await serviceFunction(address, token);
            if(res.status === 200 || 201){
                // toast.success(msg);
                dispatch(
                    {
                        type: SET_ADDRESSLIST,
                        payload: {
                            addressList: res.data.addressList
                        }
                    })
            }
        } catch(err){
        // toast.error("There was a problem please try after some time")
        }
    }
return [serverCall];
}