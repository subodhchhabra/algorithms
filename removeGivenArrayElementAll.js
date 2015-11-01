/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  var initArray = args[0];
  var eliminate = args.slice(1);
  var eliminateNum = eliminate.length;
  var finalArray;

  function containsValue(value) {
    if(eliminate.indexOf(value) === -1){
      return true;
    }
  }

  for(var i=0; i<eliminateNum; i++) {
    finalArray = initArray.filter(containsValue);
  }

  return finalArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
