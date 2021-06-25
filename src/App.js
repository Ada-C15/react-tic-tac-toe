import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
// import Square from './components/Square';

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
                                                      // ^ creates the initial state for squares - provided by the function generateSquares()
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
                                                      // ^ create an initial state for who's turn 

  // Wave 2
  
  const onClickCallback = (event) => {
    const existingButtonInnerText = event.target.innerText
    if (existingButtonInnerText === '') {
      const currentButtonId = event.target.id
      const row = Math.floor(currentButtonId / 3)
      const column = currentButtonId % 3
    
      const newSquares = generateSquares()
      for (let r = 0; r < 3; r += 1) {
        for (let c = 0; c < 3; c += 1) {
          if (r === row && c === column) {
            newSquares[r][c].value = currentPlayer
          } else {
            newSquares[r][c].value = squares[r][c].value
          }          
        }
      }

      setSquares(newSquares)

      // const setCurrentPlayer = PLAYER_1 ? PLAYER_2: PLAYER_1;
      // OR //
      if (currentPlayer === PLAYER_1){
        setCurrentPlayer(PLAYER_2)
      } else {
        setCurrentPlayer(PLAYER_1)
      }
    }
  }
    
  // onClickCallback is the name of a property that belongs to the board  - but the function OnClickCallback is what it will do
  
  
  // const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.

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
        <Board squares={squares} onClickCallback={onClickCallback}/>
                            {/* variable onClickCB= func onClickCB */}
      </main>
    </div>
  );
}

export default App;
