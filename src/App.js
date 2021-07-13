import React, { Component } from "react";
//css
import "./App.css";
//components
import Topbar from "./components/TopBar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";
import axios from "axios";
//Mock Data
//import { products } from "./utils/mockData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loader: true,
    };
    console.log("Mount Phase constructor");
  }
  componentDidMount() {
    console.log("Mount Phase componentDidMount");
    axios
      .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => {
        console.log("Response from API", res);
        this.setState({ products: res.data, loader: false });
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Update Phase shouldComponentUpdate");
    if (nextState.products.length > 5) {
      return true;
    } else return false;
  }
  componentDidUpdate() {
    console.log("Update Phase componentDidUpdate");
  }

  render() {
    console.log(" Phase Render");
    return (
      <div>
        <Topbar />
        <Banner />
        {this.state.loader ? (
          <h1>Loading...</h1>
        ) : (
          <div className="d-flex flex-wrap">
            {this.state.products.map((item, index) => (
              <Card {...item} />
            ))}
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
