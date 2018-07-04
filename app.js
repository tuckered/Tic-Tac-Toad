var gameBoard = document.querySelector('.gameboard')

var cell1 = document.querySelector('#cell1')
var cell2 = document.querySelector('#cell2')
var cell3 = document.querySelector('#cell3')
var cell4 = document.querySelector('#cell4')
var cell5 = document.querySelector('#cell5')
var cell6 = document.querySelector('#cell6')
var cell7 = document.querySelector('#cell7')
var cell8 = document.querySelector('#cell8')
var cell9 = document.querySelector('#cell9')


var turnCount = 0

var noughtsLineCheck = 0

var gameCounter = function() {
  turnCount++
  if (turnCount % 2 === 0) {
    event.target.classList.add('cell-noughts')
    console.log('Player 1\s turn')

  } else if (turnCount !== 0) {
    event.target.classList.add('cell-crosses')
    console.log('Player 2\s turn')
  }

  if (cell1.classList.contains('cell-noughts') && 
    cell2.classList.contains('cell-noughts') && 
    cell3.classList.contains('cell-noughts')) {
    console.log('noughts win') 
    } else if (cell1.classList.contains('cell-crosses') && 
    cell2.classList.contains('cell-crosses') && 
    cell3.classList.contains('cell-crosses')) {
    console.log('crosses win')
  }
} 

 // WORKING TO IDENTIFY THE CELL CONTENT. NEEDS TO BE WITHIN THE FUNCTION
// if (cell1.classList.contains('cell-noughts')) {
//   console.log('noughts') 
//   } else if (cell1.classList.contains('cell-crosses')) {
//     console.log('crosses')
// }


// var noughtsCell = function(event) {
//   console.log('hi')
//   event.target.classList.toggle('cell-noughts')
// }

// var crossesCell = function(event) {
//   console.log('hi')
//   event.target.classList.toggle('cell-crosses')
// }

// gameCell.addEventListener('click', noughtsCell)
// gameBoard.addEventListener('click', crossesCell)
gameBoard.addEventListener('click', gameCounter)

