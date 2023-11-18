import React from "react";
import { Link } from "react-router-dom";
import "../PageDErreur/PageDErreur.css";


function PageDErreur() {
  return (
    <section className="ErreurSection">
      <div className="NotFound">404</div>
      <p className="ErreurText">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="ErreurLinkRetourner">Retourner sur la page d’accueil</Link>
    </section>
  )
};

export default PageDErreur