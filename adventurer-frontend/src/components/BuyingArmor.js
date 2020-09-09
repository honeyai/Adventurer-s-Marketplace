import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ItemsToBuy from './ItemsToBuy';
import "./Styles/buyingWares.css";
import NoWares from "./NoWares";
import {route} from "./proxy/route";

const BuyingArmor = () => {

  const [items, setItems] = useState([]);

  const getArmor = async () => {
    try {
      let response = await Axios.get(`${route}armor/list`);
      setItems(response.data);
    } catch (error) {
      console.error("OOPS!,", error.message);
    }
  }

  useEffect(() => {
    getArmor();
  }, []);

  return (
    <div className="buyingWares__wrapper">
      {items.length !== 0 ? (
        items
          .slice(0)
          .reverse()
          .map((index, key) => {
            return (
              <ItemsToBuy
                key={key}
                name="buyingWares__DisplayCard"
                nameOfItem={index.nameOfItem}
                price={index.price}
                ac={index.ac}
                description={index.description}
              />
            );
          })
      ) : (
        <div className="noWares__BuyingContainer">
          <span>There's nothing here to buy</span>
          {<NoWares />}
        </div>
      )}
    </div>
  );
};

export default BuyingArmor;