import React from "react";
import './logementsList.css';
import {useNavigate} from "react-router-dom";

const LogementsList = (data) => {
    const navigate = useNavigate()
    const goToFicheLogement = (id) => {
        navigate(`/ficheLogement/${id}`)
    }
    return (
        <div>
            <article className="card" onClick={() => goToFicheLogement(data.id)}>
                <div className="cardImage">
                    <img src={data.picture} alt=""/>
                </div>
                <div className="cardFilter"></div>
                <div className="cardTitle">
                    <h2>{data.title}</h2>
                </div>
            </article>
        </div>
    )
}
export default LogementsList