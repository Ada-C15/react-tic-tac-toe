import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCb) => {
  let sa = [].concat(...squares);

  let mapped = sa.map((square) =>{
    const clickHandler = square => {
      console.log(square, 'click handler')
      onClickCb(square, sa);
    };
    return(
    <Square key={square.id} id={square.id} onClickCallback={clickHandler} value={square.value} />
  )})
  return mapped
}


const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  return (<div className="grid" >
    {squareList}
  </div>
  )}

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
