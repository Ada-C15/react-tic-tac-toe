import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  let flattenedBoard = []
    for(let i=0; i < squares.length; i++) {
      flattenedBoard = flattenedBoard.concat(squares[i])
    }

  return flattenedBoard.map((square) => {
    return <Square 
      key={square.id} 
      id={square.id} 
      value={square.value} 
      onClickCallback={onClickCallback}
      />
  })    
};

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
        value: PropTypes.string.isRequired,
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
  
};

export default Board;
