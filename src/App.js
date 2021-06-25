import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

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

  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1)
  const[winner, setWinner] = useState('');
  const[gameState, setState] = useState(true)

  const updateSquare = (id, value) => {
    return () => {
      checkForWinner()

      if (value === '' && gameState === true) {
        const newSquares = squares.map(row => {
          return row.map(square => {
            if (square.id === id) {
              return { id: square.id, value: currentPlayer }
            } else {
              return square
            }
          })
        })

        setSquares(newSquares)
        
          if (currentPlayer === PLAYER_1) {
            setCurrentPlayer(PLAYER_2)
          } else {
            setCurrentPlayer(PLAYER_1)
          }
        
      }
    }
  };

  const checkForWinner = () => {
    let winner = '';

    //horizontal wins
    for(let row of squares) {
      if (row[0].value === row[1].value && 
        row[1].value === row[2].value &&
        row[0].value && row[0].value !== '') {
        winner = (row[0].value);
      }
    };

    //diagonal wins
    if (squares[0][0].value === squares[1][1].value && 
      squares[0][0].value === squares[2][2].value &&
      squares[0][0].value !== '') {
        winner = (squares[0][0].value);
      }

      else if (squares[0][2].value === squares[1][1].value && 
        squares[0][2].value === squares[2][0].value &&
        squares[0][2].value !== '') {
          winner = (squares[0][2].value);
        };
    
      //vertical wins

      if (squares[0][0].value === squares[1][0].value && 
        squares[0][0].value === squares[2][0].value &&
        squares[0][0].value !== '') {
          winner = (squares[0][0].value);
        }
      
        else if (squares[0][1].value === squares[1][1].value && 
          squares[0][1].value === squares[2][1].value &&
          squares[0][1].value !== '') {
            winner = (squares[0][1].value);
          }

        else if (squares[0][2].value === squares[1][2].value && 
          squares[0][2].value === squares[2][2].value &&
          squares[0][2].value !== '') {
            winner = (squares[0][2].value);
          }

    if (winner) {
      setWinner(winner);
      setState(false);
    }

  }

  if (!winner) {
    checkForWinner()
  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {winner}</h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={ squares } onClickCallback={ updateSquare }/>
      </main>
    </div>
  );
}

export default App;
