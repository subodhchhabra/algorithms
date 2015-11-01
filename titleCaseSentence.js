function titleCase(str) {
  var workingStr = str.split(" ");

  for (var i = 0; i < workingStr.length; i++) {
    workingStr[i] = workingStr[i].charAt(0).toUpperCase() + workingStr[i].slice(1).toLowerCase();
  }

  str = workingStr.join(" ");

  return str;
}


titleCase("I'm a little tea pot");
