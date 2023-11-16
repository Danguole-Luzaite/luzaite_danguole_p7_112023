import React, { useState } from 'react';
import "../Collapse/Collapse.css";
import ArrowBack from '../../assets/SVG/ArrowBack';
import ArrowUp from '../../assets/SVG/ArrowUp';

function Collapse() {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
  // composant collapse à l'état fermé  
      <div className='CollapseSmall'>
        <h3 className='CollapseTitle'>Respect</h3>
        <button className="ArrowButton" onClick={()=> setIsOpen(false)}>
          <ArrowBack/>
        </button>
      </div> 
    ) : ( // composant collapse à l'état ouvert
    <div className='CollapseLarge'>
      <div className='CollapseSmall'>
        <h3 className='CollapseTitle'>Respect</h3>
        <button className="ArrowButton" onClick={()=> setIsOpen(true)}>
          <ArrowUp/>
        </button>
      </div>
        <div className='CollapseText'>
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire 
            ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </p>
        </div>
    </div> 
    )
};

export default Collapse;