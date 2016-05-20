function updateInventory(arr1, arr2) {
    var currentNum = [];
    var currentEl = [];
    var finalInv = [];
    var flatFinal = [];
  
    for(var i=0; i < arr1.length; i++) {
      currentNum.push(arr1[i][0]); 
      currentEl.push(arr1[i][1]);
    }
    // console.log(currentNum, currentEl);
     
    // Add stuff from new inventory
    for(i=0;i < arr2.length; i++) {
      var newEl = arr2[i][1];
      // console.log(newEl);
      var oldIdx = currentEl.indexOf(newEl);
      // console.log(oldIdx);
      if(oldIdx > -1) { // is it in arr1 (stripped to elements)
        // if it is there update values of original Array
        var element = [(currentNum[oldIdx] + arr2[i][0]), newEl];
        finalInv.push(element);
        // console.log(currentNum[oldIdx]);
        // console.log("__________________");
        // console.log(finalInv);
      } else {
        finalInv.push([arr2[i][0], newEl]);
        // console.log("__________________");
        // console.log(finalInv);
      }
    }  
  
    flatFinal = [].concat.apply([], finalInv);
  
    // Add stuff from original array
    for(var j=0; j < currentEl.length; j++) {
      var elIdx = flatFinal.indexOf(currentEl[j]);
      if(elIdx === -1) {
        var pushEl = [currentNum[j], currentEl[j]];
        finalInv.push(pushEl);
      }  
    }
  
    // TODO: sort
    // split into two again 
    var finalNums = [];
    var finalEls = [];
    var finalArray = [];
    
    for(var k=0; k < finalInv.length; k++) {
      finalNums.push(finalInv[k][0]); 
      finalEls.push(finalInv[k][1]);
    }
    
    // make a copy of elements
    var finalElsCopy = finalEls.slice();
    
    // sort the copy
    finalElsCopy = finalElsCopy.sort();
    console.log(finalElsCopy);
    console.log(finalEls);
    // recreate it looking for index in the split, and grabbing the element to push to in the number array
  
  for(var m = 0; m < finalElsCopy.length; m++) {
    var lastIdx = finalEls.indexOf(finalElsCopy[m]);
    console.log(lastIdx);
    finalArray.push([finalNums[lastIdx], finalEls[lastIdx]]);
  }
   
   
  return finalArray;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
