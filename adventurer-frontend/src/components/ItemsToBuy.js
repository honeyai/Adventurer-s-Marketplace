import React from "react";
import { Card, CardContent, Button } from "@material-ui/core";

const ItemsToBuy = ({ name, nameOfItem, price, ac, type, description, func }) => {
  return (
    <Card className={name}>
      <CardContent>
        <ul>Product Name: {nameOfItem}</ul>
        <ul>Price: ${price}</ul>
        { ac ? 
          <ul>Item AC: {ac}</ul> :
          <ul>Item Type: {type} </ul>
        }
        <ul>Description: {description}</ul>
      </CardContent>
      <Button onClick={func}> BUY </Button>
    </Card>
  );
};

export default ItemsToBuy;
