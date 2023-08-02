import React, { useState } from 'react';
import NavBar from './NavBar';
import Logo from '../images/LogoCarlos.png'

export default function Header() {
    return (
        <div className='d-flex' > 
        <img className="w-25 d-flex" src={Logo} />
        </div>
    );
}