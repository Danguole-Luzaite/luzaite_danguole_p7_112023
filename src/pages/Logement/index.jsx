import React from "react";
import "../Logement/Logement.css";
import Tag from "../../components/Tag";

function Logement() {
  return (
    <section className="SectionLogement">
      <div className="Carrousel">
        {/* insert component Carrousel */}
      </div>
      <div className="TagWrap">
        <Tag />
      </div>
    </section>
  )
};

export default Logement;