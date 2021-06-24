import React from 'react'
import './Board.css'
import Square from './Square'
import PropTypes from 'prop-types'

const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but
  //  you need to return a 1D array
  //  of square components
  // witht he id ur going to detect if a square componet has been clicked, and grab the id and mark it as x or o
  // create a variable to hold current move and assign to x or o - boolean to switch or create a variable that gets reassign
  // use useState to represent the current player
  // onClick call back prop is a function and that function will go ahead and determine who the player is and how to mark the square
  return squares.map((row) => {
    return row.map((square) => (
      <Square
        key={square.id}
        id={square.id}
        value={square.value}
        onClickCallback={onClickCallback}
      />
    ))
  })
}
//  could write onClickCallback logic here
const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback)
  return <div className="grid">{squareList}</div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
}

export default Board
