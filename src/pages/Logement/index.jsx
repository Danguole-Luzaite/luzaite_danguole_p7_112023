import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Logement/Logement.scss";
import Tag from "../../components/Tag";
import Rate from "../../assets/SVG/Rate";
import Carrousel from "../../components/Carrousel";
import CollapseDescription from "../../components/CollapseDescription";
import CollapseEquipments from "../../components/CollapseEquipments";


function Logement() {

  const [currentLogement, setCurrentLogement] = useState([]);
  // Id du logement actuel ouvert sur la page
  const { id } = useParams();
  const navigate = useNavigate();  
    //fetch les données de l'objet actuel d'hébergement par son identifiant
   useEffect(getData, [id, navigate])
  
  function getData() {
    fetch("/logements.json")
    .then(response => response.json())
    .then(data => {
     const logement = data.find((logement) => logement.id === id );
     // test data
    //  console.log(logement);
     if(!logement){
      navigate("/404")
     }
     setCurrentLogement(logement);
    })
    .catch(error => console.error('Erreur lors de la récupération des détails des données du logement:', error)); 
  }

  return (
    <section className="SectionLogement">
      {/* composant Carrousel avec slides des images */}
      <div className="Carrousel">
        <Carrousel slides = {currentLogement.pictures} />
      </div>

      <div className="InfoLogementContainer">
        <div className="InfoWrap">
          <h1 className="LogementTitle">{currentLogement.title}</h1>
        <p className="LogementLocation">{currentLogement.location}</p>
            {/* composant Tag */}
          <ul className="TagWrap">
            <Tag tags={currentLogement.tags} />
          </ul>
        </div>

          {/* Nom et photo de l'hôte : */}
        <div className="HostInfoWrap">
          <div className="HostInfo">
            <p className="HostName">{currentLogement.host?.name}</p>
            <img src={currentLogement.host?.picture} alt="avatar de l'hôte" className="HostPicture"/>
          </div>
          {/* Rate de l'hôte : */}
          <Rate className="HostRate" rate={currentLogement.rating}/>
            
        </div>
      </div>

      {/* description et infos des équipements de l'appartement :*/}
      <div className="LogementCollapseContainer">
        <CollapseDescription description={currentLogement.description}/>
        {/* composant Collapse 'Equipments' */}
        <CollapseEquipments equipments={currentLogement.equipments}/>
      </div> 
    </section>
  )
};

export default Logement;