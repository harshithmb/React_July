import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card";

const Cards = (props) => {
  const [products, setProducts] = useState([]);
  const [orgProducts, setOrgProducts] = useState([]);

  const [loader, setLoader] = useState(true);
  const [cart, setCart] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // axios
    //   .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
    //   .then((res) => {
    //     console.log("Response from API", res);
    //     setProducts(res.data);
    //     setLoader(false);
    //   });
    console.log("componentDidMount Funct");
  }, []); // componentDidMount

  useEffect(() => {
    console.log("componentDidMount and componentDidUpdate Funct");
  }); // componentDidMount and componentDidUpdate

  useEffect(() => {
    return () => {
      console.log("cleanup");
    };
  }, []); // componentWillUnmount

  const getProducts = async () => {
    const response = await axios
      .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => {
        console.log("Response from API", res);
        // setProducts(res.data);
        // setLoader(false);
        return res.data;
      });
    console.log("Got Response", response);
    setProducts(response);
    setOrgProducts(response);
    setLoader(false);
  };

  const onSearch = () => {
    //searchValue
    const updatedValues = orgProducts.filter(({ name }) =>
      name.toLowerCase().includes(searchValue)
    );
    setProducts(updatedValues);
  };

  const handleProduct = (product) => {
    const updateCart = [...cart, product];
    setCart(updateCart);
  };
  return (
    <div>
      <h1>Cards - {cart.length} </h1>
      <button onClick={getProducts}>Products From API</button>

      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
      <div className="d-flex flex-wrap">
        {loader ? (
          <h1>Loading...</h1>
        ) : (
          products.map((item) => <Card {...item} addProduct={handleProduct} />)
        )}
      </div>
    </div>
  );
};

export default Cards;
