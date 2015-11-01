/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.
*/

function truncate(str, num) {
  if(str.length > num){
    var maxLength = num - 3; // for the "..."
    str = str.slice(0,maxLength) + "...";
  }

  return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
