var Game = function(string){
  this.array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  this.generateBlock()
  this.generateBlock()
}

Game.prototype.toString = function(){
  return this.array.join
}

Game.prototype.toArray = function(){
  return this.array
}

Game.prototype.checkNextBlock = function(i){
  if (i % 4 === 0) {return false}
  var thisBlock = this.array[i]
  var nextBlock = this.array[i-1]

  if (nextBlock === 0){this.array[i-1]=thisBlock;
    this.array[i] = 0;
    this.checkNextBlock(i-1)
  }

  if (nextBlock === thisBlock){this.array[i-1]=nextBlock*2;
    this.array[i] = 0
  }
}

Game.prototype.generateBlock = function(){
  var zeros = []
  for (i = 0; i < 16; i++) {
    if (this.array[i] === 0)
      {zeros.push(i)}
  }
  console.log(zeros.length)
  if(zeros.length === 0){alert("fuck")}
  this.array[sample(zeros)]=sample([2,4])
}






// moveUp()
//   checkDirection()
//     combine()
//     moveleft()
//   spawnBlock()

