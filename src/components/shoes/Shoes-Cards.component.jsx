import React, { useContext } from "react";
import {MyProvider} from '../shoes/ContextProvider.component'
import ShoeCard from "./Shoe-Card.component";
import styled from "styled-components";

const DisplaySbaba = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-between;
`
const ShoesCards = ()=>{
const{arrayS} = useContext(MyProvider)
return(
        <DisplaySbaba>
        {
            arrayS.map((ShoeItem)=>
             <ShoeCard item={ShoeItem}/>
            )
        }            
        </DisplaySbaba>
)
}
export default ShoesCards;