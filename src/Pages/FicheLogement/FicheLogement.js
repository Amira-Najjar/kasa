import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Carrousel from "../../components/Carrousel/carrousel";
import Collapse from "../../components/Collapse/collapse";
import datas from '../../API/logements.json';
import PageNotFound from "../NotFound/NotFound";
import Star from "../../components/Star/star";
import "./ficheLogement.css"
function FicheLogement() {
  const params = useParams()
  const [logement, setLogement] = useState(null);
  useEffect(() => {
      datas.forEach(data => {
          if (params.id === data.id) {
              setLogement(data);
          }
      })
  }, [params.id]);
  return (
    <div className='logementDetail'>
      {
        logement ? (
          <div>
            <Carrousel images={logement.pictures}/>
            <div className="logementDetail">
               <div className="logementTitle">
                  <div className="logementHead">
                      <div className="detailTitle">
                          <h2>{logement.title}</h2>
                          <p>{logement.location}</p>
                      </div>
                      <div className="detailTag">
                          {logement.tags.map((tag, i) => (
                           <div key={i}><span>{tag}</span></div>
                              ))}
                      </div>
                   </div>
                  <div className="contentProfil">
                      <div className="imgProfil">
                         <div className="boxProfil">
                            <p className="profilName">
                               {logement.host.name}
                             </p>
                             <img src={logement.host.picture} alt=""/>
                          </div>
                          <Star star={logement.rating}/> 
                       </div>
                      </div>
                   </div>
                  <div className="logementDescription">
                      <div className="logCollapse">
                         <Collapse description={logement.description} title={"Description"}/>
                      </div>
                      <div className="logCollapse">
                         <Collapse equipement={logement.equipments} title={"Équipement"}/>
                       </div>
                   </div>
               </div>
           </div>
        ) : (
         <PageNotFound/>
        )
      }  
   </div>
  )
}

export default FicheLogement