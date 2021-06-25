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

/*initial State 3 rows
[[{id: 0, value: ""}, {id: 1, value: ""}, {id: 2, value: ""}], 
[{id: 3, value: ""}, {id: 4, value: ""}, {id: 5, value: ""}], 
[{id: 6, value: ""}, {id: 7, value: ""}, {id: 8, value: ""}]] */

const App = () => {

  const [squares, setSquares] = useState(generateSquares());
  const [player, setPlayer]= useState(PLAYER_1);
  const [status, setStatus] = useState('Lets play');
  const [winner, setWinner] = useState(null);
  const [turnCount, setTurnCount]=useState(0)


    /*updateSquares is working*/
  const updateSquares=(id)=>{
    if (winner !== null) return;
  

    const newSquares = [...squares];
    let selectedSquare = newSquares.flat().find( newSquare =>newSquare.id ===id)
  
    if (selectedSquare.value !== '') return;
      selectedSquare.value = player;
      updateTurn();

    setWinner(checkForWinner());
    setSquares(newSquares);
  };
    

  const checkForWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
  
      }
    }
    return null;
    
  };
  
  /*update turn is working*/
  const updateTurn = ()=>{
    if (player === PLAYER_1) {
      setPlayer(PLAYER_2)
      //setStatus('Next Turn: Player 2')
      
    } else {
      setPlayer(PLAYER_1)
      //setStatus('Next Turn: Player 1')
    }
  };

  /*reset Game is passing*/
  const resetGame = () => {
    setSquares(generateSquares());
    setPlayer(PLAYER_1);
    setStatus('Lets Play!');
    setWinner(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{status}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquares} />
      </main>
    </div>
  );
}

export default App;



    // const newSquares = [...squares];
    // let selectedSquare = newSquares.flat().find( newSquare =>newSquare.id ===id)
  
    // if (selectedSquare.value !== '') return;
    //   selectedSquare.value = player;

    // if (player === PLAYER_1) {
    //   setPlayer(PLAYER_2);
    // } else {
    //   setPlayer(PLAYER_1);
    //   }


    // const updateSquares=(id)=>{
    //   if (winner !== null) return;
    //     setStatus(`winner is ${winner}`);
  
    //   const newSquares = [...squares];
    //   let selectedSquare = newSquares.flat().find( newSquare =>newSquare.id ===id)
    
    //   if (selectedSquare.value !== '') return;
    //     selectedSquare.value = player;
        
    // //const updateTurn = ()=>
    //   if (player === PLAYER_1) {
    //     setPlayer(PLAYER_2)
    //     setStatus('Next Turn: Player 2')
    //   } else {
    //     setPlayer(PLAYER_1)
    //     setStatus('Next Turn: Player 1')
    //     }
      
    //   };


    // const checkForWinner = () => {
    //   const lines = [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6],
    //   ];
    //   for (let i = 0; i < lines.length; i++) {
    //     const [a, b, c] = lines[i];
    //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    //       return squares[a];
    //     }
    //   }
    //   return null;
    // }

  //   /*updateSquares is working*/
  // const updateSquares=(id)=>{
  //   if (winner !== null) return;
  

  //   const newSquares = [...squares];
  //   let selectedSquare = newSquares.flat().find( newSquare =>newSquare.id ===id)
  
  //   if (selectedSquare.value !== '') return;
  //     selectedSquare.value = player;
  //     updateTurn();

  //   setWinner(checkForWinner());
  //   setSquares(newSquares);
  // };