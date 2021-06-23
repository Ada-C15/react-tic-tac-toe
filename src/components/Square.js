import React from 'react';
import PropTypes from 'prop-types';
// Do I need to be changing the state in this component?
// import { useState } from 'react';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this
  //  Component to alert a parent
  //  component when it's clicked on.

  // Do I need to be changing what's inside the square.value when a square is clicked on?
  // What should the default state of a square be? How do we tell whose turn it is, to know how to set the value to X or O?
  // const [value, setValue] = useState('');

  // const changeValue = () => {
  //   setValue(value)
  // }

  // This is making each square a button, I think
  return (
  <button className="square">
    {props.value}
  </button>)
}

// Square should return (?) the data for a single square as such: value 'X', id: 1
// When the button is clicked, it should display the value?
// Where does the required function need to go for onClickCallback?

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
