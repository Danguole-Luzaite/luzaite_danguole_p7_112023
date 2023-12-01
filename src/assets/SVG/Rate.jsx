import React from "react";
import { FaStar } from "react-icons/fa";

// const rateActive = "#FF6060";
// const rateInactive = "#E3E3E3";

export default function Rate({rate}) {
   const rateActive = {"height": "26px", "width": "39px"};
   const rateInactive = {"height": "26px", "width": "39px"};

  return (
    <div>
      {[...Array(5)].map((star, index)=> {

        const countRatings = rate < index + 1;
        // console.log(rate, index)
        return (
        <span key={index}>
             <FaStar color={countRatings? "#E3E3E3" : "#FF6060"} style={ countRatings? rateActive : rateInactive } />
        </span>
       )}
      )} 
    </div> 
  )
}