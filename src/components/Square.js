import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'


const Square = (props) => {
  // app needs to know which square got clicked on by using anonymous function to call with the id 
  const handleButtonClick = () => {
    //const updateSquare = {
    //  id: props.id,
    //  value: 'O',
    //};
    props.onClickCallback(props.id);
  }
  
  return <button 
      className="square" 
      onClick={handleButtonClick}>
      {props.value} 
    </button>
  }




// these props types determine what to pass into the component 
Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
