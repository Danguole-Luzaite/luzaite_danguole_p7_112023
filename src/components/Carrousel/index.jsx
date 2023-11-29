import React, {useState} from "react";
import "../Carrousel/Carrousel.css";
import ArrowLeft from "../../assets/SVG/ArrowLeft";
import ArrowRight from "../../assets/SVG/ArrowRight";


function Carrousel({slides}) {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  // const slides = currentLogement.picture;


  const previousSlide = () => {
    // pour vérifier si c'est la première image affichée
    const isFirstPicture = CurrentIndex === 0;
    // si c'est la première, revenez d'une slide à la dernière image,
    // sinon, revenez simplement d'une slide à partir de l'image actuelle.
    const newIndex = isFirstPicture? slides?.length -1 : CurrentIndex -1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    // pour vérifier si c'est la dernière image affichée
    const isLastPicture = CurrentIndex === slides?.length -1;
    const newIndex = isLastPicture? 0 : CurrentIndex +1;
    setCurrentIndex(newIndex);
  };
 
  return (
    <div className="CarrouselContainer">
      <button className="ArrowLeft" onClick={previousSlide}>
         <ArrowLeft />
      </button>
      <button className="ArrowRight" onClick={nextSlide}>
         <ArrowRight />
      </button>
      {/* Pour afficher l’index de image actuelle / le nombre d’images au total */}
      <div className="SlidesNumber">{CurrentIndex + 1}/{slides?.length}</div>
      {/* Les photos de l'appartement ( slides = {currentLogement.pictures} ) */}
      <img className="CarrouselSlides" src={slides?.[CurrentIndex]} alt="logement" />
    </div>
  )
};

export default Carrousel