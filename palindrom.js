function palindrome(str) {
  // Good luck!
  var workingStr = str.toLowerCase();
  workingStr = workingStr.replace(/\s+/gi, ""); // remove spaces
  workingStr = workingStr.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/gi,""); // remove non-alphabetic characters

  str = workingStr;
  workingStr = workingStr.split("").reverse().join("");

  return str === workingStr;
}

palindrome("eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
