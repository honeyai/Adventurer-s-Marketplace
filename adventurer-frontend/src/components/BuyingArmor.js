import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ItemsToBuy from './ItemsToBuy';
import "./Styles/buyingArmor.css";

const BuyingArmor = () => {

  const [items, setItems] = useState([]);

  const getArmor = async () => {
    try {
      let response = await Axios.get("http://localhost:8080/armor/list");
      setItems(response.data);
    } catch (error) {
      console.error("OOPS!,", error.message);
    }
  }

  useEffect(() => {
    getArmor();
  }, []);

  return (
    <div className="buyingArmor__wrapper">
      {
        items !== 0 ? 
          items.slice(0).reverse().map( (index, key) => {
            return (
              <ItemsToBuy
                key={key}
                name="buyingArmor__DisplayCard"
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

export default BuyingArmor;