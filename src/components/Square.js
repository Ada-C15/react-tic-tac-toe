import React from 'react';
import PropTypes from 'prop-types';
// Do I need to be changing the state in this component?
// import { useState } from 'react';

import './Square.css'

const Square = (props) => {
  // console.log(props)
  // For Wave 1 enable this
  //  Component to alert a parent
  //  component when it's clicked on.

  // Do I need to be changing what's inside the square.value when a square is clicked on?
  // What should the default state of a square be? How do we tell whose turn it is, to know how to set the value to X or O?

  // This is making each square a button, I think
  // What is this anonymous function doing, exactly?
  // I could make this a regular function and then pass it in
  return (
  <button className="square" onClick={() => props.onClickCallback(props.id)}>
    {props.value}
  </button>)
}

// updateSquares takes a parameter of id, so we use props.id as an argument on the onCallClickback

// Square should return (?) the data for a single square as such: value 'X', id: 1
// When the button is clicked, it should display the value?
// Where does the required function need to go for onClickCallback?

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
