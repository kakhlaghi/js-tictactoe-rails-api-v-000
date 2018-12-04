// Code your JavaScript / jQuery solution here
const solutions = [
  [0,1,2],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]
let turnCount = 0;
let thisGame = 0;

let player = function() {
  turnCount % 2 ? 'X' : 'O'
}

let updateState = function(box) {
   let marker = player()
   $(box).text(marker)
}

let setMessage = function(someString) {
  $(#message).innerHTML(someString)

}

let checkWinner = function(){
  var board = {};
    var winner = false;

    $('td').text((index, square) => board[index] = square);

    WINNING_COMBOS.some(function(combo) {
      if (board[combo[0]] !== "" && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
        setMessage(`Player ${board[combo[0]]} Won!`);
        return winner = true;
      }
  });

let
