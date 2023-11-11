import React from 'react';
import "../Accueil/Accueil.css";
import Banner from '../../components/Banner';
import Card from '../../components/Card/Card';
import "../../data/logements.json"

function Accueil() {
  return (
    <div className='HomeSection'>
      <Banner/>
      <div className='Gallery'>
        <Card/>
      </div>
    </div>
  )
};

export default Accueil