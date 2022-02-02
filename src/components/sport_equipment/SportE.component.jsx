import React from "react";
import{MyProvider}from './SportEContext.component';
const SportE=()=>{
const {sport,setSport} = React.useContext(MyProvider);
return(
<div>
    {
        sport.map((item)=><li>{item.SportType}</li>)
    }
</div>    
)    
}
export default SportE;