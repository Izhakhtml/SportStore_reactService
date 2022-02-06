import React from "react";
import{MyProvider}from './SportEContext.component';
import SportECard from './SportE-card.component'
import styled from "styled-components";
const DisplayFlex = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-between;
`
const SportSECards=()=>{
const {sport} = React.useContext(MyProvider);
return(
<DisplayFlex>
    {
        sport.map((sportItem)=><SportECard item={sportItem}/>)
    }
</DisplayFlex>
)    
}
export default SportSECards;