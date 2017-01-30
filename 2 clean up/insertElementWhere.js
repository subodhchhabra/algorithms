/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
*/

function where(arr, num) {
  var array = arr.sort(function(a, b) {
    return a - b;
  });
  var indexHold = 0;

  for(var i = 0; i < array.length; i++) {
    if(array[i] >= num){
      indexHold = i;
      break;
    }
    else {
      indexHold = array.length;
    }
  }
  return indexHold;
}

where([5, 3, 20, 3], 5);
