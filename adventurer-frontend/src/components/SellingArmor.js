import React, { useState } from "react";
import axios from 'axios';
import { Card } from '@material-ui/core';

const SellingArmor = () => {

  const [input, setInput] = useState({ nameOfItem: "", description: "", price: "", ac: ""});

  const handleSubmit = (event) => {
    console.log(
      "this is what the event in handleSubmit is: ",
      event.target.value
    );
  };

  return (
    <div>
      you're at the selling armor page
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={handleChange}></input>
        </label>
      </form>
    </div>
  );
};

export default SellingArmor;
