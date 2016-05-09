function rot13(str) { // LBH QVQ VG!
  var strArray = str.split("");
  var original = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var coded = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
  var answer = [];

  for(var i = 0; i < strArray.length; i++) { // i is the position of current element
    var position = coded.indexOf(strArray[i]);
    if(position > -1 ){
      answer.push(original[position]);
    } else {
      answer.push(strArray[i]);    
    }
  }

  answer = answer.join("");
  return answer;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");


 
// Input	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.split("");
// Output	"NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".split("");