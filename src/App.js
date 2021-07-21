import React from "react";
//Routing
// yarn add react-router-dom (or) npm i react-router-dom
import { BrowserRouter, Switch, Route } from "react-router-dom";
//components
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Product from "./components/Product";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <TopBar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/about"
            component={() => (
              <div>
                <About name="Hello" />
                <Contact />
              </div>
            )}
          />

          <Route path="/product/:id" component={Product} />
          <Route path="/signin" component={SignIn} />
          <Route component={() => <h1>404 page not found</h1>} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
