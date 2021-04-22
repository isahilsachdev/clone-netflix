import './App.css';
import React from "react"
import Row from "./Components/Row"
import requests from "./Components/requests"
import {Banner} from "./Components/Banner";
import Nav from "./Components/Nav";
import { Footer } from "./Components/Footer";
import { Home } from './Home';
import LandingPage from './LandingPage';
import Routes from './Routes';


function App() {
  return (
    <div className="App">
      <Routes />
      {/* <LandingPage /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
