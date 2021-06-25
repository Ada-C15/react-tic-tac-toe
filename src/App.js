// Container component, responsible for holding data about the game state
// X and Os marked and their locations, player info, determining the winner
// rendering the board

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

  // Initial state for board, turn and winner  
  const [squares, setSquares] = useState(generateSquares());
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(null);

  // Wave 2
  // Method to change the square when it is 
  // clicked on. Then pass it into the squares as a callback
  const setValue = (id) => {
    // To determine position of the board where user is clicking with
    // square id, given it's a 2D array:
    if (winner !== null){
      return;
    }
    const row = Math.floor(id / 3);
    const col = id % 3
    if (squares[row][col].value === '') {
      let player
      if (turn % 2 === 0) {
        player = PLAYER_1;
      } else {
        player = PLAYER_2;
      }
      const newSquares = [...squares];
      newSquares[row][col].value = player;

      // Update the state of squares and turn
      setWinner(checkForWinner(newSquares));
      setSquares(newSquares);
      setTurn(turn + 1);
      console.log(newSquares);
    } else {
      console.log('Square not empty');
      console.log(squares[row][col]);
    }
  }

  // Wave 3
  const checkForWinner = (squares) => {
    const players = [PLAYER_1, PLAYER_2]
    for (let player of players) {
      console.log(`Player ${player}`)
      for (let i = 0; i < 3; i++) {
        // check if one row is full with x or o marks  
        if (player === squares[i][0].value && player === squares[i][1].value && player === squares[i][2].value) {
          console.log(`Player ${player} won`)
          return player;
          // checking if a column is full with x or o marks
        } else if (player === squares[0][i].value && player === squares[1][i].value && player === squares[2][i].value) {
          console.log(`Player ${player} won column`)
          return player;
        }
      }
      // checking for the other winning possibilities (diagonal) 
      if (player === squares[0][0].value && player === squares[1][1].value && player === squares[2][2].value) {
        return player;
      }
      if (player === squares[0][2].value && player === squares[1][1].value && player === squares[2][0].value) {
        return player;
      }
    }
    // If conditions are false above AND there is a space empty on the board, 
    // game still in progress 
    for (let row of squares) {
      for (let col of row) {
        if (col.value === '') {
          return null;
        }
      }
    }
    return "It's a Tie!";
  }

  const resetGame = () => {
    // Wave 4
    setSquares(generateSquares())
    setWinner(null)
    setTurn(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is { winner } </h2>
        <p> It's { turn % 2 === 0 ? 'X' : 'O' } turn:</p>
        <button onClick={ resetGame }>Reset Game </button>
      </header>
      <main>
        {/* Props pass variables, squares and onClickCallback are props */}
        {/* App passes props to Board */}
        <Board squares={squares} onClickCallback={setValue} />
      </main>
    </div>
  );
}

export default App;
