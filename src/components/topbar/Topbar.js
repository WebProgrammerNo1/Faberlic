import React from 'react';
import './topbar.css';
import { useState } from 'react';
import RoomOutlined from '@material-ui/icons/RoomOutlined'
import Search from '@material-ui/icons/Search'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Link } from "react-router-dom"
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';





const Topbar = ({ menuOpen, setMenuOpen}) => {
   

    const [closedd, setClosedd] = useState(false)
    const [searchClose, setsearchClose] = useState(false)
    // const [larged, setLarged] = useState(false)

    return (
        <div className={"Wrapper "  + (closedd && "active")}>
            <div className="box1">
                <p>Ro'yxatdan o'ting va 20% chegirma oling</p>
                <span className="mx-2">Batafsil</span>
                <div className="closebox" onClick={() => setClosedd(!closedd)}>
                    <ClearRoundedIcon />
                </div>
            </div>
            <div className="topbar">
                <div className="box2">
                    <div className="minibox1">
                        <div className="miniboxx">
                            <RoomOutlined className="map" />
                            <p className="p1">Toshkent</p>
                        </div>
                        <span className="mx-2">|</span>
                    
                        <p className="p2">uz</p>
                    </div>
                    <div className="minibox2">
                        <a href="/#">Qulay yetkazib berish</a>
                        <a href="/#">Maslahatchilarga</a>
                        <a href="/#">Artikul boyicha buyirtma</a>
                        <a className="" href="/#">Yordam</a>
                        <a className="" href="/#">Buyurtmani qayerdan olish kerak</a>
                    </div>
                    <div className="minibox3">
                        <Link to="">Kirish</Link>
                        <span className="span1 mx-2 text-secondary">|</span>
                        <Link to="/Register">Royhatdan O'tkazish</Link>
                    </div>
                </div>
                <div className="box3">
                    <div className={"child1 " + (searchClose && 'd-none')}>
                        <div className={"spanbox " + (menuOpen && 'active2')} onClick={() => setMenuOpen(!menuOpen)}>
                            <div className={(menuOpen && ' dnone ')}>
                                <MenuRoundedIcon/>
                            </div>
                            <div className={"dnone " + (menuOpen && 'dblock')}>
                                <ClearRoundedIcon />
                            </div>
                        </div>
                        <Link to="/"><img src="https://img.faberlic.com/medias/faberlic-logo.svg?context=bWFzdGVyfGltYWdlc3w5NTE1fGltYWdlL3N2Zyt4bWx8c3lzLW1hc3Rlci9pbWFnZXMvaDNlL2gwNy9oMDAvOTAxODg4NTkzMTAzOC9mYWJlcmxpY19sb2dvLnN2Z3w1OWZiY2JhNDA4MzkzYzZjNGJmNDgwNDkwODU1NGY3ODdhMmU3NzQwZGRmNjNiZThjOWEwYzZiODE1OWRlNTM2" alt="" /></Link>
                    </div>
                    <div className={"child2 "+ (searchClose && 'dblock')}>
                        {/* <Search className={"search " + (larged && 'active1')} />
                        <input type="text" placeholder="Faberlicdan izlash" className={" " + (larged && 'active1')} onClick={() => setLarged(true)}></input> */}
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><Search/></span>
                            <input type="text" placeholder="Faberlicdan izlash" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className="child3">

                        <div className="boxmini1 twoiconnone">
                            <Search className={"icon2 " + (searchClose && 'd-none')} onClick={() => setsearchClose(!searchClose)}/>
                        </div> 
                        <div className="boxmini1">
                            <ImportContactsTwoToneIcon className={"icon2 " + (searchClose && 'd-none')}/>
                            <h4>Katalog</h4>
                        </div> 
                        <div className="boxmini1">
                            <FavoriteBorderOutlinedIcon className={"icon2 " + (searchClose && 'd-none')} />
                            <h4>Tanlanganlar</h4>
                        </div>
                        <div className="boxmini1">
                            <ShoppingCartOutlinedIcon className={"icon2 " + (searchClose && 'd-none')} />
                            <h4>Savat</h4>
                        </div>
                        <div className="boxmini1 twoiconnone">
                            <a href="/register"><PersonOutlineIcon className={"icon2 " + (searchClose && 'd-none')}/></a> 
                        </div>
                    </div>
                </div>
                <div className="box4">
                    <ul>
                        <a href="/#">yangi</a>
                        <a href="/#">Aksiyalar</a>
                        <a href="/#">parvarish</a>
                        <a href="/#">pardoz</a>
                        <a href="/#">parfyumeriya</a>
                        <a href="/#">moda</a>
                        <a href="/#">uy</a>
                        <a href="/#">sog'liqni saqlash</a>
                        <a href="/#">mahsulatlar</a>
                        <a href="/#">biznes</a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Topbar;

     