import React from 'react'
import LogReg from '../components/LogReg';
import MainCarousel from '../components/MainCarousel';
import MainBanner from "../components/MainBanner"
import Topbar from '../components/topbar/Topbar';
import NewProducts from '../components/MainProducts/NewProducts';
import Footer from '../components/Footer';
import MainOffers from '../components/MainOffers/MainOffers';
import BestSeller from '../components/BestSeller/BestSeller';
import { useState } from 'react'
import Menu from '../components/menuList/MenuList';
import Discount from '../components/Discount';



function MainPage() {

    const [menuOpen,setMenuOpen] = useState(false)
    return (
        <div>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MainCarousel />
            <LogReg />
            <MainBanner />
            <NewProducts />
            <MainOffers />
            <BestSeller /> 
            <Discount/>
            <Footer/>
        </div>
    )
}

export default MainPage
