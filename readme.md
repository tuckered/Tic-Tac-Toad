# TIC-TAC-TOAD

[Tic-Tac-Toad](https://tuckered.github.io/Tic-Tac-Toad/)

This is a simple browser game based on tic-tac-toe. 2 players take turns to try and get 3 in a row either vetically, hoirzontally or diagonally. 


The idea for this game came from a terrible pun. It initially started as bright coloured blocks but once the mechanics were written, I decided to run with the Toad theme for styling. Players use either a blue or red Toad head and there's Super Mario themed font and background. 


## THE GAME AND THE RULES
1. Blue will always start and they get a choice of where to put the first piece. 
2. Red takes the next turn and turns continue until someone gets a line.
3. If a winner is decided, the game will stop and no more turns can be taken. A reset button appears if the players want to play again. 
4. If there is no winner, a DRAW is declared and the reset button will be revealed again. 


## PRODUCTION PROCESS
The game started out as a coloured grid that would get filled when clicked upon. At this point there were no statements to decide how a winner would be decided. 

To take turns, a TURNCOUNT variable was made and added to each time a click was made. An IF statement was used so if TURNCOUNT divisible by 2, it would be player 1's turn and if not it was player 2's turn. 

To determine the win conditions, I decided to use a series of IF statments that would determine the lines and the rows on the play board. Each DIV was given an id number between 1 and 9. There were 8 combinations of winning statements for each player. 

A function lineCheck condensed these win conditions and an IF statement within it specified which player had won. Styling would change depending on the player such as winning text or the reset button appearing. 

## ADDITIONAL FEATURES / PROBLEMS
1. Currently BLUE TOAD will always start the game. A selector of who will begin the game would be ideal. 
2. The player indicator does not fit the style of the rest of the game. It just says "YOUR TURN". Changing this to a coloured Toad head or something similar would fit in with the theme. 
3. There is no counter for how many rounds each player has won. I want to have a feature that the players can pick how many rounds they want to play at the beginning of the game. 
4. I wanted to have a image pop-up on the gameboard when there is a winner but did not manage to get this implemented without affecting the layout of the existing board. 