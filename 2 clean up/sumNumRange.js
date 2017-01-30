// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
  arr.sort(function(a,b) {
    return a - b;
  });
  var loNum = arr[0];
  var hiNum = arr[1];
  var sum = 0;
  
  while (loNum <= hiNum) {
    sum += loNum;
    loNum++;
  }
  
  return sum;
}

sumAll([1, 4]);
