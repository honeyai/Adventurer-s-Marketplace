import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ItemsToBuy from './ItemsToBuy';
import "./Styles/buyingWeapons.css";

const BuyingWeapons = () => {

  const [items, setItems] = useState(null);

  const getWeapons = async () => {
    try {
      let response = await Axios.get("http://localhost:8080/weapons/list");
      setItems(response.data);
    } catch (error) {
      console.error("OOPS!,", error.message);
    }
  }

  useEffect(() => {
    getWeapons();
  }, []);

  return (
    <div className="buyingWeapons__wrapper">
      {
        items ? 
          items.slice(0).reverse().map( (index, key) => {
            return (
              <ItemsToBuy
                key={key}
                name="buyingWeapons__DisplayCard"
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

export default BuyingWeapons;