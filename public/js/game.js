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
//if this block is the edge block return false
  if (i % 4 === 0) {return false}
  var thisBlock = this.array[i]
  var nextBlock = this.array[i-1]
//if the next block is 0 it takes this value and this value becomes 0 then runs again recursively on the next block
  if (nextBlock === 0){this.array[i-1]=thisBlock;
    this.array[i] = 0;
    this.checkNextBlock(i-1)
  }
//if the next block is the same value this becomes 0 and the next block gets doubled and stringified so it can't be altered in case of a 0224 row. If it was not stringified 0224 would become 8000 but it should be 4400
  else if (nextBlock === thisBlock){this.array[i-1]=(nextBlock*2).toString();
    this.array[i] = 0
  }
}

//Currently just ends when all blocks are tied up. Could write something that checks all neighboring blocks when the board is full and returns true when it finds one
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


