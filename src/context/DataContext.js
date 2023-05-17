
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer , inititalState } from "../reducer/DataReducer";
import { getAllCategories, getAllProducts } from "../services/services";

export const DataContext = createContext(null);

export const DataProvider = ({children})=>{
    const [state, dispatch] = useReducer(dataReducer, inititalState);
    

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
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData =()=> useContext(DataContext);