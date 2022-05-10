import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

// import de mes pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Publish from "./pages/Publish";

//import de mes components
import Header from "./components/Header";

import Cookies from "js-cookie";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token !== null) {
      //Action de connexion
      console.log("Création d'un cookie userTOken");
      Cookies.set("userToken", token, { expires: 1 });
    } else {
      //action de déconnexion
      console.log("Suppression d'un cookie userToken");
      Cookies.remove("userToken");
    }

    setToken(token);
    console.log(`Mise à jour du state Token avec ${token}`);
  };

  return (
    <Router>
      <Header token={token} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/offer/:id" element={<Offer />}></Route>
        <Route path="/signUp" element={<SignUp setUser={setUser} />}></Route>
        <Route path="/login" element={<Login setUser={setUser} />}></Route>
        <Route
          path="/offer/publish"
          element={<Publish token={token} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
