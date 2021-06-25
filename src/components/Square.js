import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  //options for accessing?
  // const {id, value, onClickCallback} = props;
  //Square = ({id, value, onClickCallback}) => {

  //which button has been clicked? props.id is the square clicked

  //event handler? if square button is clicked then generate event(x or)

  const handleClick = () => {
      props.onClickCallback(props.id)
  }

  return <button className="square" onClick={handleClick}>{props.value}</button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
