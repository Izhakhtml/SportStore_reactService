import React from "react";
import ShoesCards from "./Shoes-Cards.component";
import{ContextProvider }from "./ContextProvider.component";
const Shoes =()=>{
return(
<ContextProvider>
   <ShoesCards/>
</ContextProvider>
)
}
export default Shoes;