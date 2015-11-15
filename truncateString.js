/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.
*/
function truncate(str, num) {
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

truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

