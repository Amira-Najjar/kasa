import React from 'react'
import {Link} from "react-router-dom";
import './NotFound.css'
function NotFound() {
  return (
    <div className="containeur-404">
      404
      <p className="erreur-text">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="link-erreur">
          Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default NotFound