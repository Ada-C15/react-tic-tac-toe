import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components

const generateSquareComponents = (squares, onClickCallback) => {
  let squareComponents = squares.reduce( (accum,curVal) =>{
    return accum.concat(curVal);
  })
  return squareComponents.map((square)=>{
    return <Square value= {square.value}
                    id = {square.id} 
                    key={square.id}
                    onClickCallback={onClickCallback} />
  });
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
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
