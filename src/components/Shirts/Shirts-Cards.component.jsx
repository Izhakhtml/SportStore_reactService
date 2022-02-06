import React,{useContext} from "react";
import{MyProvider}from './ShirtContext.component'
import ShirtCard from "./Shirt-Card.component";
import styled from "styled-components";
const DisplayFlex = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-between;
`
const ShirtsCards =()=>{
const {shirt} = useContext(MyProvider);
return(
    <DisplayFlex>
         {
          shirt.map((shirtItem)=><ShirtCard item={shirtItem}/>)
         }
    </DisplayFlex>
)
}
export default ShirtsCards;