// business logic
function Player(marker) {
  this.marker = marker;
  this.turn = [];
}

Player.prototype.mark = function(userInput) {
  return "X"
}
// user interface logic
$(document).ready(function() {
  $("button#play").submit(function(event) {
    event.preventDefault();
    $(".cell").click(function() {

    })

    var player1 = new Player("X");
    var player2 = new Player("O");


    //need click functions on each cell
  });
});
