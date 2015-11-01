/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
*/

function mutation(arr) {
  var first = arr[0].toLowerCase();
  var last = arr[1].toLowerCase();
  var answer = true;

  for(var i = 0; i < last.length; i++) {
    console.log(first.indexOf(last[i]));
    if(first.indexOf(last[i]) === -1) {
      answer = false;
      console.log(first.indexOf(last[i]));
    }
  }

  return answer;
}

mutation(['hello', 'hey']);
