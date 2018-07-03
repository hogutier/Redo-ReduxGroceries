import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter, SHOW_ALL, SHOW_ACTIVE, SHOW_BOUGHT } from "../store"

const Footer = ({ toggleView }) => (
  <div className="footer">
    <span>Show:  </span>
		<span onClick={() => toggleView(SHOW_ALL)}>All  </span>
		<span onClick={() => toggleView(SHOW_ACTIVE)}>Active  </span>
		<span onClick={() => toggleView(SHOW_BOUGHT)}>Bought  </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleView: value => dispatch(setVisibilityFilter(value))
})

export default connect(null, mapDispatchToProps)(Footer);
