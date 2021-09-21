import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import offer1 from '../../images/offers/offer1.jpg'
import offer2 from '../../images/offers/offer2.jpg'
import offer3 from '../../images/offers/offer3.jpg'
import offer4 from '../../images/offers/offer4.jpg'
import offer5 from '../../images/offers/offer5.jpg'
import offer6 from '../../images/offers/offer6.jpg'
import offer7 from '../../images/offers/offer7.jpg'

class OffersSlides extends Component {
    state = {
        items: [
            { id: 1,
              title: 'Biomica mitsellyar suvi, terining mikrobiomasiga gamxorlik qiladi. Aminokislotalar va iz elementli agent barcha teri turlari, ayniqsa sezgir teri uchun mos keladi! Yilning eng yaxshi bahosida gozallik mahsulotini xarid qilish imkoniyatini boy bermang!',
              img:offer1 },
            { id: 2,
              title: 'Biomica mitsellyar suvi, terining mikrobiomasiga gamxorlik qiladi. Aminokislotalar va iz elementli agent barcha teri turlari, ayniqsa sezgir teri uchun mos keladi! Yilning eng yaxshi bahosida gozallik mahsulotini xarid qilish imkoniyatini boy bermang!',
              img:offer2 },
            { id: 3,
              title: 'Biomica mitsellyar suvi, terining mikrobiomasiga gamxorlik qiladi. Aminokislotalar va iz elementli agent barcha teri turlari, ayniqsa sezgir teri uchun mos keladi! Yilning eng yaxshi bahosida gozallik mahsulotini xarid qilish imkoniyatini boy bermang!',
              img:offer3 },
            { id: 4,
              title: 'Biomica mitsellyar suvi, terining mikrobiomasiga gamxorlik qiladi. Aminokislotalar va iz elementli agent barcha teri turlari, ayniqsa sezgir teri uchun mos keladi! Yilning eng yaxshi bahosida gozallik mahsulotini xarid qilish imkoniyatini boy bermang!',
              img:offer4 },
            { id: 5,
              title: 'Biomica mitsellyar suvi, terining mikrobiomasiga gamxorlik qiladi. Aminokislotalar va iz elementli agent barcha teri turlari, ayniqsa sezgir teri uchun mos keladi! Yilning eng yaxshi bahosida gozallik mahsulotini xarid qilish imkoniyatini boy bermang!',
                img: offer5
            },
            { id: 6,
                title: 'Biomica mitsellyar suvi, terining mikrobiomasiga gamxorlik qiladi. Aminokislotalar va iz elementli agent barcha teri turlari, ayniqsa sezgir teri uchun mos keladi! Yilning eng yaxshi bahosida gozallik mahsulotini xarid qilish imkoniyatini boy bermang!',
                img: offer6
            },
            { id: 7,
                title: 'Biomica mitsellyar suvi, terining mikrobiomasiga gamxorlik qiladi. Aminokislotalar va iz elementli agent barcha teri turlari, ayniqsa sezgir teri uchun mos keladi! Yilning eng yaxshi bahosida gozallik mahsulotini xarid qilish imkoniyatini boy bermang!',
                img:offer7 }
        ]
    }
  
    constructor(props) {
        super(props)
        this.breakPoints = [
          { width: 1, itemsToShow: 1 },
          { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
          { width: 850, itemsToShow: 3 },
          { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
          { width: 1450, itemsToShow: 5 },
          { width: 1750, itemsToShow: 6 },
        ]
      }

    render() {
        const { items } = this.state;
        return (
            <OfferSlidesStyled>
             <Carousel breakPoints={this.breakPoints}>
                    {items.map(item => <div className="item" key={item.id}>
                        <a href="/#"><img src={item.img} alt="alt" /></a>
                        <p className="item-title">{item.title} </p>
                        <a className="link" href="/#"> Batafsilroq <ChevronRightIcon/> </a>
                    </div>)}
              </Carousel>
            </OfferSlidesStyled>
        )
    }
}

const OfferSlidesStyled = styled.div`
.item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10%;
    img{
        width: 100%;
    }
    p{
        width: 100%;
        text-align: justify;
        padding: 10px 0;
        font-size: 14px;
        font-weight: 300;
        color: #333;
        letter-spacing: 1.5px;
    }
    .link{
        display: flex;
        gap: 10px;
        align-items: center;
        color: black;
        font-size: 14px;
        text-decoration: none;
        font-weight: 300;
        &:hover{
            text-decoration: underline;
        }
    }
}

.rec.rec-arrow {
    border-radius: 0;
}
/* round buttons on hover */
.rec.rec-arrow:hover {
    border-radius: 0;
}
/* hide disabled buttons */
.rec.rec-arrow:disabled {
    visibility: hidden;
}
/* disable default outline on focused items */
/* add custom outline on focused items */
.rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
}

@media (max-width:991px){
     position: relative;
  padding-bottom:30px;
  .rec.rec-arrow{
    position: absolute;
    bottom: 0;
    box-shadow: none;
    background-color: transparent;
    color: black;
   
    overflow:hidden;
  }
  .rec.rec-arrow-right{
    right: 0;
  }
 
}

`
export default OffersSlides
