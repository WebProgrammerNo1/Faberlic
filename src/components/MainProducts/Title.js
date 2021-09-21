import React from 'react';
import styled from 'styled-components';


function Title({title }) {
    return (
        <TitleStyled>
            <h2 className="title">
                {title}
            </h2>
            <span></span>
           
        </TitleStyled>
    )
}

const TitleStyled = styled.div`

display: flex;
justify-content: space-between;
padding: 50px 60px;
align-items: center;
span{
    content: '';
    height: 1px;
    width: 60%;
    background-color: #33333350;
    border-radius: 50px;
}
.title{
    text-transform: uppercase;
    font-size: 24px;
}


@media (max-width:991px){
    padding:60px  30px;
    .title{
    text-transform: uppercase;
    font-size: 20px;
}
}
@media (max-width:768px){
    justify-content: space-evenly;
    padding:60px  10px;
    .title{
    text-transform: uppercase;
    font-size: 18px;
}
span{
    width: 40%;
}
}

@media (max-width:600px){
    justify-content: flex-start;
    span{
        display: none;
    }
}

@media (max-width:368px){
    .title{
        font-size:16px;
    }
}
`;

export default Title
