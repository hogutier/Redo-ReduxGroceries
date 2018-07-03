import React from "react";

const GroceryItem = ({ onClick, bought, text, id }) => (
  <li
    onClick={() => onClick(id)}
    style={{
      textDecoration: bought ? "line-through" : "none"
    }}>
    {text}
  </li>
);

export default GroceryItem;
