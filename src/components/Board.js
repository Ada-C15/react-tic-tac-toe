import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  let newArr = [];
  for(let i = 0; i < squares.length; i++)
  {
      newArr = newArr.concat(squares[i]);
  }

  let squaresArr = [];
  for(let i = 0; i < newArr.length; i++)
  {
      const currentSquare = newArr[i];
      squaresArr.push ( <Square value= {currentSquare.value} id={currentSquare.id}/>)
  } 
  return squaresArr
  

} 






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
