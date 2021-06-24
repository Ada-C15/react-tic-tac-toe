import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Merge 2 arrays into one, shorthand spread to pass data as props
  const singleArraySquares = [].concat(...squares);
  console.log(squares);
  console.log(singleArraySquares);
  //using map convert each square item into items with Square attributes 
  return singleArraySquares.map((square) => {
    return <Square 
    value={square.value} 
    id={square.id} 
    onClickCallback={onClickCallback} 
    key={square.id} />
  });
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
