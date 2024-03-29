import React from "react";
import Collapse from '../../components/Collapse/collapse'
import BackgroundPicture from "../../components/Background/backgroundPicture";
import img from '../../assets/aproposPicture.png'
export default function APropos(){
    const textCollapse = [
        {
            title:'Fiabilité',
            description:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
        },
        {
            title:'Respect',
            description:'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        },
        {
            title:'Service',
            description:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            title:'Sécurité',
            description:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ]
    
    return (
        <div>
            <BackgroundPicture picture={img}/>
            <div className="containerCollapse">
              { textCollapse.map((item,i) => (
                 <Collapse key={i} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
    )
}