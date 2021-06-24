import React from 'react'
import PropTypes from 'prop-types'

import './Square.css'

// make an function here called updateValue?
// where is best place to put this? in student it was after the student function

const Square = ({ id, value, onClickCallback }) => {
  // For Wave 1 enable this
  //  Component to alert a parent
  //  component when it's clicked on.

  const updateValue = () => {
    // call in the function onClickCallback in here
    onClickCallback(id)
    // value: value,
    // how do i tell it to populate either X or O?
  }

  // make a function in app.js that logs the id of the square that was clicked
  // add event handler to the button here
  return (
    <button className="square" onClick={updateValue}>
      {value}
    </button>
  )
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}

export default Square
