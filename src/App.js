import React, { Component, PureComponent } from "react";
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
      showChild: true,
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

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Update Phase shouldComponentUpdate");
  //   if (nextState.products.length > 5) {
  //     return true;
  //   } else return false;
  // }
  componentDidUpdate() {
    // console.log("Update Phase componentDidUpdate");
  }

  handleChild = () => {
    //this.setState({ showChild: !this.state.showChild })}
  };

  render() {
    console.log("Render", this.state.count);
    return (
      <div>
        <Topbar />
        <Banner />
        {this.state.showChild ? <Child /> : ""}
        <button
          onClick={() => this.setState({ showChild: !this.state.showChild })}
        >
          Child SHOW/HIDE
        </button>
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

class Child extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: { age: 1 },
      ages: "",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: { age: 123 } });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("Component is closing");
    // alert("Component is closing")
  } // Unmounting phase
  render() {
    console.log("Child Render");
    return <h1>Hello Child {this.state.count} </h1>;
  }
}
