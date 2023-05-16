import React from "react"
import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer } from "../reducer/DataReducer";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({children})=>{

    const inititalState={
        productsData: []
    }
    useEffect(()=>{
    const getData =async()=>{
        try{
            const res = await axios.get("/api/products");
            dispatch({type:"GET_DATA",payload: res.data.products})
        }catch(error){
            console.error(error);
        }
    }
    getData();
    },[])




    const [state, dispatch] = useReducer(dataReducer, inititalState);
    return(
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData =()=> useContext(DataContext);