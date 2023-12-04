import React from "react";
import { FaStar } from "react-icons/fa";

// note positive : "#FF6060";
// note négative : "#E3E3E3";

export default function Rate({rate}) {
  return (
    <div>
      {[...Array(5)].map((star, index)=> {

        const countRatings = rate < index + 1;
        // console.log(rate, index)
        return (
        <span key={index}>
             <FaStar  className="StarRate" color={countRatings? "#E3E3E3" : "#FF6060"}  />
        </span>
       )}
      )} 
    </div> 
  )
}