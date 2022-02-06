import React from "react";
import ShoesCards from "./Shoes-Cards.component";
import{ContextProvider }from "./ContextProvider.component";
const Shoes =()=>{
return(
<ContextProvider>
   <h1>SHOES</h1>
   <ShoesCards/>
</ContextProvider>
)
}
export default Shoes;