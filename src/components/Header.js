import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="container">
        <header>
          <div className="headerLeft ">
            <Link to="/">
              <img src={Logo} alt="logo-vinted" />
            </Link>
          </div>
          <div className="headerSearchBar">
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="headerRight">
            <div className="sectionConnect">
              <Link to="/signUp">
                <button>S'inscrire</button>
              </Link>
              <Link to="/login">
                <button>Se connecter</button>
              </Link>
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
