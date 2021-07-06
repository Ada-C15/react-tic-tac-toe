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

const cellMap = [
    {x: 0, y: 0},
    {x: 1, y: 0},
    {x: 2, y: 0},
    {x: 0, y: 1},
    {x: 1, y: 1},
    {x: 2, y: 1},
    {x: 0, y: 2},
    {x: 1, y: 2},
    {x: 2, y: 2}
  ]

const App = () => {

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [winner, setWinner] = useState('')
  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const onClickCallback = (event) => {
    const coordinates = cellMap[event.target.id]
    if(squares[coordinates.y][coordinates.x].value!==''||winner!==''){
    return
    }
    let updatedSquares=[...squares]
    updatedSquares[coordinates.y][coordinates.x].value=currentPlayer
    setSquares(updatedSquares)
    setCurrentPlayer(currentPlayer===PLAYER_1? PLAYER_2: PLAYER_1)
    setWinner(checkForWinner())
    
  }

  

  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    for(let y = 0; y< 3; y++){
      let player=squares[y][0].value
      for(let x= 1; x<3; x++){
      if(squares[y][x].value!==player){
        player=''
      }
      }
      if(player!==''){
        return player
      }
    }
    // 2. Go down each column to see if
    //    3 squares in each column match
    for(let x = 0; x<3; x++){
      let player=squares[0][x].value
      for(let y = 0; y<3; y++){
        if(squares[y][x].value!==player){
          player=''
        }
      }
      if(player!==''){
        return player
      }
    }
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.
    if (squares[0][0].value===squares[1][1].value && squares[0][0].value === squares[2][2].value){
      return squares[0][0].value
    }
    if (squares[0][2].value===squares[1][1].value && squares[0][2].value === squares[2][0].value){
      return squares[0][2].value
    }
    return ''
  }

  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares())
    setCurrentPlayer(PLAYER_1)
    setWinner('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        {winner!==''&&<h2> Winner is {winner} </h2>}
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
}

export default App;
