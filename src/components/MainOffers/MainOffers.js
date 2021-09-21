import React from 'react'
import styled from 'styled-components'
import Title from '../MainProducts/Title'
import OffersSlides from './OffersSlides'

function MainOffers() {
    return (
        <MainOfferStyled>
            <Title title={'Ajoyib Takliflar'} />
            <OffersSlides/>
        </MainOfferStyled>
    )
}

const MainOfferStyled = styled.div`

`

export default MainOffers
