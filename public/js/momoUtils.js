var getRandom = function (limitOrMin, limit_) {
  var min, limit;
  if (arguments.length > 1) {
    min = limitOrMin;
    limit = limit_;
  } else {
    min = 0;
    limit = limitOrMin;
  }
  return Math.floor(Math.random() * (limit - min)) + min;
};

var sample = function(array) {
 var index = getRandom(0, array.length);
 return array[index];
};
