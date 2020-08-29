import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/sellingArmor.css";
import ItemsToDisplay from "./ItemsToDisplay";
import { Card } from "@material-ui/core";
// import { Card } from "@material-ui/core";

const SellingArmor = () => {
  const [input, setInput] = useState({
    nameOfItem: "",
    description: "",
    price: "",
    ac: "",
  });

  const [items, setItems] = useState(null);

  const handleChange = (event) => {
    const { value, id } = event.target;
    setInput({ ...input, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/armor/sellArmor",
        input
      );

      console.log("this is what the response.data is: ", response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getWares = async () => {
    try {
      let response = await axios.get("http://localhost:8080/armor/list");
      console.log(response.data);
      setItems(response.data);
    } catch (error) {
      console.error("Error has occurred!", error.message);
    }
  };

  useEffect(() => {
    getWares();
  }, []);

  return (
    <div className="sellingArmor__wrapper">
      <div className="sellingArmor__FormContainerPage">
        <Card>
          <form
            className="sellingArmor__Form"
            onChange={(event) => handleChange(event)}
            onSubmit={(event) => handleSubmit(event)}
          >
            <label>
              Item Name:
              <input type="text" id="nameOfItem"></input>
            </label>
            <label>
              Item AC:
              <input type="text" id="ac"></input>
            </label>
            <label>
              Item Price:
              <input type="text" id="price"></input>
            </label>
            <label>
              Description:
              <input type="text" id="description"></input>
            </label>

            <input type="submit" />
          </form>
        </Card>
      </div>
      <div className="sellingArmor__sellItems">
        {items
          ? console.log("this is what items price is, ", items[0].price)
          : null}
        {items ? (
          items.map((index, key) => {
            console.log(index);
            return (
              <ItemsToDisplay
                key={key}
                name="sellingArmor__itemToSell"
                nameOfItem={index.nameOfItem}
                ac={index.ac}
                price={index.price}
                description={index.description}
              />
            );
          })
        ) : (
          <div> You aren't selling any wares yet! </div>
        )}
      </div>
    </div>
  );
};

export default SellingArmor;
