import React from "react";
import "../Logement/Logement.css";
import Tag from "../../components/Tag";
import DefaultAvatar from "../../assets/Host.png";
import Rate from "../../assets/_Rate.png";
import Carrousel from "../../components/Carrousel";
//import data from "../../data/logements.json";


// function showDataTest() {
//   return console.log(data);
// }
// showDataTest();


function Logement() {

  // data.pictures
  const slides = [
    {url: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"},
    {url: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg"},
    {url: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg"},
    {url: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg"},
  ];

  return (
    <section className="SectionLogement">
      <div className="Carrousel">
        <Carrousel slides={slides} />
      </div>

      <div className="InfoLogementContainer">
        <div className="InfoWrap">
          <h1 className="LogementTitle">data.title</h1>
          <p className="LogementLocation">data.location</p>
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