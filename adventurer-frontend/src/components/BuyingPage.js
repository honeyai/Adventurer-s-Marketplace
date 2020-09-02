import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import "./Styles/buyingPage.css";
import { CardContent, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const BuyingPage = () => {
  return (
    <div className="buyingPage__wrapper">
      <Typography variant="h3" id="buyingPage__text">
        What are you buying
      </Typography>
      <div className="buyingPage__cardContainer">
        <Link to="/buyArmor">
          <Button id="buyingPage__button">
            <Card id="buyingPage__card">
              <CardMedia
                id="cardMedia"
                image={require("./Assets/Images/armor.jpg")}
                title="Armor"
              />
              <CardContent>
                <Typography id="sellersPage__Option" gutterBottom variant="h5" component="h2">
                  Armor
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Link>
        <Link to="/buyWeapons">
          <Button id="buyingPage__button">
            <Card id="buyingPage__card">
              <CardMedia
                id="cardMedia"
                image={require("./Assets/Images/weapons.jpg")}
                title="Weapons"
              />
              <CardContent>
                <Typography id="sellersPage__Option" gutterBottom variant="h5" component="h2">
                  Weapons
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Link>
        <Link to="/buyPotions">
          <Button id="buyingPage__button">
            <Card id="buyingPage__card">
              <CardMedia
                id="cardMedia"
                image={require("./Assets/Images/potions.jpg")}
                title="Potions"
              />
              <CardContent>
                <Typography id="sellersPage__Option" gutterBottom variant="h5" component="h2">
                  Potions
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BuyingPage;
