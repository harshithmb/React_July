import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: "", price: "" });
  const url = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/";
  //   console.log("Product", props.match, props.match.params.id);

  useEffect(() => {
    axios(url + id).then((res) => setProduct(res.data));
  }, []);

  const { name, price } = product;
  return (
    <div>
      <h1>Product {id}</h1>
      <h2>{name}</h2>
      <h3>{price}</h3>
    </div>
  );
};

export default Product;
