/* Kadane's Algorithm

Write a function that takes in a non-empty array of integers and returns the max sum
that can be obtained by summing up all the numbers in a non-empty subarray of the input
array. A subarray only contains adjacent numbers.

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
