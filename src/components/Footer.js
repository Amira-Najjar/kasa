import React from 'react'
import LogoFooter from '../assets/LogoFooter.png';
import textFooter from '../assets/textFooter.png'
import styles from'../App.module.css';
function Footer() {
  return (
    <div className={styles.footer}>
       <div className={styles.logoFooter}>
          <img src={LogoFooter} alt="logo kasa" />
        </div>
        <div>
          <img src={textFooter} alt="All rights reserved" />
        </div>
    </div>
  )
}

export default Footer