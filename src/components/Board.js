import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  const flatArray = [...squares[0],...squares[1],...squares[2]];
  console.log('squares:', {squares});
  console.log('flatArray:', {flatArray});

  const squareComponents = flatArray.map((square) => {
    return ( <Square 
      value={square.value}
      id={square.id}
      key={square.id}
      onClickCallback={onClickCallback}
    />)
  });
  
  return squareComponents;
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log('squareList:', {squareList});
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
