import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CatDisplay from "./pages/CatDisplay";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React - This is an update on the testing split branch.
      </a>
    </header>
  );
}


function App() {
  return (
    <Router className="App">
      <nav className="navbar navbar-expand-md navbar-light bg-light px-4">
        <Link className="navbar-brand" to="/">
          A Sample Website
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cats">
              Cats
            </Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <Route path="/" exact component={Home}></Route>
        <Route path="/cats" component={CatDisplay}></Route>
      </div>
    </Router>
  );
}

export default App;
