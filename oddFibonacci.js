/*
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.
*/

function sumFibs(num) {
  var fibOne = 1;
  var fibTwo = 1;
  var fibSum = 0;
  
  while (fibOne <= num) {
    if (fibOne%2 !== 0 && fibOne <= num) {
      fibSum += fibOne;
    } 
    if (fibTwo%2 !== 0 && fibTwo <= num) {
      fibSum += fibTwo;
    }

    fibOne = fibOne + fibTwo;
    fibTwo = fibOne + fibTwo;

  }
  return fibSum;
}

sumFibs(4000000);

