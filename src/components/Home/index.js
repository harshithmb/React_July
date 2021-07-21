import React, { useState, useEffect } from "react";
import Banner from "../Banner";
import Card from "../Card";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

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
        {products.length && products.map((item) => <Card {...item} />)}
      </div>
    </div>
  );
};

export default Home;
