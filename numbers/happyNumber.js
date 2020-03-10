/* Happy Number

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Input: 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

*/

function isHappy(n) {
  const cache = {};
  cache[n] = true;
  while (true) {
    if (n === 1) return true;
    n = sumDigits(n);
    if (n in cache) return false;
    cache[n] = true;
  }
};

function sumDigits(n) {
    let sum = 0;
    while(n > 0) {
        sum += Math.pow(n % 10, 2);
        n = Math.floor(n / 10);
    }
    return sum;
}
