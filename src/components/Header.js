import React from 'react'
import { NavLink } from "react-router-dom";
import Logo from '../assets/LOGO.png';
import styles from'../App.module.css';
function Header() {
  return (
    <div className={styles.header}>
       <div className={styles.logo}>
         <img src={Logo} alt="logo kasa" />
       </div>
       <div>
          <nav className={styles.lien}>
            <NavLink to="/" className={styles.menuLink}>Accueil</NavLink>
            <NavLink to="/apropos" className={styles.menuLink}>A Propos</NavLink>
          </nav>
       </div>
    </div>
  )
}

export default Header