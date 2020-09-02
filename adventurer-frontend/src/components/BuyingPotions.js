import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ItemsToBuy from './ItemsToBuy';
import "./Styles/buyingPotions.css";

const BuyingPotions = () => {

  const [items, setItems] = useState([]);

  const getPotions = async () => {
    try {
      let response = await Axios.get("http://localhost:8080/potions/list");
      setItems(response.data);
    } catch (error) {
      console.error("OOPS!,", error.message);
    }
  }

  useEffect(() => {
    getPotions();
  }, []);

  return (
    <div className="buyingPotions__wrapper">
      {
        items !== 0 ? 
          items.slice(0).reverse().map( (index, key) => {
            return (
              <ItemsToBuy
                key={key}
                name="buyingPotions__DisplayCard"
                nameOfItem={index.nameOfItem}
                price={index.price}
                ac={index.ac}
                description={index.description}
              />
            )
          }) : 
          <div> Nothing here to buy </div>
      }
    </div>
  );
};

export default BuyingPotions;