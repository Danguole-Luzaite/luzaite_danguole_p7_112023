import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO.png";
import "../Header/Header.scss";


function Header() {
  return (
    <header className="NavContainer">
        <Link to="/">
            <img className="HomeLogo" src={Logo} alt="Le logo du site" />
        </Link>
        <nav className="NavWrapper">
            <Link to="/" className="TextWrapper">Accueil</Link>
            <Link to="/A_Propos" className="APropos">A Propos</Link>
        </nav>
    </header>
  )
};

export default Header;