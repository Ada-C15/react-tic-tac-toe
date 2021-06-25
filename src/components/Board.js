import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

// const SAMPLE_BOARD = [
//   [
//     {
//       value: 'X',
//       id: 0,
//     },
//     {
//       value: 'X',
//       id: 1,
//     },
//     {
//       value: 'O',
//       id: 2,
//     },
//   ],
//   [
//     {
//       value: 'X',
//       id: 3,
//     },
//     {
//       value: 'X',
//       id: 4,
//     },
//     {
//       value: 'O',
//       id: 5,
//     },
//   ],
//   [
//     {
//       value: 'O',
//       id: 6,
//     },
//     {
//       value: 'O',
//       id: 7,
//     },
//     {
//       value: 'X',
//       id: 8,
//     },
//   ],    
// ];


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  let squareComponents = []
  for (let i = 0; i < squares.length; i++) {
    squareComponents = squareComponents.concat(squares[i])
  }
  return squareComponents.map((square) => {
    return <Square key={square.id} id={square.id} value={square.value} onClickCallback={(id) => onClickCallback(id)}/>})
}

const Board = ({ squares, onClickCallback }) => {
  return generateSquareComponents(squares, onClickCallback);
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
