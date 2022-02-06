import React,{useState,useEffect} from "react";
import {GetData}from '../../Services/Shoes-service'
export const MyProvider = React.createContext();
export const ContextProvider = ({children})=>{ 
const[arrayS,setArrayS] = useState([])
const[isLoading,setIsLoading] = useState(false)

useEffect(()=>{
setIsLoading(true)
GetData()
.then(res =>{ setArrayS(res.Shoes)})
.catch((rej)=>{console.error(rej);})
.finally(()=>{setIsLoading(false)})
},[])
return(
    <MyProvider.Provider value={{arrayS,setArrayS,isLoading}}>
        {children}
    </MyProvider.Provider>
)
}