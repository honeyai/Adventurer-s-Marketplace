import React from "react";
import { Card, CardContent, Button } from "@material-ui/core";

const ItemsToBuy = ({ name, nameOfItem, price, ac, description, func }) => {
  return (
    <Card className={name}>
      <CardContent>
        <li>Product Name: {nameOfItem}</li>
        <li>Price: {price}</li>
        <li>AC: {ac}</li>
        <li>Description: {description}</li>
      </CardContent>
      <Button onClick={func}> BUY </Button>
    </Card>
  );
};

export default ItemsToBuy;
