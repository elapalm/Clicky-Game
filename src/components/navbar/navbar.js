// navbar components

// jumbotron components
import React from "react";
import "./Navbar.css";

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixrd-top">
                <ul>
                    <li className="info">Try and See</li>
                    <li className=""></li>
                    <li className="score">Score: {this.props.score}</li>
                </ul>
            </nav>
        );
    }

export default Navbar;