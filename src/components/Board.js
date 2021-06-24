import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  // I think I need to use .concat() function
  // const singleArraySquares = [].concat(squares);
  // return singleArraySquares.map((square) => {
  //   return <Square 
  //   value={square.value}
  //   id={square.id}
  //   onCLickCallback={onClickCallback}
  //   key={square.id}
  //   />
  // })
  const flatGrid = [];
  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      flatGrid.push(squares[row][col]);
    }
  } return flatGrid;
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div className="grid" >
    {squareList.map(square => <Square key={square.id} id={square.id} value={square.value} onClickCallback={onClickCallback}/>)}
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
