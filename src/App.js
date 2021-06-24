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

  // Wave 2
  // You will need to create a method to change the square
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  // model it after this func from student project

  // const updateStudent = (studentToUpdate) => {
  //   const students = studentData.map((student) => {
  //     if (student.id === studentToUpdate.id) {
  //       // great way to toggle back bewteen true and false
  //       // student.present = !student.present;

  //       // return the student i want to change
  //       return studentToUpdate;
  //     }
  //     // else just return the student from my state
  //     return student;
  //   });
  const updateSquare = (id) => {
    // make a new array of squares to map out each individual square
    const newSquares = squares.map((row) => {
      return row.map((square) => {
        // if square on this it. matches the id that got passed in
        if (square.id === id) {
          // holds whether its x or o
          square.value = player
        }
        return square
      })
    })
    setSquares(newSquares)
    setPlayer(player === PLAYER_1 ? PLAYER_2 : PLAYER_1)
    // going to hold the updated squares
  }
  // witht he id ur going to detect if a square componet has been clicked, and grab the id and mark it as x or o
  // create a variable to hold current move and assign to x or o - boolean to switch or create a variable that gets reassign
  // use useState to represent the current player
  // onClick call back prop is a function and that function will go ahead and determine who the player is and how to mark the square
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

  // const dummy = () => {}
  // put this in board
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare} />
        {/* could take out onclickcallback here */}
      </main>
    </div>
  )
}

export default App
