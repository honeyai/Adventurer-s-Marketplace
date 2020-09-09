import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/sellingWares.css";
import ItemsToDisplay from "./ItemsToDisplay";
import { Card, Button, TextareaAutosize } from "@material-ui/core";
import NoWares from "./NoWares";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SellingPotions = () => {
  const classes = useStyles();

  const [input, setInput] = useState({
    nameOfItem: "",
    description: "",
    price: "",
    type: "",
  });

  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    const { value, id } = event.target;
    setInput({ ...input, [id]: value });
  };

  const handleChangeForType = (event) => {
    setInput({ ...input, type: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/potions/sellPotions", input);
      let secResponse = await axios.get("/potions/list");
      console.log(secResponse.data);
      setItems(secResponse.data);
      console.log("this is what the secResponse.data is: ", secResponse.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getWares = async () => {
    try {
      let response = await axios.get("/potions/list");
      console.log(response.data);
      setItems(response.data);
    } catch (error) {
      console.error("Error has occurred!", error.message);
    }
  };

  const removeWares = async (id) => {
    try {
      await axios.delete(`/potions/${id}`);
      let secResponse = await axios.get("/potions/list");
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
              {/* <input placeholder="Type" required type="text" id="ac"></input> */}
              <FormControl className={classes.formControl}>
                <InputLabel id="sellingWares__label">Type</InputLabel>
                <Select
                  labelId="sellingWares__label"
                  id="sellingWares__select"
                  value={input.type}
                  onChange={handleChangeForType}
                >
                  <MenuItem value="Healing">Healing</MenuItem>
                  <MenuItem value="Buff">Buff</MenuItem>
                  <MenuItem value="Debuff">Debuff</MenuItem>
                </Select>
              </FormControl>
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
                  type={index.type}
                  price={index.price}
                  description={index.description}
                  func={() => removeWares(index.id)}
                />
              );
            })
        ) : (
          <div className="noWares__Container">
            <span>You aren't selling any wares</span>
            {<NoWares />}
          </div>
        )}
      </div>
    </div>
  );
};

export default SellingPotions;
