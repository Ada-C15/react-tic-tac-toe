import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'
// square has the ability to detect being clicked and to pass up its values
const Square = (props) => {

 const handleClick = () => {
    props.onClickCallback()
  }
    console.log(props)
  return (
  <button className="square" onClick={handleClick} >s</button>
  )};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
