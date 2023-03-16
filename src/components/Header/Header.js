import React from 'react'
import Logo from '../../assets/LOGO.png';
import  './Header.css';
import Nav from "../Nav/nav";
function Header() {
  return (
    <div className="header">
       <div className="logo">
         <img src={Logo} alt="logo kasa" />
       </div>
       <Nav/>
    </div>
  )
}

export default Header