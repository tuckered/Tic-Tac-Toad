var gameBoard = document.querySelector('.gameboard')

var allCells = document.querySelectorAll('.gameboard div')
var cell1 = document.querySelector('#cell1')
var cell2 = document.querySelector('#cell2')
var cell3 = document.querySelector('#cell3')
var cell4 = document.querySelector('#cell4')
var cell5 = document.querySelector('#cell5')
var cell6 = document.querySelector('#cell6')
var cell7 = document.querySelector('#cell7')
var cell8 = document.querySelector('#cell8')
var cell9 = document.querySelector('#cell9')

var redToadWins = document.querySelector('#red-toad-wins')
var blueToadWins = document.querySelector('#blue-toad-wins')
var drawGame = document.querySelector('#draw-game')

var player1 = document.querySelector('.player1')
var player2 = document.querySelector('.player2')
var winnerDeclare = document.querySelector('.winner')
var resetBtn = document.querySelector('#reset-btn')

var turnCount = 0
var currentPlayer = ''
var winMessage = ''

var gameCounter = function() {

  if (!event.target.classList.contains('cell-crosses') && !event.target.classList.contains('cell-noughts')) {

    turnCount++

    if (turnCount % 2 === 0) {
    event.target.classList.add('cell-crosses')
    player1.textContent = "Your turn"
    player2.textContent = ''
    currentPlayer = 'cell-crosses'
    // winMessage = 'Red Toad Wins!!'
    // winMessage = redToadWins
    console.log('Player 1\s turn')

    } else if (turnCount % 2 === 1) {
      event.target.classList.add('cell-noughts')
      player2.textContent = "Your turn"
      player1.textContent = ''
      currentPlayer = 'cell-noughts'
      // debugger
      // winMessage = 'Blue Toad Wins!!'
      // winMessage = blueToadWins
      console.log('Player 2\s turn')
    }

    if (winMessage === '' && turnCount === 9) {
    // winnerDeclare.textContent = "You guys drew!"
    player2.textContent = ''
    player1.textContent = ''
    drawGame.classList.remove('hide')
    console.log("You guys drew!")
    }

    var lineCheck = function(sq1, sq2, sq3, cellClass, winMessage) {
      if (sq1.classList.contains(cellClass) && 
      sq2.classList.contains(cellClass) && 
      sq3.classList.contains(cellClass)) {
        if (sq1.classList.contains('cell-crosses')) {
          redToadWins.classList.remove('hide')
        } else if (sq1.classList.contains('cell-noughts')) {
          blueToadWins.classList.remove('hide')
        }
        // winMessage = 'Winner!!'
      // redToadWins.classList.remove('hide')
      // winnerDeclare.textContent = winMessage
      player2.textContent = ''
      player1.textContent = ''
      console.log(winMessage) 
      }
    }

    lineCheck(cell1, cell2, cell3, currentPlayer, winMessage)
    lineCheck(cell4, cell5, cell6, currentPlayer, winMessage)
    lineCheck(cell7, cell8, cell9, currentPlayer, winMessage)
    lineCheck(cell1, cell4, cell7, currentPlayer, winMessage)
    lineCheck(cell2, cell5, cell8, currentPlayer, winMessage)
    lineCheck(cell3, cell6, cell9, currentPlayer, winMessage)
    lineCheck(cell1, cell5, cell9, currentPlayer, winMessage)
    lineCheck(cell3, cell5, cell7, currentPlayer, winMessage)
  }
}


var resetGame = function() {
  for (var i = 0; i < allCells.length; i++){
    allCells[i].classList.remove('cell-crosses', 'cell-noughts')
    turnCount = 0
    winMessage = ''
    winnerDeclare.textContent = winMessage
  }
}

// img.classList.remove('hide')

