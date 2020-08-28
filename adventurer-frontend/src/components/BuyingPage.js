import React from "react";
import { MDBTypography } from "mdbreact";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import "./Styles/buyingPage.css";
import { CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
const BuyingPage = () => {
  return (
    <div>
      <MDBTypography tag="h1">What are you buying</MDBTypography>
      <div className="buyingPage__cardContainer">
        <Link to="/buying/armor">
          <Card className="buyingPage__card">
            <CardMedia
              id="cardMedia"
              image={require("./Assets/Images/armor.jpg")}
              title="Armor"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Armor
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link to="/buying/weapons">
          <Card className="buyingPage__card">
            <CardMedia
              id="cardMedia"
              image={require("./Assets/Images/weapons.jpg")}
              title="Weapons"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Weapons
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link to="/buying/potions">
          <Card className="buyingPage__card">
            <CardMedia
              id="cardMedia"
              image={require("./Assets/Images/potions.jpg")}
              title="Potions"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Potions
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default BuyingPage;
