import React from "react";
import "../Logement/Logement.css";
import Tag from "../../components/Tag";
import DefaultAvatar from "../../assets/Host.png";
import Rate from "../../assets/_Rate.png";
// import data from "../../data/logements.json";

function Logement() {
  return (
    <section className="SectionLogement">
      <div className="Carrousel">
        {/* insert composant Carrousel */}
      </div>

      <div className="InfoLogementContainer">
        <div className="InfoWrap">
          <h1 className="LogementTitle">Cozy loft on the Canal Saint-Martin</h1>
          <p className="LogementLocation">Paris, Île-de-France</p>
            {/* composant Tag */}
          <div className="TagWrap">
              <Tag />
          </div>
        </div>

        <div className="HostInfoWrap">
          <div className="HostInfo">
            <p className="HostName">Nathalie Jean</p>
            <img src={DefaultAvatar} alt="avatar de l'hôte" className="HostPicture"/>
          </div>
          <img src={Rate} alt="note de l'hôte" className="HostRate"/>
        </div>
      </div>
      
      <div className="LogementCollapseContainer">
        {/* composant Collapse 'Description' */}
        {/* composant Collapse 'Equipments' */}
      </div> 
    </section>
  )
};

export default Logement;