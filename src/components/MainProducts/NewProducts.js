import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ProductSlides from './ProductSlides'
import Title from './Title'

function NewProducts() {
    return (
        <NewProductsStyled>
            <div className="AllTitle">
                <Title title={'Yangi narsalar'} />
                <NavLink  className="link" to="/allNewProduct"> Hammasini korish </NavLink>
            </div>
            <ProductSlides/>
        </NewProductsStyled>
    )
}

const NewProductsStyled = styled.div`

background-color: #cccccc50;
margin-top: 50px;
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
export default NewProducts
