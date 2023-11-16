import React from 'react';
//import { useNavigate } from 'react-router-dom';
import "../Accueil/Accueil.css";
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import data from "../../data/logements.json";

/* 
function showDataTest() {
  return console.log(data);
}
showDataTest()
*/

function Accueil() {
//const navigate = useNavigate(); 

  return (
    <div className='HomeSection'>
      <Banner/>
      <div className='Gallery'>
        {data.map((card) => (
          <Card
            key={card.id}
            cover={card.cover}
            title={card.title}
//            onClick={ ()=> }
          />
        ))}
      </div>
    </div>
  )
};

export default Accueil