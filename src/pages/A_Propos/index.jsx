//import React from "react";
import "../A_Propos/A_Propos.css";
import Collapse from "../../components/Collapse";

function APropos() {
    return (
      <section className="AProposSection">
        <div className="AProposImageBanner"></div>
        <div className="CollapseWrap">
          <Collapse/>
        </div>
      </section>
    )
};


export default APropos;
