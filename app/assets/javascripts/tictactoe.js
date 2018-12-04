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
<<<<<<< HEAD
var turnCount = 0;
var thisGame = 0;

var player = function() {
  turnCount % 2 ? 'X' : 'O'
}

$(document).ready(function() {
  attachListeners();
});

function attachListeners() {
  $('td').on('click', function() {
    if (!$.text(this) && !checkWinner()) {
      doTurn(this);
    }
  });

  $('#save').on('click', () => saveGame());
  $('#previous').on('click', () => showPreviousGames());
  $('#clear').on('click', () => resetBoard());
}

function doTurn(square) {
  updateState(square);
  turn++;
  if (checkWinner()) {
    saveGame();
    resetBoard();
  } else if (turn === 9) {
    setMessage("Tie game.");
    saveGame();
    resetBoard();
  }
}

var updateState = function(box) {
   var marker = player()
   $(box).text(marker)
}

var setMessage = function(someString) {
  $("#message").text(someString)

}

var checkWinner = function(){
=======
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
>>>>>>> 1d245a339e35cbdd18d1ed9ea9a9c3e60a2eb232
  var board = {};
    var winner = false;

    $('td').text((index, square) => board[index] = square);

<<<<<<< HEAD
    solutions.some(function(combo) {
=======
    WINNING_COMBOS.some(function(combo) {
>>>>>>> 1d245a339e35cbdd18d1ed9ea9a9c3e60a2eb232
      if (board[combo[0]] !== "" && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
        setMessage(`Player ${board[combo[0]]} Won!`);
        return winner = true;
      }
  });
<<<<<<< HEAD
}

  function resetBoard() {
    $('td').empty();
    turn = 0;
    thisGame = 0;
  }

function saveGame(){
  var gameSaves;
  var state = [];
  $('td').text((index,square) => {
    state.push(square);
  })
  gameSaves = {state: state}
  if (thisGame) {
    $.ajax({
      type: 'PATCH',
      url: `/games/${thisGame}`,
      data: gameSaves
    });
  } else {
    $.post('/games', gameSaves, function(game) {
      thisGame = game.data.id;
      $('#games').append(`<button id="gameid-${game.data.id}">${game.data.id}</button><br>`);
      $("#gameid-" + game.data.id).on('click', () => reloadGame(game.data.id));
    });
  }
}

function showPreviousGames(){
  $('#games').empty();
  $.get('/games', (savedGames) => {
    if(savedGames.data.length){
      savedGames.data.forEach(buttonPreviousGame);
    }
  })
}
=======

let
>>>>>>> 1d245a339e35cbdd18d1ed9ea9a9c3e60a2eb232
