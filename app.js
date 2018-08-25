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
var toadLegsPic = document.querySelector('.toad-legs')

var redPlayer = document.querySelector('.redPlayer')
var bluePlayer = document.querySelector('.bluePlayer')
var winnerDeclare = document.querySelector('.winner')
var resetBtn = document.querySelector('#reset-btn')

var turnCount = 0
var currentPlayer = ''
var inPlay = true
var winner = false

bluePlayer.textContent = "BLUE'S TURN"
bluePlayer.classList.add('bluePlayerBorder')

var gameCounter = function() {
  gameBoard.classList.remove('toad-legs')
  if (!event.target.classList.contains('red-cell') && !event.target.classList.contains('blue-cell') && !event.target.classList.contains('gameboard') && inPlay) {

    turnCount++

    if (turnCount % 2 === 0) {
      event.target.classList.add('red-cell')
      bluePlayer.classList.add('bluePlayerBorder')
      redPlayer.classList.remove('redPlayerBorder')
      bluePlayer.textContent = "BLUE'S TURN!!"
      redPlayer.textContent = ''
      currentPlayer = 'red-cell'
      console.log(bluePlayer.textContent)
    
    } else if (turnCount % 2 === 1) {
      event.target.classList.add('blue-cell')
      redPlayer.classList.add('redPlayerBorder')
      bluePlayer.classList.remove('bluePlayerBorder')
      redPlayer.textContent = "RED'S TURN!!"
      bluePlayer.textContent = ''
      currentPlayer = 'blue-cell'
      console.log(redPlayer.textContent)
    }

    
    var lineCheck = function(sq1, sq2, sq3, cellClass) {
      if (sq1.classList.contains(cellClass) && 
      sq2.classList.contains(cellClass) && 
      sq3.classList.contains(cellClass)) {
        if (sq1.classList.contains('red-cell')) {
          redToadWins.classList.remove('hide')
          resetBtn.classList.remove('hide')
          bluePlayer.classList.remove('bluePlayerBorder')
          winner = true
        } else if (sq1.classList.contains('blue-cell')) {
          blueToadWins.classList.remove('hide')
          redPlayer.classList.remove('redPlayerBorder')
          resetBtn.classList.remove('hide')
          inPlay = false
          winner = true
        }
        bluePlayer.textContent = ''
        redPlayer.textContent = ''
        gameBoard.classList.add('toad-legs')
        
        console.log(winMessage) 
      }
    }
    
    lineCheck(cell1, cell2, cell3, currentPlayer)
    lineCheck(cell4, cell5, cell6, currentPlayer)
    lineCheck(cell7, cell8, cell9, currentPlayer)
    lineCheck(cell1, cell4, cell7, currentPlayer)
    lineCheck(cell2, cell5, cell8, currentPlayer)
    lineCheck(cell3, cell6, cell9, currentPlayer)
    lineCheck(cell1, cell5, cell9, currentPlayer)
    lineCheck(cell3, cell5, cell7, currentPlayer)
  } 
  if (turnCount === 9 && winner === false) {
  bluePlayer.textContent = ''
  redPlayer.textContent = ''
  drawGame.classList.remove('hide')
  resetBtn.classList.remove('hide')
  redPlayer.classList.remove('redPlayerBorder')
  }
}


var resetGame = function() {
  for (var i = 0; i < allCells.length; i++){
    allCells[i].classList.remove('red-cell', 'blue-cell')
    redToadWins.classList.add('hide')
    blueToadWins.classList.add('hide')
    drawGame.classList.add('hide')
    resetBtn.classList.add('hide')
    bluePlayer.classList.add('bluePlayerBorder')
    redPlayer.classList.remove('redPlayerBorder')
    turnCount = 0
    winMessage = ''
    inPlay = true
    bluePlayer.textContent = "BLUE'S TURN"
  }
}


gameBoard.addEventListener('click', gameCounter)
resetBtn.addEventListener('click', resetGame)
