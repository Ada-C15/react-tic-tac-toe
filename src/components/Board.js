import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

// Is squares a prop here?
const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but
  //  you need to return a 1D array
  //  of square components

  let flatArray = [];
  for (let i = 0; i < squares.length; i++) {
    flatArray = flatArray.concat(squares[i]);
  }
  // How to I flatten squares to get an array of all ids and values?
  const squareComponents = flatArray.map((square) => {
    return <Square key={square.id} value={square.value} id={square.id} onClickCallback={onClickCallback}></Square>
  })

  // console.log('This is the flattened array:', flatArray)
  // console.log('This is the flattened array mapped to square components: ', squareComponents)

  return squareComponents
}

// squareList is comfusing to me here. Why are we calling generateSquareComponents with the same parameters as above?
const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  // console.log(squareList);
  return <div className="grid">
    {squareList}
  </div>
}

// Are these PropTypes what Board should be handed? Or what it should be handing to something else?

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired
};

export default Board;
