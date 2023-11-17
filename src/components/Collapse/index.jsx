import React, { useState } from 'react';
import "../Collapse/Collapse.css";
import ArrowBack from '../../assets/SVG/ArrowBack';
import ArrowUp from '../../assets/SVG/ArrowUp';

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
  // composant collapse à l'état fermé  
      <div className='CollapseSmall'>
        <h3 className='CollapseTitle'>{props.title}</h3>
        <button className="ArrowButton" onClick={()=> setIsOpen(false)}>
          <ArrowBack/>
        </button>
      </div> 
    ) : ( // composant collapse à l'état ouvert
    <div className='CollapseLarge'>
      <div className='CollapseSmall'>
        <h3 className='CollapseTitle'>{props.title}</h3>
        <button className="ArrowButton" onClick={()=> setIsOpen(true)}>
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