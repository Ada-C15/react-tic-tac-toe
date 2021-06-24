// container component, responsible for holding data about the game state
// X and Os marked and their locations, player info, determining the winner
// rendering the board

import React, { useState } from 'react'; // import useState to set state!
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
  
  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  // this starts state of what turn it is and set turn will increase
  const [turn, setTurn] = useState(0);
  
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const setValue = (id) => {
    // checking the event details
    console.log(`id = ${id}`)
    
    //  to determine the position of the board user is clicking since
    // each square has an id and,
    // given it's a 2D array:
    const row = Math.floor(id / 3);
    const col = id % 3
    if(squares[row][col].value === ''){
      let player
      if (turn % 2 !== 0) {
        player = PLAYER_1;
      } else {
        player = PLAYER_2
      }
      console.log(`player = ${player}`)
      // spread to create a copy of squares
      const newSquares = [...squares];
      // putting it where it goes (behind the scenes)
      newSquares[row][col].value = player;
      // and then updates the state of squares and turn
      setSquares(newSquares);
      setTurn(turn+1);
      console.log(newSquares)
    } else {
      console.log('Square not empty');
      console.log(squares[row][col])
    }
  }
  


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
  }

  const resetGame = () => {
    // Complete in Wave 4
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={ setValue } />
      </main>
    </div>
  );
}

export default App;
