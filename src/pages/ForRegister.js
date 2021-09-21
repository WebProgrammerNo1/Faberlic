import React from 'react';
import Topbar from '../components/topbar/Topbar';
import MenuList from '../components/menuList/MenuList'
import Register from '../components/register/Register';
import { useState } from 'react'
import Footer from '../components/Footer';

const ForRegister = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            ''
            <MenuList menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Register />
            <Footer /> 
        </div>
    );
};


export default ForRegister;