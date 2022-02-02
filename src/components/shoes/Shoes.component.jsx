import React,{useContext} from "react";
import{ MyProvider }from "./ContextProvider.component";
const Shoes =()=>{
const ConsumerContext = useContext(MyProvider)
return(
<div>
    {
        ConsumerContext.arrayS.map((item)=> <li>{item.Company}</li> )
    }            
</div>
)
}
export default Shoes;