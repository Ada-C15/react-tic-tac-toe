import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


//takes 2D array and makes it into a 1D array of square values

const generateSquareComponents = (squares,onClickCallback) => {
  
  let flattenedBoard = [];
  for(let i=0; i< squares.length; i++){
    flattenedBoard = flattenedBoard.concat(squares[i])
  }
  console.log(flattenedBoard)
  return flattenedBoard.map((square) => {
        return <Square key={square.id} id={square.id} value={square.value} onClickCallback={onClickCallback}/>
        
    })

};


// Creating Board component
const Board = (props) => {
  
  
  const squareList = generateSquareComponents(props.squares, props.onClickCallback);
  console.log(squareList);
  
  return (
    <div className="grid">
      {squareList}
    </div>
  )
};

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
