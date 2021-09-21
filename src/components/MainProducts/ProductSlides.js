import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import Product1 from "../../images/Products/product1.jpg"
import Product2 from "../../images/Products/product2.jpg"
import FavoriteBorderIcon from '@material-ui/icons/Favorite';
class ProductSlides extends Component {
    state = {
      items: [
        {id: 1, title: 'Valkyrie Eau de Parfum for Her',img:Product1, oldprice:'97 000 uzs' ,newprice:'37 500 uzs'},
        {id: 2, title: 'Valkyrie Eau de Parfum for Her',img:Product2, oldprice:'97 000 uzs' ,newprice:'37 500 uzs'},
        {id: 3, title: 'Valkyrie Eau de Parfum for Her',img:Product1, oldprice:'97 000 uzs' ,newprice:'37 500 uzs'},
        {id: 4, title: 'Valkyrie Eau de Parfum for Her',img:Product2, oldprice:'97 000 uzs' ,newprice:'37 500 uzs'},
        {id: 5, title: 'Valkyrie Eau de Parfum for Her',img:Product1, oldprice:'97 000 uzs' ,newprice:'37 500 uzs'},
        {id: 6, title: 'Valkyrie Eau de Parfum for Her',img:Product2, oldprice:'97 000 uzs' ,newprice:'37 500 uzs'},
        {id: 7, title: 'Valkyrie Eau de Parfum for Her',img:Product1, oldprice:'97 000 uzs' ,newprice:'37 500 uzs'},
        {id: 8, title: 'Valkyrie Eau de Parfum for Her',img:Product2, oldprice:'97 000 uzs' ,newprice:'37 500 uzs'},
        {id: 9, title: 'Valkyrie Eau de Parfum for Her',img:Product1, oldprice:'97 000 uzs' ,newprice:'37 500 uzs'},
        {id: 10, title: 'Valkyrie Eau de Parfum for Her',img:Product2, oldprice:'97 000 uzs' ,newprice:'37 500 uzs'},
        {id: 11, title: 'Valkyrie Eau de Parfum for Her',img:Product1, oldprice:'97 000 uzs' ,newprice:'37 500 uzs'}
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
  
    render () {
      const { items } = this.state;
        return (
        <ProductSlidesStyled>
                <Carousel className="carousel" breakPoints={this.breakPoints}>
              {items.map(item => <div className="item" key={item.id}>
                <div className="product-top" >
                      <p className="new">New</p>
                      <p className="price">Super price</p>
                      <FavoriteBorderIcon className="heart"/>
                  </div>
                  <a href="/#">
                  <img src={item.img} alt="alt" />
                  </a>
                 
                  <p className="title"> {item.title}</p>
                  <div className="item-price">
                      <p className="old-price">{item.oldprice}</p>
                      <span></span>
                      <div>
                      <p className="your-price" >your price</p>
                      <p className="new-price">{item.newprice}</p>
                      </div>
                  </div>
                  <a className="login" href="/#">
                    Savatga qo'shish
                </a>
              </div>)}
        </Carousel>
        </ProductSlidesStyled>
      )
    }
}
  
const ProductSlidesStyled = styled.div`
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
.item{
    text-decoration: none;
    background-color: white;
    height: 100%;
    margin: 20px 0;
    padding: 10px;
    &:hover .login{
             background-color: black;
             color: white;
            
         }
    &:hover{
        box-shadow: 5px 0 15px #00000050;
    }
    a{
        display: flex;
        justify-content: center;
    }
    img{
        width: 70%;
        height: 50%;
       
    }
    .title{
        font-size: 14px;
        margin-bottom: 20px;
    }
}
.product-top{
    display: flex;
    padding: 10px;
    gap: 10px;
    z-index: 3;
}
.new{
    padding: 5px 10px;
    background-color: rgb(123,238,206);
    border-radius: 50px;
    font-size: 14px;
    cursor: pointer;
}
.price{
    background-color: #E0727F;
    border-radius: 50px;
    padding: 5px 10px;
    font-size:14px;
    margin-right: 30px;
    cursor: pointer;
}
.heart{
    color: #ccc;
    cursor: pointer;
}
.item-price{
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    margin: 20px 0;
    .old-price{
        font-size: 13px;
        text-decoration: line-through;
    }
    .your-price{
        font-size: 13px;
        margin-bottom: 5px;
        text-transform: capitalize;
    }
    .new-price{
        color: #E0727F;
        font-size: 14px;
    }
    span{
        content: '';
        height: 30px;
        width: 2px;
        background-color: #ccc;
    }
}
.login{
         color: black;
         font-size: 14px;
         text-decoration: none;
         display: flex;
         justify-content: center;
         align-items: center;
         width: 100%;    
         border: 1px solid #00000050;
         padding: 6px 10px;
         
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
export default ProductSlides
