/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  str = str.replace(/_/g, " ");
  
  var wordArray = str.toLowerCase().split(" ");
  var answer = wordArray[0];
  
  if(wordArray.length === 1) {
    return answer;    
  } else {
      for(var i = 1; i < wordArray.length; i++ ) {
        answer = answer + "-" + wordArray[i];
      }
  }
  
  return answer;
}

spinalCase("This Is Spinal Tap") //should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") //should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") //should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") //should return "teletubbies-say-eh-oh".
