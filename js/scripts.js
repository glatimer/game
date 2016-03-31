// business logic
function Player(marker) {
  this.marker = marker;
  this.turn = [];
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

    var player1 = new Player("X");

    //need click functions on each cell
  });
});
