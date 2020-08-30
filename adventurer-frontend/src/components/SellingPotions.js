import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/sellingPotions.css";
import ItemsToDisplay from "./ItemsToDisplay";
import { Card, Button, TextareaAutosize } from "@material-ui/core";
// import { Card } from "@material-ui/core";

const SellingPotions = () => {
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
    <div className="sellingPotions__wrapper">
      <div className="sellingPotions__FormContainerPage">
        <Card className="sellingPotions__FormCard">
          <form
            className="sellingPotions__Form"
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
            <label className="sellingPotions__textAreaLabel">
              Description:
              <TextareaAutosize
                rowsMin="4"
                className="sellingPotions__textArea"
                type="text"
                id="description"
              ></TextareaAutosize>
            </label>

            <Button id="sellingPotions__Submit" type="submit">Submit</Button>
          </form>
        </Card>
      </div>
      <div className="sellingPotions__sellItems">
        {items ? (
          items
            .slice(0)
            .reverse()
            .map((index, key) => {
              return (
                <ItemsToDisplay
                  key={key}
                  name="sellingPotions__itemToSell"
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
          <div> You aren't selling any wares yet! </div>
        )}
      </div>
    </div>
  );
};

export default SellingPotions;
