### Practise area
Solutions to random algorithmic problems

#### [Roman Numerals](romanNumerals.js)
Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case.

```
convert(3999);
=> "MMMDCMXCIX"
```
#### [Flatten Array With Recursion](flattenArrayWithRecursion.js)
Flatten a nested array. You must account for varying levels of nesting.

```
steamroller([1, {}, [3, [[4]]]]);
=> [1, {}, 3, 4].
```

#### [argumentsOptional.js](argumentsOptional.js)
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

#### [binary2ASCII.js](binary2ASCII.js)
Return an English translated sentence of the passed binary string.
```
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

=> "Aren't bonfires fun!?"
```

#### [checkStrEnd.js](checkStrEnd.js)

#### [diffTwoArray.js](diffTwoArray.js)
Compare two arrays and return a new array with any items not found in both of the original arrays.
#### [dropArrayFront.js](dropArrayFront.js)
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
#### [factorial.js](factorial.js)

#### [insertElementWhere.js](insertElementWhere.js)
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
#### [largestNumInSubarray.js](largestNumInSubarray.js)
#### [longestString.js](longestString.js)
#### [matchingObjectProperty.js](matchingObjectProperty.js)
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
#### [missingLetters.js](missingLetters.js)
Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.
#### [oddFibonacci.js](oddFibonacci.js)
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
#### [PairDNA.js](PairDNA.js)
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array. Base pairs are a pair of AT and CG. Match the missing element to the provided character. Return the provided character as the first element in each array.
#### [palindrom.js](palindrom.js)
#### [pigLatin.js](pigLatin.js)
Translate the provided string to pig latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end.
#### [removeArrayElements.js](removeArrayElements.js)
Remove all falsy values from an array. Falsy values in javascript are false, null, 0, "", undefined, and NaN.
#### [removeArrayFrontElements.js](removeArrayFrontElements.js)
#### [removeGivenArrayElementAll.js](removeGivenArrayElementAll.js)
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
#### [repeatString.js](repeatString.js)
#### [reverseString.js](reverseString.js)

#### [searchAndReplaceString.js](searchAndReplaceString.js)
Perform a search and replace on the sentence using the arguments provided and return the new sentence. First argument is the sentence to perform the search and replace on. Second argument is the word that you will be replacing (before). Third argument is what you will be replacing the second argument with (after). NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
#### [searchObjectsKey.js](searchObjectsKey.js)
Check if the predicate (second argument) is truthy on all elements of a collection (first argument). Remember, you can access object properties through either dot notation or [] notation.
#### [spinalTapCase.js](spinalTapCase.js)
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
#### [splitArrayIntoSmaller.js](splitArrayIntoSmaller.js)
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
#### [stringOneinStringTwo.js](stringOneinStringTwo.js)
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
#### [sumNumRange.js](sumNumRange.js)
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
#### [sumOfPrimes.js](sumOfPrimes.js)
Sum all the prime numbers up to and including the provided number.
#### [titleCaseSentence.js](titleCaseSentence.js)

#### [truncateString.js](truncateString.js)
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.
#### [truthInArray.js](truthInArray.js)
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

#### [caesarsCipher.js](caesarsCipher.js)
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

#### [phoneNumUSA.js](phoneNumUSA.js)
Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
```
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
```
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.