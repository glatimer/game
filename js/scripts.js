// business logic
function Player(player1, player2) {
  this.player1 = player1,
  this.player2 = player2
}
function Space () {

}

function Board (x, y) {

}

function Game () {

}

Player.prototype.mark = function(userInput) {
  return "X"
}
// user interface logic
$(document).ready(function() {
  $().submit(function(event) {
    event.preventDefault();
  });
});
