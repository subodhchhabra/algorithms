function reverseString(str) {
  var toReverse = str.split("");
  str = toReverse.reverse().join("");
  return str;
}

reverseString('hello');
