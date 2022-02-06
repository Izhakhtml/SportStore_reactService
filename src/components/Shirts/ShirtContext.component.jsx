import React,{useEffect, useState} from "react";
import {GetShirts} from '../../Services/Shirt-service'
export const MyProvider = React.createContext();
export const ShirtContext =({children})=>{
const[shirt,setShirt]=useState([]) // all
useEffect(()=>{
    GetShirts().then(res=>setShirt(res.shirt))
},[])
return(
    <MyProvider.Provider value={{shirt,setShirt}}>
        {children}
    </MyProvider.Provider>
)
}
