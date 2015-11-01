function largestOfFour(arr) {
  var answerArr =[];

  for (var i = 0; i < arr.length; i++) {
    var currentNum = 0;

    for (var n = 0; n < arr[i].length; n++) {
      var arrayNum = arr[i][n];
      if(arrayNum > currentNum) {
        currentNum = arrayNum;
      }
    }
    answerArr.push(currentNum);
  }
  return answerArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
