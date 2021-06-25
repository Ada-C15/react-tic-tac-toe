import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';


const PLAYER_1 = 'x';
const PLAYER_2 = 'o';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState('');

  const updateSquareData = (updatedSquare) => {
    if (winner !== '') return;

    const allSquare = squares.map(row => {
      return row.map(square => {
        console.log({ square })
        // if squaure is not equal to updated squareID or Value,hold that value inside that box and do not let it change.
        if (square.id === updatedSquare.id && !updatedSquare.value) {
          square.value = currentPlayer 
          // makes current players alternate
          setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1)
          return square;
        }
      });
    });


    
    if (currentPlayer === PLAYER_1) {
      setCurrentPlayer(PLAYER_2)
    } else if (currentPlayer === PLAYER_2) {
      setCurrentPlayer(PLAYER_1);
    }


    setSquares(squares);
    checkForWinner()

  };



  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback


  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.

    
    let i = 0;

    // Check Row and Columns
    while (i < 3) {
      if (squares[i][0].value === squares[i][1].value && squares[i][2].value === squares[i][1].value && squares[i][0].value !== '') {
        setWinner(squares[i][0].value);

      } else if (squares[0][i].value === squares[1][i].value && squares[2][i].value === squares[1][i].value && squares[0][i].value !== '') {
        setWinner(squares[0][i].value);
      }
      i += 1;
      
    }
    // Check diagonally 
    if (squares[0][0].value === squares[1][1].value && squares[1][1].value === squares[2][2].value && squares[0][0].value !== '') {
      setWinner(squares[0][0].value);
    }
    if (squares[0][2].value === squares[1][1].value && squares[1][1].value === squares[2][0].value && squares[0][2].value !== '') {
      setWinner(squares[0][2].value);
    }

    return 

  }

  const resetGame = () => {
  }

  // reset button not working

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        {<h2>The winner is player {winner}</h2>}
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquareData} />
      </main>
    </div>
  );
}
export default App;