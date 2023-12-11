import React, { useState } from 'react';
import "../CollapseEquipments/CollapseEquipments.scss";
import ArrowBack from '../../assets/SVG/ArrowBack';
import ArrowUp from '../../assets/SVG/ArrowUp';

function CollapseEquipments({equipments}) {
  const [isOpen, setIsOpen] = useState(true);


  return isOpen ? (
  // composant collapse à l'état fermé  
      <div className='CollapseEquipSmall'>
        <h3 className='CollapseEquipTitle'>Équipements</h3>
        <button className="ArrowButton" onClick={()=> setIsOpen(false)}>
          <ArrowBack/>
        </button>
      </div> 
    ) : ( // composant collapse à l'état ouvert
    <div className='CollapseEquipLarge'>
      <div className='CollapseEquipSmall'>
        <h3 className='CollapseEquipTitle'>Équipements</h3>
        <button className="ArrowButton" onClick={()=> setIsOpen(true)}>
          <ArrowUp/>
        </button>
      </div>
        <div>
          {/* Liste d'équipement */}
          <ul className='CollapseEquipText'>
            {equipments?.map((equipments, index) => (
              <li key={index}>{equipments}</li>
            ))}
          </ul>
         
        </div>
    </div> 
    )
};

export default CollapseEquipments;