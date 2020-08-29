import React from 'react';
import { Card, CardContent, Button } from '@material-ui/core';


const ItemsToDisplay = ({key, name, nameOfItem, price, description, ac}) => {
  return (
    <Card key={key} className={name}>
      <CardContent className={name}>
        <ul>Item Name: {nameOfItem}</ul>
        <ul>Item AC: {ac}</ul>
        <ul>Item Price: {price}</ul>
        <ul>Item Price: {price}</ul>
        <ul>Description: {description}</ul>
      </CardContent>
      <Button> Delete from list </Button>
    </Card>
  );
};

export default ItemsToDisplay;