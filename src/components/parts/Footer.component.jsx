import React from "react";
import styled from "styled-components";
const FooterBar = styled.footer`
grid-area:footer;
background:gray;
`
const Footer =()=>{
return(
    <FooterBar>
        <h1>Footer</h1>
    </FooterBar>
)       
}
export default Footer;