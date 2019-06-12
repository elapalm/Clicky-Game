import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Videogames from "./vgames.json";
import "./App.js";

//sets state to 0 or empty
class App extends Component {
    state = {
      vGames,
      clickedImage: [],
      score: 0
    };

    //
  imageClick = event => {
    const currentImg = event.target.alt;
    const AlreadyClicked =
      this.state.clickedIMage.indexOf(currentImg) > -1;


export default App;
