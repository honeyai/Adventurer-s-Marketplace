import React from "react";
import { Card, CardContent, Button } from "@material-ui/core";

const ItemsToDisplay = ({ name, nameOfItem, price, description, ac, itemID, func }) => {
  return (
    <Card className={name}>
      <CardContent>
        <ul>Item Name: {nameOfItem}</ul>
        <ul>Item AC: {ac}</ul>
        <ul>Item Price: {price}</ul>
        <ul>Description: {description}</ul>
      </CardContent>
      <Button onClick={func}> Delete from list </Button>
    </Card>
  );
};

export default ItemsToDisplay;
