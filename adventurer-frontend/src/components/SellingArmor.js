import React, { useState } from "react";
import axios from "axios";
// import { Card } from "@material-ui/core";

const SellingArmor = () => {
  const [input, setInput] = useState({
    nameOfItem: "",
    description: "",
    price: "",
    ac: "",
  });

  const handleChange = event => {
    const {value, id } = event.target;
    setInput({ ...input, [id]: value});
  }

  const handleSubmit = async event => {
    event.preventDefault();
    try{
      const response = await axios.post('http://localhost:8080/armor', input);

      console.log(
        "this is what the response.data is: ",
        response.data
      );
    } catch (error){
      console.error(error.message);
    }
  };

  return (
    <div>
      you're at the selling armor page
      <form onChange={ event => handleChange(event)} onSubmit={ event => handleSubmit(event)}>
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
    </div>
  );
};

export default SellingArmor;
