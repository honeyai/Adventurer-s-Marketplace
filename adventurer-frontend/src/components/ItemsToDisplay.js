import React from 'react';
import { Card } from '@material-ui/core';


const ItemsToDisplay = ({name, nameOfItem, price, description, ac}) => {
  return (
    <Card className={name}>
      Item Name: {nameOfItem}
      Item AC: {ac}
      Item Price: {price}
      Description: {description}
    </Card>
  );
};

export default ItemsToDisplay;