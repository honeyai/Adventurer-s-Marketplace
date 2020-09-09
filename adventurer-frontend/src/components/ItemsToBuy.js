import React from "react";
import { Card, CardContent, Button } from "@material-ui/core";

const ItemsToBuy = ({ name, nameOfItem, price, ac, type, description, func }) => {
  return (
    <Card id={name}>
      <CardContent>
        <ul>Product Name: {nameOfItem}</ul>
        <ul>Price: ${price}</ul>
        { ac ? 
          <ul>Item AC: {ac}</ul> :
          <ul>Item Type: {type} </ul>
        }
        <ul>Description: {description}</ul>
      </CardContent>
      <Button id={name + "__Button"} onClick={func}> BUY </Button>
    </Card>
  );
};

export default ItemsToBuy;
