import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/sellingWares.css";
import ItemsToDisplay from "./ItemsToDisplay";
import { Card, Button, TextareaAutosize } from "@material-ui/core";
import NoWares from "./NoWares";

const SellingPotions = () => {
  const [input, setInput] = useState({
    nameOfItem: "",
    description: "",
    price: "",
    ac: "",
  });

  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    const { value, id } = event.target;
    setInput({ ...input, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/potions/sellPotions",
        input
      );
      let secResponse = await axios.get("http://localhost:8080/potions/list");
      console.log(secResponse.data);
      setItems(secResponse.data);
      console.log("this is what the secResponse.data is: ", secResponse.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getWares = async () => {
    try {
      let response = await axios.get("http://localhost:8080/potions/list");
      console.log(response.data);
      setItems(response.data);
    } catch (error) {
      console.error("Error has occurred!", error.message);
    }
  };

  const removeWares = async (id) => {
    try {
      console.log("this is id, ", id);
      console.log("I am clicked");
      let response = await axios.delete(`http://localhost:8080/potions/${id}`);
      let secResponse = await axios.get("http://localhost:8080/potions/list");
      console.log(secResponse.data);
      setItems(secResponse.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getWares();
  }, []);

  return (
    <div className="sellingWares__wrapper">
      <div className="sellingWares__FormContainerPage">
        <Card id="sellingWares__FormCard">
          <form
            className="sellingWares__Form"
            onChange={(event) => handleChange(event)}
            onSubmit={(event) => handleSubmit(event)}
          >
            <label>
              *
              <input
                className="active"
                placeholder="Item Name"
                required
                type="text"
                id="nameOfItem"
              ></input>
            </label>

            <label>
              *
              <input
                placeholder="Armor Class"
                required
                type="text"
                id="ac"
              ></input>
            </label>
            <label>
              *
              <span id="sellingWares__Icon">
                $<input required type="text" id="price"></input>
              </span>
            </label>

            <label>
              <TextareaAutosize
                placeholder="This item is..."
                rowsMin="5"
                className="sellingPotions__textArea"
                type="text"
                id="description"
              ></TextareaAutosize>
            </label>
            <Button id="sellingWares__Submit" type="submit">
              Submit
            </Button>
          </form>
        </Card>
      </div>
      <div className="sellingWares__sellItems">
        {items.length !== 0 ? (
          items
            .slice(0)
            .reverse()
            .map((index, key) => {
              return (
                <ItemsToDisplay
                  key={key}
                  name="sellingWares__itemToSell"
                  nameOfItem={index.nameOfItem}
                  itemID={index.id}
                  ac={index.ac}
                  price={index.price}
                  description={index.description}
                  func={() => removeWares(index.id)}
                />
              );
            })
        ) : (
          <div className="noWares__Container">
            <span>You aren't selling any wares</span> 
            {<NoWares/>}
          </div>
        )}
      </div>
    </div>
  );
};

export default SellingPotions;
