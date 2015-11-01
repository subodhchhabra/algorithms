/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
*/

function chunk(arr, size) {
  var numFullSizeArr = Math.floor(arr.length/size);
  var arrayLength = arr.length;
  var answerArr = [];

  for(var i = 0; i <= numFullSizeArr - 1; i++ ) {
    var subArray = [];
    for(var n = 0; n < size; n++) {
      subArray.push(arr.shift());
    }
    answerArr.push(subArray);
  }
  if(arr.length !== 0) {
    answerArr.push(arr);
  }

  return answerArr;
}

chunk(['a', 'b', 'c', 'd'], 2);
