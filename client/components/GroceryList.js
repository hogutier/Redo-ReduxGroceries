import React from "react";
import GroceryItem from "./GroceryItem";
import { connect } from "react-redux";
import { toggleGrocery, setQuantity, SHOW_ACTIVE, SHOW_BOUGHT } from "../store"

const GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery => (
      <GroceryItem
        key={grocery.id}
        onClick={props.toggleGrocery}
        setQuantity={props.setQuantity}
        {...grocery}
      />
    ))}
  </ul>
);

const mapStateToProps = (state) => {
  if (state.visibilityFilter === SHOW_BOUGHT){
    const groceries = state.groceries.filter(grocery => grocery.bought)
    return { groceries }
  }
  if (state.visibilityFilter === SHOW_ACTIVE) {
    const groceries = state.groceries.filter(grocery => !grocery.bought)
    return { groceries }
  }
  return { groceries: state.groceries}
}
const mapDispatchToProps = (dispatch) => ({
  toggleGrocery: (id) => dispatch(toggleGrocery(id)),
  setQuantity: (id, quantity) => dispatch(setQuantity(id, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroceryList);
