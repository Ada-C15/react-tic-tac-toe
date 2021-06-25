import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = ({ id, value, onClickCallback }) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  const onSquareClick = () => {
    const updatedSquare = {
      id: id,
      value: value,
      onClickCallback: onClickCallback
    }
  }

  return <button className="square" onClick={onSquareClick}>
     {value}                                {/*^^ how to pass the value? to update state/ re-render it */}
  </button>
}

Square.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
};

export default Square;
