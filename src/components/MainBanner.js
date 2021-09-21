import styled from "styled-components";
import React from 'react';
import Ads from "../images/Ads/adsRegister.jpg"

function MainBanner() {
    return (
        <MainBannerStyled>
            <a href="/#">
                <img src={Ads} alt="sovga" />
            </a>
        </MainBannerStyled>
    )
}

const MainBannerStyled = styled.div`
margin-top: 50px;
overflow: hidden;
 padding: 0 60px ;
 img{
     width: 100%;
 }
 @media (max-width:1200px){
     padding: 20px;
    }

 @media (max-width:991px){
    padding: 10px;
 }
`;

export default MainBanner
