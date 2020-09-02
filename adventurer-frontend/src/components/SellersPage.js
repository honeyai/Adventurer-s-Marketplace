import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import "./Styles/sellersPage.css";
import { CardContent, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const SellersPage = () => {
  return (
    <div className="sellersPage__wrapper">
      <Typography id="sellersPage__Text" variant="h3">
        What are you selling
      </Typography>
      <div className="sellersPage__cardContainer">
        <Link to="/sellArmor">
          <Button id="sellersPage__button">
            <Card id="sellersPage__card">
              <CardMedia
                id="cardMedia"
                image={require("./Assets/Images/armor.jpg")}
                title="Armor"
              />
              <CardContent>
                <Typography
                  id="sellersPage__Option"
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  Armor
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Link>
        <Link to="/sellWeapons">
          <Button id="sellersPage__button">
            <Card id="sellersPage__card">
              <CardMedia
                id="cardMedia"
                image={require("./Assets/Images/weapons.jpg")}
                title="Weapons"
              />
              <CardContent>
                <Typography
                  id="sellersPage__Option"
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  Weapons
                </Typography>
              </CardContent>
            </Card>
          </Button>
        </Link>
        <Link to="/sellPotions">
          <Button id="sellersPage__button">
            <Card id="sellersPage__card">
              <CardMedia
                id="cardMedia"
                image={require("./Assets/Images/potions.jpg")}
                title="Potions"
              />
              <CardContent>
                <Typography
                  id="sellersPage__Option"
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
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

export default SellersPage;
