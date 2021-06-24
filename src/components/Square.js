import React from 'react';
import PropTypes from 'prop-types';
// import './Square.css'

const style = {
	background: 'lightblue',
	border: '2px solid darkblue',
	fontSize: '30px',
	fontWeight: '800',
	cursor: 'pointer',
	outline: 'none',
};

const Square = ({ value, onClick }) => {(
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.
  <button style={style} onClick={onClick}>
    {value}</button>
);
  return <button
    className="square">
    {value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
