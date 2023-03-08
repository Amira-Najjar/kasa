import React from 'react'
import logements from '../logements.json';
import styles from'../App.module.css';
const LogementsList = () => {
    return (
      <>
        {logements.map(logement => (
          <div key={logement.id} className={styles.thumb}>
            <img className={styles.imgLog} src={logement.cover} alt="logement" />
            <div className={styles.titleLog}>{logement.title}</div>
          </div>
        ))}
      </>
    );
  };
  
  export default LogementsList;