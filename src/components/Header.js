import Logo from "../assets/img/logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <header>
          <div className="headerLeft ">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={Logo} alt="logo-vinted" />
            </Link>
          </div>
          <div className="headerSearchBar">
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="headerRight">
            {token === null ? (
              <div className="sectionConnect">
                <Link
                  to="/signUp"
                  className="sectionConnect"
                  style={{ textDecoration: "none" }}
                >
                  <button>S'inscrire</button>
                </Link>
                <Link
                  to="/login"
                  className="sectionConnect"
                  style={{ textDecoration: "none" }}
                >
                  <button>Se connecter</button>
                </Link>
                <div className="sectionSell">
                  <Link
                    to="/login"
                    className="sectionConnect"
                    style={{ textDecoration: "none" }}
                  >
                    <button>Vends tes articles</button>
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <button
                  className="disconnectButton"
                  onClick={() => {
                    setUser(null);
                    navigate("/");
                  }}
                >
                  Se déconnecter
                </button>
                <div className="sectionSell">
                  <Link
                    to="/offer/publish"
                    className="sectionConnect"
                    style={{ textDecoration: "none" }}
                  >
                    <button>Vends tes articles</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
