import { NavLink } from "react-router-dom";
import Logo from "../../assets/LOGO.png";
import "../Header/Header.scss";


function Header() {
  return (
    <header className="NavContainer">
        <NavLink to="/">
            <img className="HomeLogo"  src={Logo} alt="Le logo du site" />
        </NavLink>
        <nav className="NavWrapper">
            <NavLink to="/" className="LinkAccueil">Accueil</NavLink>
            <NavLink to="/A_Propos" className="LinkAPropos">A Propos</NavLink>
        </nav>
    </header>
  )
};

export default Header;