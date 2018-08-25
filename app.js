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
var winMessage = ''
var inPlay = true

bluePlayer.textContent = "BLUE'S TURN"
bluePlayer.classList.add('bluePlayerBorder')

var gameCounter = function() {
  gameBoard.classList.remove('toad-legs')
  if (!event.target.classList.contains('blue-cell') && !event.target.classList.contains('red-cell') && !event.target.classList.contains('gameboard') && inPlay) {

    turnCount++

    if (turnCount % 2 === 0) {
      event.target.classList.add('blue-cell')
      bluePlayer.classList.add('bluePlayerBorder')
      redPlayer.classList.remove('redPlayerBorder')
      bluePlayer.textContent = "BLUE'S TURN!!"
      redPlayer.textContent = ''
      currentPlayer = 'blue-cell'
      console.log(bluePlayer.textContent)
    
    } else if (turnCount % 2 === 1) {
      event.target.classList.add('red-cell')
      redPlayer.classList.add('redPlayerBorder')
      bluePlayer.classList.remove('bluePlayerBorder')
      redPlayer.textContent = "RED'S TURN!!"
      bluePlayer.textContent = ''
      currentPlayer = 'red-cell'
      console.log(redPlayer.textContent)
    }

    
    var lineCheck = function(sq1, sq2, sq3, cellClass, winMessage) {
      if (sq1.classList.contains(cellClass) && 
      sq2.classList.contains(cellClass) && 
      sq3.classList.contains(cellClass)) {
        if (sq1.classList.contains('blue-cell')) {
          redToadWins.classList.remove('hide')
          resetBtn.classList.remove('hide')
          bluePlayer.classList.remove('bluePlayerBorder')
        } else if (sq1.classList.contains('red-cell') && turnCount !== 9) {
          blueToadWins.classList.remove('hide')
          redPlayer.classList.remove('redPlayerBorder')
          resetBtn.classList.remove('hide')
          inPlay = false
        }
        bluePlayer.textContent = ''
        redPlayer.textContent = ''
        gameBoard.classList.add('toad-legs')
        
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
  if (winMessage === '' && turnCount === 9) {
  bluePlayer.textContent = ''
  redPlayer.textContent = ''
  drawGame.classList.remove('hide')
  resetBtn.classList.remove('hide')
  redPlayer.classList.remove('redPlayerBorder')
  }
}


var resetGame = function() {
  for (var i = 0; i < allCells.length; i++){
    allCells[i].classList.remove('blue-cell', 'red-cell')
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
