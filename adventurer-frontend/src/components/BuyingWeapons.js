import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ItemsToBuy from './ItemsToBuy';
import "./Styles/buyingWeapons.css";
import NoWares from './NoWares';

const BuyingWeapons = () => {

  const [items, setItems] = useState([]);

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
        items !== 0 ? 
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
          // <div className="noWares__Container">
            // <span>Nothing here to buy</span> 
            <NoWares/>
          // </div>
      }
    </div>
  );
};

export default BuyingWeapons;