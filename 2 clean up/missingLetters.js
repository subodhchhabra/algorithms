/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  var firstLetterCode = str.charCodeAt(0);
  var lastLetterCode = str.charCodeAt(str.length - 1);
  var compareCode = "";
  var answer = [];
  
  while(firstLetterCode <= lastLetterCode){
    compareCode += String.fromCharCode(firstLetterCode);
    firstLetterCode++;
  }
  
  for(var i = 0; i < compareCode.length; i++){
    if(str.indexOf(compareCode[i]) === -1){
      answer.push(compareCode[i]);
    }
  } 

  if(answer.length === 0){
    return undefined;
  } else {
    return answer.join("");
  }
 }

fearNotLetter("abce");
