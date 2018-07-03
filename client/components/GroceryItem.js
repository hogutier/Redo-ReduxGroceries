import React from "react";

const GroceryItem = ({ onClick, setQuantity, bought, text, id }) => (
 <div>
    <div style={{float: "left", width: "100%"}}>
    <li
      onClick={() => onClick(id)}
      style={{
        textDecoration: bought ? "line-through" : "none"
      }}>
      {text}
    </li>
  </div>

  <div style={{right: "left"}}>
     <select onChange={(evt) => setQuantity(id, evt.target.value)} name="Quantity:">
        <option value={1}>1</option>
        <option value={2}>2</option>
  </select>
  </div>
  </div>

);

export default GroceryItem;
