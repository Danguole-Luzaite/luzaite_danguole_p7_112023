import React from "react";
import Logo from "../../assets/LOGO_white.png";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="FooterWrapper">
        <img className="LogoWhite" src={Logo} alt="Logo" />
        <p className="FooterTextWrap">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
};

export default Footer;