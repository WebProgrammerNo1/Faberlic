import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@material-ui/icons/Person';
import {NavLink} from 'react-router-dom'

function LogReg() {
    return (
        <LogRegStyled>
            <div className="left-content">
                <h4 className="title">FABERLIC ONLAYN-DO'KONIGA KIRISH</h4>
                <p className="mb">Agar sizda yaratilgan hisob yozuvingiz bo'lsa, kirishni amalga oshiring.</p>
                <a className="login" href="/#">
                    <PersonIcon className="PersonIcon" />
                    Kirish
                </a>
            </div>

            <div className="right-content">
                <h4 className="title">RO'YXATDAN O'TISHDAN SO'NG DARHOL 20% CHEGIRMA OLING!</h4>
                    <p className="mb">Shuningdek, 26 iyuldan 15 avgustgacha biz birinchi xarid uchun, teksturali niqoblar to'plamini beramiz.</p>
                    <NavLink className="register"  to="/register">
                        Ro'yxatdan o'tkazish
                    </NavLink>
            </div>
        </LogRegStyled>
    )
}


const LogRegStyled = styled.div`
 margin-top: 50px;
 display: grid;
 grid-template-columns: 49% 49%;
 padding: 20px 80px 20px 60px ;
 gap: 2%;
 box-sizing:border-box;
.left-content{
    box-sizing: border-box;
}
 div{
     box-sizing:border-box!important;
     box-shadow: 2px 0 7px #00000050;
     padding: 30px;
     position: relative;
     .title{
      padding:10px 0 20px 0;
      position: relative;
      &::after{
          position: absolute;
          content: '';
          background-color: black;
          width: 50px;
          height: 2px;
          left: 0;
          top: 0px;
          z-index: 2;
      }
     }
     p{
         margin-bottom: 50px;
         font-size: 16px;
         font-weight: 300;
     }
     .login{
         color: black;
         &:hover{
             background-color: black;
             color: white;
             opacity: .7;
         }
     }
     .register{
         height: 45px;
         position: absolute;
         bottom: 10px;
         right: 30px;
         text-decoration: none;
         display: flex;
         justify-content: center;
         align-items: center;
         width: 40%;    
         border: 1px solid #00000050;
         padding: 10px 20px;
         background-color: black;
         color:white;
         &:hover{
             opacity: .7;
             box-shadow: 2px 0 15px #00000070;
         }
     }

     .register , .login{
         position: absolute;
         bottom: 10px;
         right: 30px;
         text-decoration: none;
         display: flex;
         justify-content: center;
         align-items: center;
         width: 40%;    
         border: 1px solid #00000050;
         padding: 10px 20px;
         .PersonIcon{
            position: absolute;
            left: 20px;
        }
     }
 }

 @media (max-width:1200px){
     padding: 20px;
     margin-top: 30px;
    }

 @media (max-width:1024px){
    .login , .register{
        width: 90%!important;
       
    }
    div{
        padding: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    margin-top: 20px;

 }

 @media only screen and (min-width:960px) and ( max-width: 1025px){
    .container {
       width: 100%;
    }
    padding: 10px;
    grid-template-columns: 100%;
    margin-top: 10px;
    display: flex;
    gap: 30px;
    .login , .register{
     margin-left: 5%;
    }
    .title{
        font-size:16px;
    }
    .mb{
        margin-bottom: 20px !important;
        font-size: .875rem;
    }
}

@media only screen and (min-width:500px) and ( max-width: 768px){
    .container {
       width: 100%;
    }
    display: flex;
    flex-direction: column;

    .mb{
        margin-bottom: 60px !important;
        font-size: .875rem;
    }

    .right-content{
        margin-top: 10px;
    }
}
@media only screen and (min-width:360px) and ( max-width: 500px){
    .container {
       width: 100%;
    }
    display: flex;
    flex-direction: column;


    .register , .login{
        right: 16px !important;
    }
    .mb{
        margin-bottom: 60px !important;
        font-size: .875rem;
    }

    .right-content{
        margin-top: 10px;
    }
}


`;
export default LogReg
