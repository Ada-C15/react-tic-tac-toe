import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // convert 2D squares array to 1D array
  // Merge both arrays into one
  const mergedArraySquares = [].concat(...squares);
  console.log(squares);
  console.log(mergedArraySquares);
  // use map in order to add square attributes
  return mergedArraySquares.map((square) => {
    return <Square
    key = {square.id}
    value = {square.value}
    id = {square.id}
    onClickCallback = {onClickCallback} />
  });
}
  // let newArr = [];

  // for(let i = 0; i < squares.length; i++)
  // {
  //   newArr = newArr.concat(squares[i]);
  // }

  // // iterate over the new 1D array and insert the squares + id & value
  // let squaresArr = [];
  // for(let i = 0; i < newArr.length; i++)
  // {
  //   const currentSquare = newArr[i];
  //   squaresArr.push( <Square value= {currentSquare.value} id={currentSquare.id}/>)
  // }
  // return squaresArr;
  // }


const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  // check what squareList looks like
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