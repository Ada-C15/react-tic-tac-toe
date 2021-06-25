import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  console.log(props) 
  //after clicking on a button, return prop value, accessed through prop id
  return <button
  className="square"
  onClick={()=> 
  props.onClickCallback(props.id)}>
    {props.value}
  </button>}
  


Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
