function repeat(str, num) {
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

repeat('abc', 3);
