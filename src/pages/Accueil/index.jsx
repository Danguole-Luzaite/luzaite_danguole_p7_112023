import React from 'react';
//import { useNavigate } from 'react-router-dom';
import "../Accueil/Accueil.css";
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import data from "../../data/logements.json";


function Accueil() {
//const navigate = useNavigate(); 

  return (
    <div className='HomeSection'>
      <Banner/>
      <ul className='Gallery'>
        {data.map((card) => (
          <li key={card.id} className='ListItem'> 
            <Card
              key={card.id}
              cover={card.cover}
              title={card.title}
              id={card.id}
            />
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Accueil