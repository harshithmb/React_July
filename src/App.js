import React from "react";
//css
import "./App.css";
//components
import Topbar from "./components/TopBar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";
//Mock Data
import { products } from "./utils/mockData";

const App = () => {
  return (
    <div>
      <Topbar />
      <Banner />
      <div className="d-flex flex-wrap">
        {products.map((item, index) => (
          <Card {...item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
