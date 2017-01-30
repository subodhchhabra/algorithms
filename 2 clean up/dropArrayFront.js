/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
*/

function drop(arr, func) {
  var answer = [];
  var i = 0;

  while(i < arr.length){
    if(!func(arr[i])){
      arr.shift();
    } else {
      break;
    }
  }
  return arr;
}

drop([1, 2, 3, 9, 2], function(n) {return n > 2;});

