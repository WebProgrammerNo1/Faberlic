import Title from '../MainProducts/Title';
import React from 'react';
import styled from 'styled-components'
import BestSellerSlides from './BestSellerSlides';
import {NavLink} from 'react-router-dom'

function BestSeller() {
    return (
        <BestSellerStyled>
            <div className="AllTitle">
                <Title title={'Ko`p sotilganlar'} />
                <NavLink  className="link" to="/allNewProduct"> Hammasini korish </NavLink>
            </div>
            <BestSellerSlides/>
        </BestSellerStyled>
    )
}

const BestSellerStyled = styled.div`

background-color: #cccccc50;
.AllTitle{
    display: grid;
    grid-template-columns:80% 20%;
    align-items:center;
    .link{
        color: black;
        font-size: 18px;
    }
}
@media (max-width:768px){
    .AllTitle{
        grid-template-columns: 60% 40%;
    }
}

@media (max-width:600px){
    .AllTitle{
        grid-template-columns: 50% 50%;
        .link{
          display: flex;
          justify-content: flex-end;
          padding-right: 10px;
          font-size: 16px;
        }
    }
}
@media (max-width:368px){
    .link{
        font-size: 14px;
    }
}
`

export default BestSeller
