/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.
*/
function translate(str) {
  var vowels = ["a", "e", "o", "i", "u"];
  str = str.toLowerCase().split("");
  
  if(vowels.indexOf(str[0]) !== -1) {
    str = str.join("").concat("way");
  } else {
    var consonant = true;
    while(consonant) {
      str.push(str.splice(0,1)[0]);
      if (vowels.indexOf(str[0]) !== -1) {
        consonant = false;
      }
    }
    str = str.join("").concat("ay");
  } 

 return str;
}

translate("california");

