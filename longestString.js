function findLongestWord(str) {
  var workingStr = str.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/gi," ");
  var wordArray = workingStr.split(" ");

  var longest = 0;
  for (var i=0; i < wordArray.length; i++) {
    if (wordArray[i].length > longest) {
      longest = wordArray[i].length;
    }
  }

  return longest;
}

findLongestWord('The quick brown fox jumped over the lazy dog');


// TODO: what are the rules for words containing e.g. - inside of the word
