import React from "react";
import { Typography, Button } from "@material-ui/core";
import "./Styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="home__Hero"
        style={{
          backgroundImage: `linear-gradient(rgba(4, 0, 10, 0.5),rgba(0, 10, 0, 0.5)), url(${require("./Assets/Images/hero.jpg")})`,
        }}
      >
        <div id="home__insideHero">
          <Typography gutterBottom variant="h1">
            Welcome Adventurer <br /> to the Marketplace
          </Typography>
          <div id="home__insideSecond">
            <Typography gutterBottom variant="h3"> are you </Typography>
            <div className="home__ButtonContainer">
              <Link to="/sell">
                <Button id="home__insideHeroButton"> selling </Button>
              </Link>
              <Typography gutterBottom variant="h3"> or </Typography>
              <Link to="/buy">
                <Button id="home__insideHeroButton"> buying </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
