import React from "react"; // imr
//css
import "./App.css";
//Components
import Top from "./components/Topbar"; // Default
import Card from "./components/Card";
import Footer from "./components/Footer";
//Utils
import { names, user as username } from "./utils/mockData";
import { toLower, toUpper } from "./utils";

function App() {
  // sfc
  return (
    <div>
      <Top username={toUpper(username)} />
      <div className="cards">
        {names.map((item, index) => (
          <Card {...item} index={index} />
        ))}
      </div>
      <Child second="Second name" />
      <Footer />
    </div>
  );
}

export default App;

function Child({ first = "First Default", second }) {
  // let first = props.first;
  // let second = props.second;
  return (
    <div>
      <h1>Hello {first}</h1>
      <h2>{second}</h2>
    </div>
  );
}
