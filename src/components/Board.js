import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  const squareComponents = []
  squares.forEach((row) => {
    row.forEach((square) => {
      squareComponents.push(<Square 
        key={ square.id }  
        value = { square.value }
        id = { square.id } 
        onClickCallback = { onClickCallback }/>)
      // console.log(squares)
    })
  });
  console.log(squareComponents)
  return squareComponents

}
// functional component 
// Generates the squares in the grid and that forms the board
const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
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
