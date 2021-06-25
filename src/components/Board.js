import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';



  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components

const generateSquareComponents = (squares, onClickCallback) => {

  let newBoard = []
  for(let i=0; i < squares.length; i++) {
    newBoard = newBoard.concat(squares[i])
  } 
  return newBoard.map((square) => {
    return <Square 
      key={square.id} 
      id={square.id} 
      value={square.value} 
      onClickCallback={onClickCallback}
      />
  })    

  // const newBoard = [];
  // for (let row = 0; row < 3; row += 1) {
  //   for (let col = 0; col < 3; col += 1) {
  //     newBoard.push(squares[row][col]);
  //   }
  // } return newBoard;
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  // console.log(squareList);
  return <div className="grid" >
    {squareList}
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
