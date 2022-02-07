import React from 'react';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom";
import HomePage from '../components/home/HomePage.component'
import Footer from "../components/parts/Footer.component";
import Header from "../components/parts/Header.component";
import Pants from "../components/pants/Pants.component";
import Shoes from "../components/shoes/Shoes.component";
import Shirt from "../components/shirts/Shirt.component";
import SportE from "../components/sport_equipment/SportE.component";
import styled from "styled-components";
const Main = styled.div`
grid-area:main;
`
const AppRouter =()=>{  
return(
    <Main>
        <BrowserRouter>
                  <Header/>
                  <Routes>
                          <Route exact path="/" element={<HomePage/>}/>
                          <Route path="/Pants" element={<Pants/>}/>
                          <Route path="/Shoes" element={<Shoes/>}/>
                          <Route path="/Shirt" element={<Shirt/>}/>
                          <Route path="/SportE" element={<SportE/>}/>
                  </Routes>
                  <Footer/>
        </BrowserRouter>        
    </Main>

)    
}
export default AppRouter;