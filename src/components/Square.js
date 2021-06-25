import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = ({ id, value, onClickCallback }) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.


  return <button className="square" id={id} onClick={onClickCallback}>{value}</button>
}

Square.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
};

export default Square;
