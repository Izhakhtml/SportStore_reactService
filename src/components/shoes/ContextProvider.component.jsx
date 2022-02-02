import React,{useState,useEffect} from "react";
import {GetData}from '../../Services/Shoes-service'
export const MyProvider = React.createContext();
export const ContextProvider = ({children})=>{ 
const[arrayS,setArrayS] = useState([])
useEffect(()=>{
GetData().then(res =>{ setArrayS(res.Shoes)})
},[])
return(
    <MyProvider.Provider value={{arrayS,setArrayS}}>
        {children}
    </MyProvider.Provider>
)
}