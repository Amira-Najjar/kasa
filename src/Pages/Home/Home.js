import React from 'react'
import  './Home.module.css';
import logements from '../../API/logements.json';
import BackgroundPicture from "../../components/Background/backgroundPicture";
import imgBackground from '../../assets/IMG.png'
import LogementsList from '../../components/LogementsList/logementsList';

function Home() {
  return (
    <div >
        <BackgroundPicture picture={imgBackground} title={"Chez vous, partout et ailleurs"}/>
        <div className="containerList">
                {logements.map((logement) => (
                    <LogementsList key={logement.id} title={logement.title} picture={logement.cover} id={logement.id}/>
                ))}
            </div>
    </div>
  )
}

export default Home;

