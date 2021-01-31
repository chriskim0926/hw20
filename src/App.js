import React from 'react';
import './App.css';
import Wrapper from "./components/wrapper"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { HashRouter as Router, Route, Switch } from "react-router-dom" 
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Nav from "./components/navbar"
import About from "./pages/about"
import Portfolio from "./pages/porforlio"
import Contact from "./pages/contact"

function App() {
  return (
    <Router>
    <Nav />
    <Wrapper>
      <Switch>
        <Route exact path={["/", "/about", "*"]} component={About} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
        </Switch>
    </Wrapper>
  </Router>
  );
}

export default App;