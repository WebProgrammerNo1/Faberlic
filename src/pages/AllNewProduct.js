import React from 'react'
import MainSections from '../components/AllNewProducts/MainSections'
import Footer from '../components/Footer'
import Topbar from '../components/topbar/Topbar'
import { useState } from 'react'
import Menu from '../components/menuList/MenuList';

function AllNewProduct() {

    const [menuOpen,setMenuOpen] = useState(false)

    return (
        <div>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            ''
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MainSections/>
            <Footer/>
        </div>
    )
}

export default AllNewProduct
