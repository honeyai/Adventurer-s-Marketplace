import React from "react";
import { MDBTypography } from "mdbreact";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import "./Styles/sellersPage.css";
const SellersPage = () => {
  return (
    <div>
      <MDBTypography tag="h1">What are you selling</MDBTypography>
      <div className="sellersPage__cardContainer">
        <Card className="sellersPage__card">
          <CardMedia
            id="cardMedia"
            image={require("./Assets/Images/armor.jpg")}
            title="Armor"
          />
          hshfsh
        </Card>

        <Card className="sellersPage__card">
        <CardMedia
            id="cardMedia"
            image={require("./Assets/Images/weapons.jpg")}
            title="Armor"
          />
        </Card>

        <Card className="sellersPage__card">
        <CardMedia
            id="cardMedia"
            image={require("./Assets/Images/potions.jpg")}
            title="Armor"
          />
        </Card>
      </div>
    </div>
  );
};

export default SellersPage;
