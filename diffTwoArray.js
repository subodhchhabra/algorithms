/*
Compare two arrays and return a new array with any items not found in both of the original arrays.
*/

function diff(arr1, arr2) {
  var arr1Copy = arr1;
  
  
  for(var i = arr1.length - 1 ; i >= 0; i--) {
    var element = arr1[i];
    
    while (arr2.indexOf(element) !== -1 ) {
      var idx = arr2.indexOf(element);
      arr2.splice(idx, 1);
      arr1Copy.splice(i, 1);
    }
  }
  return arr1Copy.concat(arr2);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
diff(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])
diff([1, 2, 3, 5], [1, 2, 3, 4, 5])
diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4])
diff([], ["snuffleupagus", "cookie monster", "elmo"])
diff([1, "calf", 3, "piglet"], [7, "filly"])