gameBoard.addEventListener('click', gameCounter)
resetBtn.addEventListener('click', resetGame)

  // if statement for conditions of NOUGHTs winning
  //  else if (cell4.classList.contains('cell-noughts') && 
  //   cell5.classList.contains('cell-noughts') && 
  //   cell6.classList.contains('cell-noughts')) {
  //   winnerDeclare.textContent = "Noughts Wins"
  //   console.log('noughts win') 
    // } else if (cell1.classList.contains('cell-noughts') && 
    // cell4.classList.contains('cell-noughts') && 
    // cell7.classList.contains('cell-noughts')) {
    // winnerDeclare.textContent = "Noughts Wins"
    // console.log('noughts win')
    // } 
    // else if (cell2.classList.contains('cell-noughts') && 
    // cell5.classList.contains('cell-noughts') && 
    // cell8.classList.contains('cell-noughts')) {
    // winnerDeclare.textContent = "Noughts Wins"
    // console.log('noughts win')
    // } 
    // else if (cell3.classList.contains('cell-noughts') && 
    // cell6.classList.contains('cell-noughts') && 
    // cell9.classList.contains('cell-noughts')) {
    // winnerDeclare.textContent = "Noughts Wins"
    // console.log('noughts win')
    // } else if (cell1.classList.contains('cell-noughts') && 
    // cell5.classList.contains('cell-noughts') && 
    // cell9.classList.contains('cell-noughts')) {
    // winnerDeclare.textContent = "Noughts Wins"
    // console.log('noughts win')
    // } else if (cell3.classList.contains('cell-noughts') && 
    // cell5.classList.contains('cell-noughts') && 
    // cell7.classList.contains('cell-noughts')) {
    // winnerDeclare.textContent = "Noughts Wins"
    // console.log('noughts win')
  // } 
  // IF statement for the conditions for CROSSES winning. 
//   var lineCheck = function(sq1, sq2, sq3, cellClass, winMessage) {
//     if (sq1.classList.contains(cellClass) && 
//     sq2.classList.contains(cellClass) && 
//     sq3.classList.contains(cellClass)) {
//     winnerDeclare.textContent = winMessage
//     console.log(winMessage) 
//     }
//   }


//   if (cell1.classList.contains('cell-crosses') && 
//     cell2.classList.contains('cell-crosses') && 
//     cell3.classList.contains('cell-crosses')) {
//     winnerDeclare.textContent = "Crosses Wins"
//     console.log('crosses win') 
//     } else if (cell4.classList.contains('cell-crosses') && 
//     cell5.classList.contains('cell-crosses') && 
//     cell6.classList.contains('cell-crosses')) {
//     winnerDeclare.textContent = "Crosses Wins"
//     console.log('crosses win') 
//     } else if (cell1.classList.contains('cell-crosses') && 
//     cell4.classList.contains('cell-crosses') && 
//     cell7.classList.contains('cell-crosses')) {
//     winnerDeclare.textContent = "Crosses Wins"
//     console.log('crosses win')
//     } 
//     else if (cell2.classList.contains('cell-crosses') && 
//     cell5.classList.contains('cell-crosses') && 
//     cell8.classList.contains('cell-crosses')) {
//     winnerDeclare.textContent = "Crosses Wins"
//     console.log('crosses win')
//     } 
//     else if (cell3.classList.contains('cell-crosses') && 
//     cell6.classList.contains('cell-crosses') && 
//     cell9.classList.contains('cell-crosses')) {
//     winnerDeclare.textContent = "Crosses Wins"
//     console.log('crosses win')
//     } else if (cell1.classList.contains('cell-crosses') && 
//     cell5.classList.contains('cell-crosses') && 
//     cell9.classList.contains('cell-crosses')) {
//     winnerDeclare.textContent = "Crosses Wins"
//     console.log('crosses win')
//     } else if (cell3.classList.contains('cell-crosses') && 
//     cell5.classList.contains('cell-crosses') && 
//     cell7.classList.contains('cell-crosses')) {
//     winnerDeclare.textContent = "Crosses Wins"
//     console.log('crosses win')
//   } 
// } 



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




// IF STATEMENT BEFORE SEPERATEING OUT STATEMENTS. ONLY BLUE TOAD WINS DISPLAYED

// if (turnCount % 2 === 0) {
//   event.target.classList.add('cell-crosses')
//   player1.textContent = "Your turn"
//   currentPlayer = 'cell-crosses'
//   winMessage = 'Blue Toad Wins!!'
//   console.log('Player 1\s turn')

// } else if (turnCount % 2 === 1) {
//   event.target.classList.add('cell-noughts')
//   player2.textContent = "Your turn"
//   currentPlayer = 'cell-noughts'
//   // debugger
//   winMessage = 'Red Toad Wins!!'
//   console.log('Player 2\s turn')