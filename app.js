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

var player1 = document.querySelector('.player1')
var player2 = document.querySelector('.player2')
var winnerDeclare = document.querySelector('.winner')

// winnerDeclare.textContent = "You're the weiner"

var turnCount = 0

var gameCounter = function() {
turnCount++
  if (turnCount % 2 === 0) {
    event.target.classList.add('cell-crosses')
    player1.textContent = "Your turn"
    console.log('Player 1\s turn')

  } else if (turnCount !== 0) {
    event.target.classList.add('cell-noughts')
    player2.textContent = "Your turn"
    console.log('Player 2\s turn')
  }
  // if statement for conditions of NOUGHTs winning
  if (cell1.classList.contains('cell-noughts') && 
    cell2.classList.contains('cell-noughts') && 
    cell3.classList.contains('cell-noughts')) {
    winnerDeclare.textContent = "Noughts Wins"
    console.log('noughts win') 
    } else if (cell4.classList.contains('cell-noughts') && 
    cell5.classList.contains('cell-noughts') && 
    cell6.classList.contains('cell-noughts')) {
    winnerDeclare.textContent = "Noughts Wins"
    console.log('noughts win') 
    } else if (cell1.classList.contains('cell-noughts') && 
    cell4.classList.contains('cell-noughts') && 
    cell7.classList.contains('cell-noughts')) {
    winnerDeclare.textContent = "Noughts Wins"
    console.log('noughts win')
    } 
    else if (cell2.classList.contains('cell-noughts') && 
    cell5.classList.contains('cell-noughts') && 
    cell8.classList.contains('cell-noughts')) {
    winnerDeclare.textContent = "Noughts Wins"
    console.log('noughts win')
    } 
    else if (cell3.classList.contains('cell-noughts') && 
    cell6.classList.contains('cell-noughts') && 
    cell9.classList.contains('cell-noughts')) {
    winnerDeclare.textContent = "Noughts Wins"
    console.log('noughts win')
    } else if (cell1.classList.contains('cell-noughts') && 
    cell5.classList.contains('cell-noughts') && 
    cell9.classList.contains('cell-noughts')) {
    winnerDeclare.textContent = "Noughts Wins"
    console.log('noughts win')
    } else if (cell3.classList.contains('cell-noughts') && 
    cell5.classList.contains('cell-noughts') && 
    cell7.classList.contains('cell-noughts')) {
    winnerDeclare.textContent = "Noughts Wins"
    console.log('noughts win')
  } 
  // IF statement for the conditions for CROSSES winning. 
  if (cell1.classList.contains('cell-crosses') && 
    cell2.classList.contains('cell-crosses') && 
    cell3.classList.contains('cell-crosses')) {
    winnerDeclare.textContent = "Crosses Wins"
    console.log('crosses win') 
    } else if (cell4.classList.contains('cell-crosses') && 
    cell5.classList.contains('cell-crosses') && 
    cell6.classList.contains('cell-crosses')) {
    winnerDeclare.textContent = "Crosses Wins"
    console.log('crosses win') 
    } else if (cell1.classList.contains('cell-crosses') && 
    cell4.classList.contains('cell-crosses') && 
    cell7.classList.contains('cell-crosses')) {
    winnerDeclare.textContent = "Crosses Wins"
    console.log('crosses win')
    } 
    else if (cell2.classList.contains('cell-crosses') && 
    cell5.classList.contains('cell-crosses') && 
    cell8.classList.contains('cell-crosses')) {
    winnerDeclare.textContent = "Crosses Wins"
    console.log('crosses win')
    } 
    else if (cell3.classList.contains('cell-crosses') && 
    cell6.classList.contains('cell-crosses') && 
    cell9.classList.contains('cell-crosses')) {
    winnerDeclare.textContent = "Crosses Wins"
    console.log('crosses win')
    } else if (cell1.classList.contains('cell-crosses') && 
    cell5.classList.contains('cell-crosses') && 
    cell9.classList.contains('cell-crosses')) {
    winnerDeclare.textContent = "Crosses Wins"
    console.log('crosses win')
    } else if (cell3.classList.contains('cell-crosses') && 
    cell5.classList.contains('cell-crosses') && 
    cell7.classList.contains('cell-crosses')) {
    winnerDeclare.textContent = "Crosses Wins"
    console.log('crosses win')
  } 
} 

gameBoard.addEventListener('click', gameCounter)

// Working if statement for top row either noughts or crosses
// if (cell1.classList.contains('cell-noughts') && 
//     cell2.classList.contains('cell-noughts') && 
//     cell3.classList.contains('cell-noughts')) {
//     console.log('noughts win') 
//     } else if (cell1.classList.contains('cell-crosses') && 
//     cell2.classList.contains('cell-crosses') && 
//     cell3.classList.contains('cell-crosses')) {
//     console.log('crosses win')
//   }


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


