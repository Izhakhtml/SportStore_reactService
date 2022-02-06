import React from "react";
import {ShirtContext} from './ShirtContext.component'
import ShirtsCards from "./Shirts-Cards.component";
const Shirt=()=>{
return(
<ShirtContext>
    <h1>SHIRTS</h1>
    <ShirtsCards/>
</ShirtContext>
)    
}
export default Shirt;