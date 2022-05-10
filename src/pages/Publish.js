import "../App.css";
import { useState } from "react";
// import cookies from "js-cookie";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
  //   import pour la gestion des states
  const navigate = useNavigate();
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [descriptionArticle, setDescriptionArticle] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [stateOfProduct, setStateOfProduct] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [exchange, setExchange] = useState(false);

  //   import pour la gestion au nivea du téléchargement de l'image
  // const [data, setData] = useState(null);
  // const [isPictureSending, setIsPictureSending] = useState(false);

  // const token = cookies.get("usertToken");

  const handelSubmit = async (event) => {
    try {
      event.preventDefault();

      //Je viens créer mon formData qui contiendra l'image à transmettre au serveur
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("descriptionArticle", descriptionArticle);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("stateOfProduct", stateOfProduct);
      formData.append("location", location);
      formData.append("price", price);
      formData.append("exchange", exchange);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            autorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data._id) {
        // je redirige  vers la page de l'offre que je viens de créer
        navigate(`/offer/${response.data._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return token ? (
    <div style={{ width: "100vw", backgroundColor: "lightgrey" }}>
      <div className="container">
        <p>Vends ton article</p>
        <form className="form" onSubmit={handelSubmit}>
          {/* partie telechargement image */}
          <div className="UploadPicture">
            <input
              type="file"
              onChange={(event) => {
                setPicture(event.target.files[0]);
              }}
            />
          </div>
          {/* partie description article */}
          <div className="articleDescription">
            <div className="sectionForm">
              <div className="test">Titre</div>
              <div className="test">
                <input
                  type="text"
                  placeholder="ex: Chemise Sézane verte"
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value[0]);
                  }}
                />
              </div>
            </div>

            <div className="sectionForm">
              <div className="test">Décris ton article</div>
              <div className="test">
                <input
                  type="text"
                  placeholder="ex: porté quelquefois, taille correctement"
                  value={descriptionArticle}
                  onChange={(event) => {
                    setDescriptionArticle(event.target.value[0]);
                  }}
                />
              </div>
            </div>
          </div>

          {/* partie informations sur le produit */}
          <div className="productInformations">
            <div className="sectionForm">
              <div className="test">Marque</div>
              <div className="test">
                <input
                  type="text"
                  placeholder="ex: Zara"
                  value={brand}
                  onChange={(event) => {
                    setBrand(event.target.value[0]);
                  }}
                />
              </div>
            </div>
            <div className="sectionForm">
              <div className="test">Taile</div>
              <div className="test">
                <input
                  type="text"
                  placeholder="ex: L / 40 / 12"
                  value={size}
                  onChange={(event) => {
                    setSize(event.target.value[0]);
                  }}
                />
              </div>
            </div>
            <div className="sectionForm">
              <div className="test">Couleur</div>
              <div className="test">
                <input
                  type="text"
                  placeholder="ex: Rouge"
                  value={color}
                  onChange={(event) => {
                    setColor(event.target.value[0]);
                  }}
                />
              </div>
            </div>
            <div className="sectionForm">
              <div className="test">Etat</div>
              <div className="test">
                <input
                  type="text"
                  placeholder="ex: Neuf avec étiquette"
                  value={stateOfProduct}
                  onChange={(event) => {
                    setStateOfProduct(event.target.value[0]);
                  }}
                />
              </div>
            </div>
            <div className="sectionForm">
              <div className="test">Lieu</div>
              <div className="test">
                <input
                  type="text"
                  placeholder="ex: Paris"
                  value={location}
                  onChange={(event) => {
                    setLocation(event.target.value[0]);
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            {/* partie prix */}
            <div className="productionPrice">
              <div className="sectionForm">
                <div className="test">Prix</div>
                <div className="test">
                  <input
                    type="number"
                    placeholder=" 0,00€"
                    value={price}
                    onChange={(event) => {
                      setPrice(event.target.value[0]);
                    }}
                  />
                </div>
              </div>

              <div className="sectionForm">
                <input
                  type="checkBox"
                  onChange={(event) => {
                    setExchange(event.target.value[0]);
                  }}
                />
                <p>Je suis intéressé par les échanges</p>
              </div>
            </div>
          </div>
          <div className="submitSection">
            <div className="submitSection">
              <button type="submit">AJOUTER</button>
            </div>
          </div>
          {/* partie envoie du formulaire */}
        </form>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
