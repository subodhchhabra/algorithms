/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and it's value, that was passed on as the second argument.
*/

function where(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  
  for (var i = 0; i < collection.length; i++) {
    var currentObject = collection[i];
    var colSource; 
        // equality holder between col-lection and source
    
    for(var j = 0; j < keys.length; j++){ 
      if(currentObject[keys[j]] === source[keys[j]]) {
        colSource = true;
      } else {
        colSource = false;
        break;
      }
    }
    if (colSource) {
      arr.push(currentObject);
    }
  }
  return arr;
}

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
