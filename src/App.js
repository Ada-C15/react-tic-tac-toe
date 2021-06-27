import React, { useState } from 'react'
import './App.css'

import Board from './components/Board'

const PLAYER_1 = 'x'
const PLAYER_2 = 'o'

const generateSquares = () => {
  const squares = []
  // [[{},{},{}],[{},{},{}],[{},{},{}]]
  let currentId = 0

  for (let row = 0; row < 3; row += 1) {
    squares.push([])
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      })
      currentId += 1
    }
  }

  return squares
}

const App = () => {
  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares())
  const [player, setPlayer] = useState(PLAYER_1)
  const [winner, setWinner] = useState('')

  // Wave 2
  // You will need to create a method to change the square
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const updateSquares = (id) => {
    // make a new array of squares to map out each individual square
    const newSquares = squares.map((row) => {
      return row.map((square) => {
        // if square on this and if value is empty, it matches the id that got passed in
        if (square.id === id && !square.value) {
          // holds whether its x or o
          square.value = player
          // moved set player here to keep turns consecutive
          setPlayer(player === PLAYER_1 ? PLAYER_2 : PLAYER_1)
        }
        return square
      })
    })
    // going to hold the updated squares
    setSquares(newSquares)
    // check for winner after each turn
    checkForWinner()
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

    //  diagonals
    if (
      squares[0][0].value === squares[1][1].value &&
      squares[1][1].value === squares[2][2].value &&
      squares[0][0].value !== ''
    ) {
      setWinner(squares[1][1].value)
      return
    }
    if (
      squares[0][2].value === squares[1][1].value &&
      squares[1][1].value === squares[2][0].value &&
      squares[0][2].value !== ''
    ) {
      setWinner(squares[1][1].value)
      return
    }

    //  rows
    for (const row of squares) {
      if (
        row[0].value === row[1].value &&
        row[1].value === row[2].value &&
        row[0].value !== ''
      ) {
        setWinner(row[0].value)
        return
      }
    }

    // columns
    for (const i of [0, 1, 2]) {
      if (
        squares[0][i].value === squares[1][i].value &&
        squares[1][i].value === squares[2][i].value &&
        squares[0][i] !== ''
      ) {
        setWinner(squares[0][i].value)
        return
      }
    }
  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {winner} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquares} />
      </main>
    </div>
  )
}

export default App
