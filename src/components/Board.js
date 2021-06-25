import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but 
  //  you need to return a 1D array
  //  of square components
  let squareComponents = [];
  console.log(squares);
  for (var i = 0; i < squares.length; i++) {
    let row = squares[i];

    for (var j = 0; j < row.length; j++) {
      // let square = row[j];
      // console.log(square);
      // make square components
      squareComponents.push(
        <Square
          key={squares[i][j].id}
          id={squares[i][j].id}
          value={squares[i][j].value}
        />
      );
    }
  }
  return squareComponents;
};

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div className="grid">{squareList}</div>;
};

// Board.propTypes = {
//   // squares: PropTypes.arrayOf(
//     PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         value: PropTypes.string.isRequired
//       })
//     )
//   ),
//   onClickCallback: PropTypes.func.isRequired
// };

export default Board;
