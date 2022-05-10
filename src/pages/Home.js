// import bannerImg from "../assets/img/banner-vinted.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement ...</span>
  ) : (
    <div>
      <div className="bannerAdapt container">
        <div className="startToSellBanner  ">
          <div>Prêts à faire du tri dans vos placard</div>
          <button>Commencer à vendre</button>
        </div>
      </div>

      <div className="offers container">
        {data.offers.map((offer, indexOffer) => {
          return (
            <div key={indexOffer} className="articles">
              {/* <>
                {offer.owner.account.avatar.secure_url && (
                  <img
                    key={indexOffer}
                    src={offer.owner.account.avatar.secure_url}
                    alt=""
                  ></img>
                )}
              </> */}
              <div>{offer.owner.account.username}</div>
              <Link to={`/offer/${offer._id}`} key={offer._id}>
                <div>
                  <img src={offer.product_image.secure_url} alt="" />
                </div>
              </Link>
              <div>{offer.product_price} €</div>
              <div>
                {offer.product_details.map((details, indexDetails) => {
                  return (
                    <div key={indexDetails}>
                      <div>{details.TAILLE}</div>
                      <div>{details.MARQUE}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
