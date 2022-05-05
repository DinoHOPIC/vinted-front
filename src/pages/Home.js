// import bannerImg from "../assets/img/banner-vinted.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
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
    data.offers.map((offer) => {
      return (
        <div className="offers">
          <div>{offer.product_name}</div>
        </div>
      );
    })
  );

  // <div>
  //   <div className="banner">
  //     <img src={bannerImg} alt="" />
  //   </div>
  // </div>
}
