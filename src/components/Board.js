import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components

  //first iterate through squares and append to a list(flatten)
  const flatList = []
  console.log(squares)
  squares.forEach(row=>{
    row.forEach(square =>{
      flatList.push(square)
    })
  });
  console.log(flatList)

  //then give each square as an argument to Square component <Square></> 
  const squareComponents = flatList.map(data => <Square id={data.id} value={data.value} onClickCallback={onClickCallback} ></Square>)
  return squareComponents
}

// return (
//   // <li><Square id={sqaures.id} value={squares.value}></Square></li>
// );
// });

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div className="grid">{squareList}</div>
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
