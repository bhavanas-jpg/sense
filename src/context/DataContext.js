
import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { dataReducer , inititalState } from "../reducer/DataReducer";
import { getAllCategories, getAllProducts } from "../services/services";
import { actionTypes } from "../reducer/actionTypes";
import { useAuth } from "./AuthContext";
import { getCartService } from "../services/cart-services/getCartService";
import { getWishlistService } from "../services/wishlist-services";


export const DataContext = createContext(null);

export const DataProvider = ({children})=>{
    const [state, dispatch] = useReducer(dataReducer, inititalState);
    const [loader, setLoader] = useState(false);
   const {SET_CART, SET_WISHLIST} = actionTypes;
   const {auth} = useAuth();


    useEffect(()=>{
        if(auth.isAuth){
            (async()=>{          
              try{
                const res = await getCartService(auth.token);
                if(res.status === 200){
                    dispatch({
                        type: SET_CART,
                        payload: {cart: res.data.cart}
                    })
                    
                }
              }catch(error){
                console.error(error);
              }
            })();
       (async()=>{
        try{
            const res = await getWishlistService(auth.token);
            if(res.status === 200){
                dispatch({
                    type: SET_WISHLIST,
                    payload: {wishlist: res.data.wishlist}
                })
            }
        }catch(error){
            console.error(error);
        }
       })();  
}

    },[auth.isAuth])



    useEffect(()=>{
     (async()=>{
        try{
        const productRes = await getAllProducts();
        if(productRes.status === 200 || productRes.status === 201 ){
            dispatch({type:"GET_DATA",payload:{products:productRes.data.products}})
        }

        const categoryRes = await getAllCategories();
        if(categoryRes.status === 200 || categoryRes.status === 201 ){
            dispatch({type:"GET_CATAGORIES",payload: {categories:categoryRes.data.categories}})
        }

        }catch(error){
            console.error(error);
        }
     })()
    },[])




    return(
        <DataContext.Provider value={{state, dispatch, loader, setLoader}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData =()=> useContext(DataContext);