import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'
// square has the ability to detect being clicked on by the onClick attribute and to pass up its values
const Square = (props) => {
  const updateSquare = () => {
    props.onClickCallback(props.id)
  }

  return (
  <button className="square" onClick={updateSquare} >{props.value}</button>
  )
};


Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
