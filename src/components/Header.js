import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/Offer"> Offer </Link>
      </nav>
      <div className="container">
        <header>
          <div className="headerLeft ">
            <img src={Logo} alt="logo-vinted" />
          </div>
          <div className="headerSearchBar">
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="headerRight">
            <div className="sectionConnect">
              <button>S'inscrire</button>
              <button>Se connecter</button>
            </div>
            <div className="sectionSell">
              <button>Vends tes articles</button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
