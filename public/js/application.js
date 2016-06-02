function setUpBoard(rows, columns) {

  var container = $(".container");
  var table = "<table class='board'></table>";
  container.append(table);
  var count = 0;
  for (var r = 0; r< rows; r++) {
    $(".board").append("<tr id='row"+r+"'></tr>");
    for (var c = 0; c < columns; c++) {
      $("#row"+r).append("<td id='"+count+"'></td>");
      count++;
    }
  }

}

function visualize(game){
  for (i = 0; i < 16; i++) {
    if(game.array[i] != 0 ){$("#"+i.toString()).text(game.array[i].toString())}
      else {$("#"+i.toString()).text("")}
  }
}



$(document).ready(function() {
  setUpBoard(4, 4);
  var game = new Game();
  visualize(game)

  $(document).on("keyup",function(){
    console.log(event.keyCode)
    game.keyParseRun(event.keyCode);
    console.log(game.array)
    visualize(game)
  });


});
