import React, { Component, PureComponent, useState } from "react";
//css
import "./App.css";
//components
import Topbar from "./components/TopBar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Cards from "./components/Cards";
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
    // console.log("Update Phase componentDidUpdate API after update in jsx");
  }

  handleChild = () => {
    //this.setState({ showChild: !this.state.showChild })}
  };

  render() {
    console.log("Render", this.state.count);
    return (
      <div>
        <Topbar />
        <Banner name="banner" />
        <button
          onClick={() => this.setState({ showChild: !this.state.showChild })}
        >
          Cards SHOW/HIDE
        </button>
        {this.state.showChild ? (
          <Cards updateCount={(count) => console.log("COunt", count)} />
        ) : (
          ""
        )}
        {/* <button
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
        )} */}
        <Footer />
      </div>
    );
  }
}

export default App;

const Child = () => {
  const [user, setUser] = useState("Initial");

  return (
    <div>
      <h1>Child - {user}</h1>
      <button onClick={() => setUser("Prashant")}>Click Me</button>
    </div>
  );
};

// class Child extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 1,
//       ages: "",
//       products: []
//     };
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({ count: 123 });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log("Component is closing");
//     // alert("Component is closing")
//   } // Unmounting phase
//   render() {
//     console.log("Child Render");
//     return <h1>Hello Child {this.state.count} </h1>;
//   }
// }
