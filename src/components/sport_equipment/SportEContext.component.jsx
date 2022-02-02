import React,{useState,useEffect} from "react";
import {GetSportE} from '../../Services/SportE-service';
export const MyProvider = React.createContext();
export const SportEContext = ({children})=>{
const[sport,setSport]=useState([])
useEffect(()=>{
    GetSportE().then((res)=>setSport(res.SportsEquipments))
},[]);
return(
    <MyProvider.Provider value={{sport,setSport}}>
        {children}
    </MyProvider.Provider>
)    
}
