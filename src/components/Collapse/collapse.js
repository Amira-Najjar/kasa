import React, { useState } from 'react';
import './collapse.css';

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
    return (
      <div className="collapse">
        <div className="collapseHeader" onClick={handleToggle}>
          <h3>{props.title}</h3>
          <span>{isOpen ? <i
                className={"fa-solid fa-chevron-up"}></i> : <i
                className={"fa-solid fa-chevron-down"}></i>}</span>
        </div>
        {!props.equipement ? (
          <div className={isOpen ? 'contentShow' : 'content'}>
            <p>{props.description}</p>
          </div>): ( 
          <div className={isOpen ? 'contentShow' : 'content'}>
            <ul>
               {props.equipement.map((equip, i) => (
                  <li key={i}>{equip}</li> ))
                }
            </ul>
        </div>)}
        
      </div>
    );
}

export default Collapse