import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // const click = () => {
    const updatedSquare = {
      id: props.id,
      value: props.value,
    }

  //   props.onClickCallback(updatedSquare);
  //   return  `sup`

  // }

  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  return (
  <button className="square" onClick={() => props.onClickCallback(updatedSquare)}>
    {props.value}
  </button>
  )
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  goesFirst: PropTypes.string.isRequired
};

export default Square;
