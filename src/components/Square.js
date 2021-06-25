import React from 'react';
import PropTypes from 'prop-types';
import './Square.css'

const Square = ({value, id, onClickCallback}) => {
  const markSquare = () => {
    return onClickCallback({
      id: id,
      value: value
    })
  }

  return (
    <button onClick={markSquare} className="square">
      {value}
    </button>
  )
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
