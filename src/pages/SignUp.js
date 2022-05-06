import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState("false");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  //il faut retenir les informations qu'on va renter. Il faut créer une fonction pour
  const handleSignUp = async (event) => {
    try {
      event.preventDefault();

      //   on va reset le message d'errer a chaque tentative
      setErrorMessage("");

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",

        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
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
        setErrorMessage("Cet email a déjà un compte !");
      }
    }
  };

  //   on va aller recuperer les infos qu'on a transmis dans notre formulaire d'inscription

  return (
    <div className="signUpPage container">
      <div className="">
        <div>
          <h1>S'inscire</h1>
        </div>
        <form onSubmit={handleSignUp}>
          <div className="divButton">
            <input
              value={username}
              className="inputButton"
              type="text"
              placeholder="Nom d'utilisateur"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
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
          <div className="newletterCheck">
            <div>
              <input
                value={newsletter}
                type="checkbox"
                onChange={(event) => setNewsletter(event.target.value)}
              />
              <span>S'incrire à notre newsletter</span>
              <p className="textNewsletter">
                En m'inscrivant je confirme avoir lu et accepté les Termes et
                Conditions et Politique de Confidentialité de Vinted. Je
                confirme avoir au moins 18 ans.
              </p>
            </div>
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
              }}
              type="submit"
            >
              S'incrire
            </button>
          </div>
        </form>

        <div>
          <Link to="/Login">
            <p
              style={{
                color: "#2cb1ba",
                textAlign: "center",
                // textDecoration: "none",
              }}
            >
              Tu as déja un compte ? Connecte-toi !
            </p>
          </Link>
        </div>
        <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
      </div>
    </div>
  );
};

export default SignUp;
