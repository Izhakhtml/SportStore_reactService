import React from "react";
import{GetPants}from '../../Services/Pants-service'
export const MyProvider = React.createContext();
export const PantsContext =({children})=>{
const[pants,setPants]=React.useState([])
React.useEffect(()=>{
    GetPants().then((res)=>setPants(res.pants))
},[])    
return(
    <MyProvider.Provider value={{pants,setPants}}>
        {children}
    </MyProvider.Provider>
)
}