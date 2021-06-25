import React from 'react';
import PropTypes from 'prop-types';
import './Square.css'

const Square = ({id, onClickCallback, value}) => {
  // For Wave 1 enable  
  //  Component to alert a parent component when it's clicked on. 
  
  return <button 
  className="square" 
  // Passing the onClickCallback function into the squares 
  // SetValue callBack Function
  onClick={() => onClickCallback(id)}>
  {value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
