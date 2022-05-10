import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>{data.product_name}</h2>
      <img src={data.product_image.secure_url} alt="" />

      <div>{data.product_price} €</div>

      <div>
        {data.product_details.map((item, index) => {
          const keys = Object.keys(item);

          return (
            <div key={index}>
              {keys[0]} : {item[keys[0]]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
