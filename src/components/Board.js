import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => { //save click for later, delete if not needed***********
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  const gridBoard = []; //grid needs to 3 by 3, set up a perimeter
  for (let row = 0; row < 3; row += 1) {
    for (let column = 0; column < 3; column += 1) {
      gridBoard.push(squares[row][column]); //push ~= append
    }
  }
  return gridBoard;
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList); //Look at studetList example for below
  return <div className="grid" > 
    {squareList.map(square=> <Square key={square.id} square={square}/>)} 
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
