import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// import de mes pages
import Home from "./pages/Home";
// import Offer from "./pages/Offer";
// import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

//import de mes components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/Offer/:productId" element={<Offer />}></Route> */}
        <Route path="/signUp" element={<SignUp />}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
