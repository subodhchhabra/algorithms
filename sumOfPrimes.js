/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.
*/

function isPrime(num) {
  if(num < 2) {
    return false;
  }
  
  for (var i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  
  return true;
}

function sumPrimes(num) {
  var primes = [];
  
  while(num > 0){
    if(isPrime(num)) {
      primes.push(num);
    } 
    num--;
  }
  
  var primesSum = primes.reduce(function(a, b) {
    return a + b;
  });
  
  return primesSum; 
}

sumPrimes(1000);
