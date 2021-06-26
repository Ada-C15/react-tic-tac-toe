import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // find out what props contains
  console.log(props)
  // after clicking on the button 
  return <button 
    className="square" 
    onClick={()=>
    props.onClickCallback(props.id)}>
      {props.value}
    </button>
};
  // onClickCallback is passed to Square 1D array from Board.js
  // gets called for the specific square that is clicked (hence id specification)
//   const onSquareClick = () => {
//     props.onClickCallback(props.id);
//   };
//   // return button with onSquareClick called, with class specification for CSS
//   return (
//   <button className='square' onClick={onSquareClick}>
//     {props.value}
//   </button>
//   );

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
