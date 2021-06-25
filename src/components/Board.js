import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  let oneDArray = [];
  for(let i=0; i<squares.length; i+= 1) {
    oneDArray = oneDArray.concat(squares[i]);
  }
  return oneDArray;

}

const Board = ({ squares, onClickCallback }) => {

  const squareList = generateSquareComponents(squares);
  console.log(squareList);
  const squareComponents = squareList.map(square => {
    return (<div key={square.id}><Square id={square.id} value={square.value} onClickCallback={onClickCallback}></Square></div>)
  });

  return <div className="grid">{squareComponents}</div>
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
