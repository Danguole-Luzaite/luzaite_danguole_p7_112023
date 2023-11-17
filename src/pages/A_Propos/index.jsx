//import React from "react";
import "../A_Propos/A_Propos.css";
import Collapse from "../../components/Collapse";
import descriptionData from '../../data/a_propos.json';

function APropos() {
    return (
      <section className="AProposSection">
        <div className="AProposImageBanner"></div>
        <div className="CollapseWrap">
          {descriptionData.map((collapse) => (
            <Collapse
            key={collapse.id}
            title={collapse.title}
            description={collapse.description}
            />
          ))}
        </div>
      </section>
    )
};

export default APropos;
