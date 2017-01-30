/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pair(str) {
  var answer = [];
  var strArray = str.split("");

  while (strArray.length !== 0) {
    switch(strArray.splice(0,1)[0]) {
      case "A":
          answer.push(["A", "T"]);
          break;
      case "T":
          answer.push(["T", "A"]);
          break;
      case "G":
          answer.push(["G", "C"]);
        break;
      case "C":
          answer.push(["C", "G"]);
          break;
    }
  }
  return answer;
}

pair("GCG");
