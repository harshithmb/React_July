import React, { useState, useEffect } from "react";
import Banner from "../Banner";
import Card from "../Card";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cardStyle, setCardStyle] = useState(null);

  useEffect(() => {
    axios
      .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => {
        console.log("Response from API", res);
        setProducts(res.data);
      });
  }, []);
  return (
    <div>
      <Banner />
      <div className="d-flex flex-wrap">
        {products.length &&
          products.map((item, index) => (
            <div key={index}>
              <Card
                {...item}
                cardStyleId={cardStyle}
                handleCardStyle={(id) => setCardStyle(id)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
