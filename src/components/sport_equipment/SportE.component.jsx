import React from "react";
import{SportEContext}from './SportEContext.component';
import SportSECards from "./SportEs-Cards.component";
const SportE=()=>{
return(
<SportEContext>
<h1>SPOER EQUIPMENT</h1>    
<SportSECards/>
</SportEContext> 
)    
}
export default SportE;