import React, { useState } from 'react';
import "../CollapseDescription/CollapseDescription.css";
import ArrowBack from '../../assets/SVG/ArrowBack';
import ArrowUp from '../../assets/SVG/ArrowUp';


function CollapseDescription({description}) {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
  // composant collapse à l'état fermé  
      <div className='CollapseDescSmall'>
        <h3 className='CollapseDescTitle'>Description</h3>
        <button className="ArrowButton" onClick={()=> setIsOpen(false)}>
          <ArrowBack/>
        </button>
      </div> 
    ) : ( // composant collapse à l'état ouvert
    <div className='CollapseDescLarge'>
      <div className='CollapseDescSmall'>
        <h3 className='CollapseDescTitle'>Description</h3>
        <button className="ArrowButton" onClick={()=> setIsOpen(true)}>
          <ArrowUp/>
        </button>
      </div>
        <div className='CollapseDescText'>
          {/* <p>{description}</p> */}
          <p>{description}</p>
        </div>
    </div> 
    )
};

export default CollapseDescription;