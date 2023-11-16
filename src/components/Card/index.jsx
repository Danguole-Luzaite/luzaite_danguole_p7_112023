import React from "react";
import { useNavigate } from 'react-router-dom';
import "../Card/Card.css";
// onClick={()=>navigate("/Logement")}

function Card(props) {
  const title = props.title;
  const navigate = useNavigate();

//  style={{ backgroundImage: `url(${props.cover})` }}   
  return (
    <div className="Thumb" 
      style={{ backgroundImage: `url(${props.cover})` }} 
      onClick={()=>navigate("/Logement")} >
      <span className="TitreDeLaLocation">
        {title}
      </span>
    </div>
  )
};

export default Card;