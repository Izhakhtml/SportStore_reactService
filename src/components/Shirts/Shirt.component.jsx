import React from "react";
import {MyProvider} from '../Shirts/ShirtContext.component'
const Shirt=()=>{
const ConsumerContext = React.useContext(MyProvider) 
return(
    <div>
         {
            ConsumerContext.shirt.map((item)=>
                <li>{item.Company}</li>
            )
         }
    </div>
)    
}
export default Shirt;