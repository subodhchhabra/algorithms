/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamroller(arr) {
  var answerArray = [];

  var roller = function(arrElement) {
    if (!Array.isArray(arrElement)) {
      answerArray.push(arrElement);
    } else {
      for (var i = 0; i < arrElement.length; i++) {
        roller(arrElement[i]);
      }
    }
  };

  
  for (var j = 0; j < arr.length; j++) {
    roller(arr[j]);
  }

  return answerArray;
}

steamroller([[["a"]], [["b"]]]) //should return ["a", "b"].
steamroller([1, [2], [3, [[4]]]]) //should return [1, 2, 3, 4].
steamroller([1, [], [3, [[4]]]]) //should return [1, 3, 4].
steamroller([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].

