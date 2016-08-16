# Algorithm Practise Area
Solutions to random algorithmic problems.

## From Free Code Camp 
### Basic Algorithm Scripting
* [Reverse a String](#reverse-a-string)
* [Factorialize a Number](#factorialize-a-number)
* [Check for Palindromes](#check-for-palindromes)
* [Find the Longest Word in a String](#find-the-longest-word-in-a-string)
* [Title Case a Sentence](#title-case-a-sentence)
* [Return Largest Numbers in Arrays](#return-largest-numbers-in-arrays)
* [Confirm the Ending](#confirm-the-ending)
* [Repeat a string repeat a string](#repeat-a-string-repeat-a-string)
* [Truncate a string](#truncate-a-string)
* [Chunky Monkey](#chunky-monkey)
* [Slasher Flick](#slasher-flick)
* [Mutations](#mutations)
* [Falsy Bouncer](#falsy-bouncer)
* [Seek and Destroy](#seek-and-destroy)
* [Where do I belong](#where-do-i-belong)
* [Caesars Cipher](#caesars-cipher)

#### Reverse a String
##### Rules from [FCC](https://www.freecodecamp.com/challenges/reverse-a-string) as of 2016/08/16.

1. Reverse the provided string.
2. You may need to turn the string into an array before you can reverse it.
3. Your result must be a string.

##### My solution
```javascript
function reverseString(str) {
  var toReverse = str.split("");
  str = toReverse.reverse().join("");
  return str;
}

reverseString('hello');
// "olleh"
reverseString("Sylwia");
// "aiwlyS"
reverseString("Howdy");
// "ydwoH"
reverseString("Greetings from Earth");
// "htraE morf sgniteerG"
```
#### Factorialize a Number
##### Rules from [FCC](https://www.freecodecamp.com/challenges/factorialize-a-number) as of 2016/08/16.

1. Return the factorial of the provided integer.
2. If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
3. Factorials are often represented with the shorthand notation `n!`
4. For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`

##### My solution
```javascript
function factorialize(num) {
  var result = 1;
  while (num > 1) {
    result *= num;
    num--;
  }
  return result;
}

factorialize(5);
// 120
factorialize(10);
// 3628800
factorialize(20);
// 2432902008176640000
factorialize(0);
// 1
```
#### Check for Palindromes
##### Rules from [FCC](https://www.freecodecamp.com/challenges/check-for-palindromes) as of 2016/08/16.

1. Return true if the given string is a palindrome. Otherwise, return false.
2. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
3. You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
4. We'll pass strings with varying formats, such as `"racecar"`, `"RaceCar"`, and `"race CAR"` among others.
5. We'll also pass strings with special symbols, such as `"2A3*3a2"`, `"2A3 3a2"`, and `"2_A3*3#A2"`.

##### My solution
```javascript
function palindrome(str) {
  var workingStr = str.toLowerCase();
  // remove spaces
  workingStr = workingStr.replace(/\s+/gi, "");
  // remove non-alphabetic characters
  workingStr = workingStr.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/gi,""); 

  str = workingStr;
  workingStr = workingStr.split("").reverse().join("");

  return str === workingStr;
}

palindrome("eye");
// true
palindrome("_eye");
// true
palindrome("race car");
// true
palindrome("not a palindrome");
// false
palindrome("A man, a plan, a canal. Panama");
// true
palindrome("never odd or even");
// true
palindrome("nope");
// false
palindrome("almostomla");
// false
palindrome("My age is 0, 0 si ega ym.");
// true
palindrome("1 eye for of 1 eye.");
// false
palindrome("0_0 (: /-\ :) 0-0");
// true
palindrome("five|\_/|four");
// false
```
#### Find the Longest Word in a String
##### Rules from [FCC](https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string) as of 2016/08/16.

1. Return the length of the longest word in the provided sentence.
2. Your response should be a number.

##### My solution
```javascript
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

findLongestWord("The quick brown fox jumped over the lazy dog");
// 6
findLongestWord("May the force be with you");
// 5
findLongestWord("Google do a barrel roll");
// 6
findLongestWord("What is the average airspeed velocity of an unladen swallow");
// 8
findLongestWord("What if we try a super-long word such as otorhinolaryngology");
// 19
```

#### Title Case a Sentence
##### Rules from [FCC](https://www.freecodecamp.com/challenges/title-case-a-sentence) as of 2016/08/16.

1. Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
2. For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

##### My solution
```javascript
function titleCase(str) {
  var workingStr = str.split(" ");

  for (var i = 0; i < workingStr.length; i++) {
    workingStr[i] = workingStr[i].charAt(0).toUpperCase() + workingStr[i].slice(1).toLowerCase();
  }

  str = workingStr.join(" ");

  return str;
}
titleCase("I'm a little tea pot");
// "I'm A Little Tea Pot"
titleCase("sHoRt AnD sToUt");
// "Short And Stout"
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
// "Here Is My Handle Here Is My Spout"
```



#### Return Largest Numbers in Arrays
##### Rules from [FCC](https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays) as of 2016/08/16.

1. Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
2. Remember, you can iterate through an array with a simple for loop, and access each member with array syntax `arr[i]`.

##### My solution
```javascript
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

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// [27,5,39,1001]
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
// [9, 35, 97, 1000000]
```

#### Confirm the Ending
##### Rules from [FCC](https://www.freecodecamp.com/challenges/confirm-the-ending) as of 2016/08/16.

1. Check if a string (first argument, `str`) ends with the given target string (second argument, `target`).
2. This challenge can be solved with the `.endsWith()` method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

##### My solution
```javascript
function confirmEnding(str, target) {
  var checkStr = str.slice((target.length) * -1);
  return checkStr === target;
}

confirmEnding("Bastian", "n");
// true
confirmEnding("Connor", "n");
// false
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
// false
confirmEnding("He has to give me a new name", "name");
// true
confirmEnding("Open sesame", "same");
// true
confirmEnding("Open sesame", "pen");
// false
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");
// false

```
#### Repeat a string repeat a string
##### Rules from [FCC](https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string) as of 2016/08/16.

1. Repeat a given string (first argument) `num` times (second argument). Return an empty string if `num` is not a positive number.

##### My solution
```javascript
function repeatStringNumTimes(str, num) {
  // repeat after me
  var holderStr = "";
  
  if(num <= 0) {
    return holderStr; 
  }
  
  else {
    while(num > 0) {
      holderStr += str;
      num--;
    }
  return holderStr;    
  }
}

repeatStringNumTimes("*", 3);
// "***"
repeatStringNumTimes("abc", 3);
// "abcabcabc"
repeatStringNumTimes("abc", 4);
// "abcabcabcabc"
repeatStringNumTimes("abc", 1);
// "abc"
repeatStringNumTimes("*", 8);
// "********"
repeatStringNumTimes("abc", -2);
// ""
```
#### Truncate a string
##### Rules from [FCC](https://www.freecodecamp.com/challenges/truncate-a-string) as of 2016/08/16.

1. Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a `...` ending.
2. Note that inserting the three dots to the end will add to the string length.
3. However, if the given maximum string length `num` is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

##### My solution
```javascript
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num >= str.length) {
    return str;
  } else if(str.length > num && num > 3){
    var maxLength = num - 3; // for the added "..."
    str = str.slice(0,maxLength) + "..."; 
  } else {
    str = str.slice(0, num).concat("...");
  }

  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
// "A-tisket..."
truncateString("Peter Piper picked a peck of pickled peppers", 14);
// "Peter Piper..."
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
// "A-tisket a-tasket A green and yellow basket"
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
// "A-tisket a-tasket A green and yellow basket"
truncateString("A-", 1);
// "A..."
truncateString("Absolutely Longer", 2);
// "Ab..."
```
#### Chunky Monkey
##### Rules from [FCC](https://www.freecodecamp.com/challenges/chunky-monkey) as of 2016/08/16.

1. Write a function that splits an array (first argument) into groups the length of `size` (second argument) and returns them as a two-dimensional array.

##### My solution
```javascript
function chunkArrayInGroups(arr, size) {
  var numFullSizeArr = Math.floor(arr.length/size);
  var arrayLength = arr.length;
  var answerArr = [];

  for(var i = 0; i <= numFullSizeArr - 1; i++ ) {
    var subArray = [];
    for(var n = 0; n < size; n++) {
      subArray.push(arr.shift());
    }
    answerArr.push(subArray);
  }
  if(arr.length !== 0) {
    answerArr.push(arr);
  }

  return answerArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
// [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
// [[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
// [[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
// [[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
// [[0, 1, 2], [3, 4, 5], [6]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
// [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
// [[0, 1], [2, 3], [4, 5], [6, 7], [8]]
```
#### Slasher Flick
##### Rules from [FCC](https://www.freecodecamp.com/challenges/slasher-flick) as of 2016/08/16.

1. Return the remaining elements of an array after chopping off `n` elements from the head.
2. The head means the beginning of the array, or the zeroth index.

##### My solution
```javascript
function slasher(arr, howMany) {
  arr = arr.splice(howMany);
  return arr;
}

slasher([1, 2, 3], 2);
// [3]
slasher([1, 2, 3], 0);
// [1, 2, 3]
slasher([1, 2, 3], 9);
// []
slasher([1, 2, 3], 4);
// []
slasher(["burgers", "fries", "shake"], 1);
// ["fries", "shake"]
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
// ["cheese", 4]
```
#### Mutations
##### Rules from [FCC](https://www.freecodecamp.com/challenges/mutations) as of 2016/08/16.

1. Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
2. For example, `["hello", "Hello"]`, should return true because all of the letters in the second string are present in the first, ignoring case.
3. The arguments `["hello", "hey"]` should return false because the string "hello" does not contain a "y".
4. Lastly, `["Alien", "line"]`, should return true because all of the letters in "line" are present in "Alien".

##### My solution
```javascript
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

mutation(["hello", "hey"]);
// false
mutation(["hello", "Hello"]);
// true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
// true
mutation(["Mary", "Army"]);
// true
mutation(["Mary", "Aarmy"]);
// true
mutation(["Alien", "line"]);
// true
mutation(["floor", "for"]);
// true
mutation(["hello", "neo"]);
// false
mutation(["voodoo", "no"]);
// false
```
#### Falsy Bouncer
##### Rules from [FCC](https://www.freecodecamp.com/challenges/falsy-bouncer) as of 2016/08/16.

1. Remove all falsy values from an array.
2. Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.

##### My solution
```javascript
function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
// [7, "ate", 9]
bouncer(["a", "b", "c"]);
// ["a", "b", "c"]
bouncer([false, null, 0, NaN, undefined, ""]);
// []
bouncer([1, null, NaN, 2, undefined]);
// [1, 2]
```
#### Seek and Destroy
##### Rules from [FCC]() as of 2016/08/16.

1. You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

##### My solution
```javascript
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
// [1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
// [1, 5, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
// [1]
destroyer([2, 3, 2, 3], 2, 3);
// []
destroyer(["tree", "hamburger", 53], "tree", 53);
// ["hamburger"]
```

#### Where do I belong
##### Rules from [FCC](https://www.freecodecamp.com/challenges/where-do-i-belong) as of 2016/08/16.

1. Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
2. For example, `getIndexToIns([1,2,3,4], 1.5)` should return `1` because it is greater than `1` (index 0), but less than `2` (index 1).
3. Likewise, `getIndexToIns([20,3,5], 19)` should return `2` because once the array has been sorted it will look like `[3,5,20]` and `19` is less than `20` (index 2) and greater than `5` (index 1).

##### My solution
```javascript

TODO: challange change, redo


getIndexToIns([10, 20, 30, 40, 50], 35);
// 3
getIndexToIns([10, 20, 30, 40, 50], 30);
// 2
getIndexToIns([40, 60], 50);
// 1
getIndexToIns([3, 10, 5], 3);
// 0
getIndexToIns([5, 3, 20, 3], 5);
// 2
getIndexToIns([2, 20, 10], 19);
// 2
getIndexToIns([2, 5, 10], 15);
// 3
```
#### Caesars Cipher
##### Rules from [FCC](https://www.freecodecamp.com/challenges/caesars-cipher) as of 2016/08/16.

1. One of the simplest and most widely known `ciphers` is a `Caesar cipher`, also known as a `shift cipher`. In a `shift cipher` the meanings of the letters are shifted by some set amount.
2. A common modern use is the `ROT13` cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
3. Write a function which takes a `ROT13` encoded string as input and returns a decoded string.
4. All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

##### My solution
```javascript
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

rot13("SERR PBQR PNZC");
// "FREE CODE CAMP"
rot13("SERR CVMMN!");
// "FREE PIZZA!"
rot13("SERR YBIR?");
// "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
// "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
```