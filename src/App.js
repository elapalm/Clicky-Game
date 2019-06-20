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
      this.state.clickedImage.indexOf(currentImg) > -1;

    //
    if (AlreadyClicked) {
      this.setState({
        vGames: this.state.vGames.sort(function (a, b) {
          return 1 - Math.random();
        }),
        clickedImage: [],
        score: 0
      })
    }
    alert("You lost. Please play agin");

    //
    () => {
      if (this.state.score === 12) {
        alert("Woohoo! You won!!!");
        this.setState({
          fish: this.state.vGames.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedImage: [],
          score: 0
        });
      }
    }
  )};
};
export default App;
