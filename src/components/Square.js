import React from 'react';
import PropTypes from 'prop-types';
import './Square.css'

// checks for wave 1
//  Component to alert a parent 
//  component when it's clicked on.
const Square = (props) => {
  const handleClick = () => {
    props.onClickCallback(props.id);
  }

  return <button onClick={handleClick}
    id={props.id}
    value={props.value}
    className="square">
    {props.value}</button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
