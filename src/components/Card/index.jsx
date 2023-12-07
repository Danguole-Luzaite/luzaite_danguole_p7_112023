import React from "react";
import { Link } from 'react-router-dom';
import "../Card/Card.scss";

function Card(props) {
  const title = props.title;

  return (
      // obtenir id des logements avec state
    <Link to={`/Logement/${props.id}`}  className="Thumb" 
      style={{ backgroundImage: `url(${props.cover})` }} 
    >
      <span className="TitreDeLaLocation">
        {title}
      </span>
    </Link>
  )
};

export default Card;