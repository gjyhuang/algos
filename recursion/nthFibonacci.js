/* Nth Fibonacci

Write a function that takes in an integer n and returns the nth Fibonacci number.
(The first number of the Fibonacci sequence is 0, the second is 1, the nth is
  the sum of (n-1)th and (n-2)th numbers.)

  Sample input: 3
  Sample output: 1 (0, 1, 1)

  Sample input: 6
  Sample output: 5 (0, 1, 1, 2, 3, 5)
*/

function getNthFib(n, sum = 0, prev = 1) {
  if (n <= 1) return sum;
	return getNthFib(n-1, prev+sum, sum);
}

/*
When n is 1: return sum -> 0

When n is 2: // (n = 2, sum = 0, prev = 1)
return getNthFib(2-1, 1+0, 0) -> 1
-------------------------------------------------- prev defaults to 1

When n is 3: (n = 3, sum = 1, prev = 1)
return getNthFib(3-1, 1+0, 1) -> 1
------------------------------------ prev becomes 0, but sum is now 1

When n is 4: (n = 4, sum = 1, prev = 1)
return getNthFib(4-1, 1+1, 1) -> 2

When n is 5: (n = 5, sum = 2, prev = 1)
return getNthFib(5-1, 1+2, 2) -> 3

When n is 6: (n = 6, sum = 3, prev = 2)
return getNthFib(6-1, 2+3, 3) -> 5

When n is 7: (n = 7 sum = 5, prev = 3)
return getNthFib(7-1, 3+5, 5) -> 8
*/
