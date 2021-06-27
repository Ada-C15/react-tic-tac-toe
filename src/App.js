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
  const [status, setStatus] = useState('Let\'s play');
  const [winner, setWinner] = useState(null);
  const [turnCount, setTurnCount]=useState(0)

    
  const updateSquares=(id)=>{
    if (winner !== null) return;
  
    const newSquares = [...squares];
    let selectedSquare = newSquares.flat().find( newSquare =>newSquare.id ===id);
  
    if (selectedSquare.value !== '') return;
      selectedSquare.value = player;

    setSquares(newSquares);
    updateTurn();
    updateStatus(); 
  };

  
  const checkForWinner = () => {{
    // vertical cases
    for (let i = 0; i < 3; i++) {
      if (squares[0][i].value === squares[1][i].value &&
        squares[1][i].value === squares[2][i].value &&
        squares[0][i].value !== '') {
          return squares[0][i].value
        }
    }

    // horizontal cases
    for (let i = 0; i < 3; i++) {
      if (squares[i][0].value === squares[i][1].value &&
        squares[i][1].value === squares[i][2].value &&
        squares[i][0].value !== '') {
          return squares[i][0].value
        }
    }

    // diagonal cases
    if (squares[0][0].value === squares[1][1].value &&
      squares[1][1].value === squares[2][2].value &&
      squares[0][0].value !== '') {
        return squares[0][0].value
      }
    if (squares[0][2].value === squares[1][1].value &&
      squares[1][1].value === squares[2][0].value &&
      squares[0][2].value !== '') {
        return squares[0][2].value
      }
  }
  return null;
  };
  
  /*update turn is working*/
  const updateTurn = ()=> {
    if (player === PLAYER_1) {
      setPlayer(PLAYER_2);
      setTurnCount(turnCount+1);
    } else if (player === PLAYER_2) {
      setPlayer(PLAYER_1);
      setTurnCount(turnCount + 1);
      }
    };


  const updateStatus= () => {
    const winner = (checkForWinner())
    if (winner === null && turnCount === 8) {
      setStatus('Oh no...It\'s a tie!')
    }
    else if (winner === null) {
      setStatus(`Current Player is ${player}`)
      }
    else if (winner === 'x' || winner === 'o') {
      setStatus(`Winner is ${winner}`)
      }
    return winner
    }

  /*reset Game is passing*/
  const resetGame = () => {
    setSquares(generateSquares());
    setPlayer(PLAYER_1);
    setStatus('Let\'s Play!');
    setWinner(null);
    setTurnCount(0)
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

