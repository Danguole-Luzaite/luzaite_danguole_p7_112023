import React, { useState } from 'react';
import "../Collapse/Collapse.scss";
import ArrowBack from '../../assets/SVG/ArrowBack';
import ArrowUp from '../../assets/SVG/ArrowUp';

function Collapse(props) {
  const [isClose, setIsClose] = useState(true);

  return isClose ? (
  // composant collapse à l'état fermé  
      <div className='CollapseSmall'>
        <h3 className='CollapseTitle'>{props.title}</h3>
        <button className="CollapseArrowButton" onClick={()=> setIsClose(false)}>
          <ArrowBack/>
        </button>
      </div> 
    ) : ( // composant collapse à l'état ouvert
    <div className='CollapseLarge'>
      <div className='CollapseSmall'>
        <h3 className='CollapseTitle'>{props.title}</h3>
        <button className="CollapseArrowButton" onClick={()=> setIsClose(true)}>
          <ArrowUp/>
        </button>
      </div>
        <div className='CollapseText'>
          <p>{props.description}</p>
        </div>
    </div> 
    )
};

export default Collapse;