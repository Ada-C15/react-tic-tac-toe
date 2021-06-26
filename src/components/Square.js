import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Square.css'

const Square = ({value, id, onClickCallback}) => {

  const handleClick = () => {
    onClickCallback(id)
  };

  return <button
    className="square"
    onClick={handleClick}>
    {value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
