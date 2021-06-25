import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import './Square.css'

const Square = (props) => {
  const addClick = () => {
    props.onClickCallback(props.value);
  };

  return (<button
    className="square"
    onClick = { addClick }
  >
    {props.value}
    
  </button>
  )
} // For Wave 1 enable this 
//  Component to alert a parent 
//  component when it's clicked on.

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
