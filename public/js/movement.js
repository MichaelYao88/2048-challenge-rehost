//moves left on every block starting from left to right
Game.prototype.moveLeft = function(){
  var original = this.array.slice();
  
  for (i = 0; i < 16; i++) {
    this.array[i] = parseInt(this.array[i])
  }
  for (i = 0; i < 16; i++) {
    this.checkNextBlock(i)
  }
  console.log(this.array)
  this.generateBlock()
}

//transposes the array, moves left, then transposes it back
Game.prototype.moveRight = function(){
  this.transposeForRight();
  this.moveLeft();
  this.transposeForRight()
}

//same as above
Game.prototype.moveUp = function(){
  this.transposeForUp();
  this.moveLeft();
  this.transposeForUp();
  this.transposeForUp();
  this.transposeForUp();
}

Game.prototype.moveDown = function(){
  this.transposeForUp();
  this.transposeForUp();
  this.transposeForUp();
  this.moveLeft();
  this.transposeForUp();
}


Game.prototype.transposeForUp = function(){
  var original = this.array.slice();
  this.array[0] = original[3]
  this.array[1] = original[7]
  this.array[2] = original[11]
  this.array[3] = original[15]
  this.array[4] = original[2]
  this.array[5] = original[6]
  this.array[6] = original[10]
  this.array[7] = original[14]
  this.array[8] = original[1]
  this.array[9] = original[5]
  this.array[10] = original[9]
  this.array[11] = original[13]
  this.array[12] = original[0]
  this.array[13] = original[4]
  this.array[14] = original[8]
  this.array[15] = original[12]
}


Game.prototype.transposeForRight = function(){
  var original = this.array.slice();
  for (i = 0; i < 16; i++) {
    if (i % 4 === 0) {this.array[i] = original[i+3]}
    if (i % 4 === 1) {this.array[i] = original[i+1]}
    if (i % 4 === 2) {this.array[i] = original[i-1]}
    if (i % 4 === 3) {this.array[i] = original[i-3]}
  }
}


Game.prototype.keyParseRun = function(code){
  code = parseInt(code)
  if (code === 37) {this.moveLeft()}
  if (code === 38) {this.moveUp()}
  if (code === 39) {this.moveRight()}
  if (code === 40) {this.moveDown()}
}
