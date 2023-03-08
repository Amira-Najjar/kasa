import React from 'react'
import styles from'../App.module.css';
import imgBackground from '../assets/IMG.png'
import LogementsList from '../components/LogementsList';
function Body() {
  return (
    <div >
        <img className={styles.imgBackground} src={imgBackground} alt="imageBackground" />
        <p className={styles.text}>Chez vous, partout et ailleurs</p>
        <div className={styles.gallery}>
            <LogementsList />
        </div>
    </div>
  )
}

export default Body