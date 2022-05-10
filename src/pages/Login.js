import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  //il faut retenir les informations qu'on va renter. Il faut créer une fonction pour
  const handleLogin = async (event) => {
    try {
      event.preventDefault();

      //   on va reset le message d'errer a chaque tentative
      setErrorMessage("");

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",

        {
          email: email,
          password: password,
        }
      );

      if (response.data) {
        console.log("J'ai bien réussi à créer un compte");
        setUser(response.data.token);
        //Rediriger l'utilisateur vers la page principale
        navigate("/");
      }
    } catch (error) {
      //   console.log(error.message);
      console.log(error.response.status);
      if (error.response.status === 409) {
        setErrorMessage("Le mail ou le mot de passe est invalide!");
      }
    }
  };

  //   on va aller recuperer les infos qu'on a transmis dans notre formulaire d'inscription

  return (
    <div className="signUpPage container">
      <div className="">
        <div>
          <h1>Se connecter</h1>
        </div>
        <form onSubmit={handleLogin}>
          <div className="divButton">
            <input
              value={email}
              className="inputButton"
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="divButton">
            <input
              value={password}
              className="inputButton"
              type="password"
              placeholder="Mot de passe"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                backgroundColor: "#2cb1ba",
                border: "none",
                color: "white",
                width: "90%",
                height: "50px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
              type="submit"
            >
              Se connecter
            </button>
          </div>
        </form>

        <div>
          <Link to="/signUp" style={{ textDecoration: "none" }}>
            <p
              style={{
                color: "#2cb1ba",
                textAlign: "center",
              }}
            >
              Pas encore de compte ? Inscris-toi !
            </p>
          </Link>
        </div>
        <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
      </div>
    </div>
  );
};

export default Login;
