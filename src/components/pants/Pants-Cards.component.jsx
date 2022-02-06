import React,{useContext} from "react";
import {MyProvider} from './PantsContext.component'
import PantsCard from "./Pants-Card.component";
import styled from "styled-components";
const DisplayFlex = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-between;
`
const PantsCards =()=>{
const {pants} = useContext(MyProvider);
return(
    <DisplayFlex>
         {
             pants.map((pantsItem)=><PantsCard item={pantsItem}/>)
         }
    </DisplayFlex>
)    
}
export default PantsCards