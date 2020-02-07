/* Kadane's Algorithm

Write a function that takes in a non-empty array of integers and returns the max sum
that can be obtained by summing up all the numbers in a non-empty subarray of the input
array. A subarray only contains adjacent numbers.

[3, 5,-9, 1, 3,-2, 3, 4, 7, 2,-9, 6, 3, 1,-5, 4] // 19 ([1, 3,-2, 3, 4, 7, 2,-9, 6, 3, 1])


m = the current max ending here
 currMax = 3, m = 3
    i
[3, 5,-9, 1, 3,-2, 3, 4, 7, 2,-9, 6, 3, 1,-5, 4]
 currMax = 8, m = 8
       i   // i = 9, m -> Math.max(-9, -1 (-9 + 8))
[3, 5,-9, 1, 3,-2, 3, 4, 7, 2,-9, 6, 3, 1,-5, 4]
 currMax = 8, m = -1
          i   // i = 1, m -> Math.max(1, 0 (-1 + 1))
[3, 5,-9, 1, 3,-2, 3, 4, 7, 2,-9, 6, 3, 1,-5, 4]

// keep track of a current max (sum)
// while iterating through the loop, keep track of the max that ends at i-1
	// this max is the largest of this current max plus num at i, or num at i
	// the current max is the largest of the max calculated above or the current max
// return current max at the end

*/

function kadanesAlgorithm(array) {
	let maxThatEndsHere = array[0];
	let currMax = array[0];
  for (let i = 1; i < array.length; i++) {
		const num = array[i];
		maxThatEndsHere = Math.max(num, maxThatEndsHere + num);
		currMax = Math.max(maxThatEndsHere, currMax);
	}
	return currMax;
}
