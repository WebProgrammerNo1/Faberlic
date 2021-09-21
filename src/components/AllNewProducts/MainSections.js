import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class MainSections extends Component {
    state = {
    active:false,
    active1:false,
    active2:false,
    active3:false,
    active4:false
}
   
render(){
    return (
        <MainSectionStyled>
            <div className="left-section">
                <div className="top-link">
                    <Link className="link" to="/">asosiy</Link> /
                    <p>Yangi narsalar</p>
                </div>
                <div className="new-catigories">
                    <Link className="new-link" to="/parvarish">PARVARISH</Link>
                    <Link className="new-link" to="/pardoz">PARDOZ</Link>
                    <Link className="new-link" to="/parfyumeriya">PARFYUMERIYA</Link>
                    <Link className="new-link" to="/uy">UY</Link>
                    <Link className="new-link" to="/sogliqnisaqlash">SOG'LIQNI SAQLASH</Link>
                    <Link className="new-link" to="/biznes">BIZNES</Link>
                </div>
                <div className="filtrs">
                    <p className="filtr-title">
                        FILTRLAR
                    </p>

                    <div className={this.state.active3 ? "filtr-table filter-accardion accardion-on" : "filtr-table filter-accardion"}>
                        <p>Narx oralig'ini tanlang (UZS)</p>
                        <ExpandMoreIcon className={this.state.active3 ? "accardion-title translate-on" : "accardion-title"} onClick={() => this.setState({ active3: !this.state.active3 })} />

                        <div className="accardion-content">
                            <p>asdfg</p>
                            <p>asdfg</p>
                            <p>asdfg</p>
                            <p>asdfg</p>
                            <p>asdfg</p>
                        </div>

                    </div>


                    <div className="filtr-table">
                        <p>Super narx</p>
                        <div className="check-section">
                            <div className={this.state.active ? "check-box check" : "check-box uncheck"} onClick={() => this.setState({ active: !this.state.active })} >
                                <div className="check-circle"></div>
                            </div>                            
                        </div>
                        
                    </div>
                    <div className="filtr-table">
                        <p>Faqat mavjud bolgan mahsulotlarni korsating</p>
                        <div className="check-section">
                        <div className={this.state.active1 ? "check-box check1" : "check-box uncheck1"} onClick={() => this.setState({ active1: !this.state.active1 })} >
                                <div className="check-circle"></div>
                            </div>  
                        </div>
                    </div>
                    <div className="filtr-table">
                        <p>Onlayn mahsulotlar</p>
                        
                        <div className="check-section">
                        <div className={this.state.active2 ? "check-box check1" : "check-box uncheck2"} onClick={() => this.setState({ active2: !this.state.active2 })} >
                                <div className="check-circle"></div>
                            </div>  
                        </div>
                    </div>
                    
                    <div className={this.state.active4 ? "filtr-table filter-accardion accardion-on" : "filtr-table filter-accardion"}>
                        <p>Серия</p>
                        <ExpandMoreIcon className={this.state.active4 ? "accardion-title translate-on" : "accardion-title"} onClick={() => this.setState({ active4: !this.state.active4 })} />

                        <div className="accardion-content">
                            <p>asdfg</p>
                            <p>asdfg</p>
                            <p>asdfg</p>
                            <p>asdfg</p>
                            <p>asdfg</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="right-section">
                
            </div>
        </MainSectionStyled>
    )
}
}

const MainSectionStyled = styled.div`
padding: 0 60px;
margin-top: 230px;
display: grid;
grid-template-columns: 25% 75%;
.accardion-on{
    height:auto!important;
    overflow: visible!important;
}
.translate-on{
    transform: rotate(180deg);
}
.filter-accardion{
    height: 20px;
    overflow: hidden; 
    .accardion-title{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
    }
}

.top-link{
    display: flex;
    gap: 10px;
    font-size: 13px;
    color: #33333380;
    margin: 0 0 50px 60px;
    .link{
        color: #33333380;
        text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
    }
}
.new-catigories{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 5px;
    .new-link{
        text-decoration: none;
        color: black;
        font-size: 14px;
        font-weight: 600;
    }
}
.filtrs{
    margin-top: 80px;
    .filtr-title{
        color: black;
        font-size: 16px;
        font-weight: 600;
    }
    
    .filtr-table{
        display: grid;
        grid-template-columns: 60% 40%;
        margin-top: 20px;       
    }
    .check-section{
        display: flex;
        justify-content: center;
        align-items: center;
        .check-box{
            width: 40px;
            height: 20px;
            background-color: #ccc;
            border-radius: 50px;
            padding: 3px;
            cursor: pointer;
            transition: all .3s ease;
            .check-circle{
                width: 14px;
                height: 14px;
                background-color: white;
                border-radius: 50%;
                
            }
        }
        .check, .check1 , .check2{
            display: flex;
            justify-content: flex-end;
            background-color: #60B61D;
        }

    }
}


`;

export default MainSections
