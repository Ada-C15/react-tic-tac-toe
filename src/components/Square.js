import React from 'react';
import PropTypes from 'prop-types';
import './Square.css'

const PLAYER_1 = 'X'
const PLAYER_2 = 'O'
let currentValue = ''

console.log(currentValue)

const Square = ({value, id, onClickCallback}) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.
  
  // const newValue = (currentValue) => {
  //   if (currentValue === '') {
  //     currentValue = value = PLAYER_1;
  //     console.log(currentValue)
  //   } else if (currentValue === 'X') {
  //     currentValue = value = PLAYER_2;
  //     console.log(currentValue)
  //   } else {
  //     currentValue = value = PLAYER_1
  //     console.log(currentValue)
  //   } return value
  // }

  const markSquare = () => {
    console.log('hello world')
    console.log({id:id, value:value})
    return onClickCallback({
      id: id,
      value: value
    })
  }

  return (
    <button onClick={() => {markSquare()}} className="square">
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
