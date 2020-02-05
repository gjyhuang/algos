/* Largest Range

Write a function that takes in an array of integers and returns an array of length
2 representing the largest range of numbers contained in the array. The first number
in the output should be the first in the range, and the second number the last.

O(n) time | O(n) space

[5, 6, 7] // [5, 7]
[1, 2, 8, 5, 7, 6, 12, 11, 4, 3] // [1, 8] (the numbers 1 through 8 are in the array)
[8, 4, 2, 10, 3, 6, 7, 9, 1] // [6, 10]

 F
[8, 4, 2, 10, 3, 6, 7, 9, 1]   // loop through array, find 8, mark it false in hash table
 F                  F  F       // keep going to its left and right until not in table
[8, 4, 2, 10, 3, 6, 7, 9, 1]
 F         F     F  F  F       // 6-10, range of 5 - set to longest range and save the two outermost nums
[8, 4, 2, 10, 3, 6, 7, 9, 1]
 -  F  F   -  F  -  -  -  F    // range of 4, no other numbers left in the hash table
[8, 4, 2, 10, 3, 6, 7, 9, 1]

*/

function largestRange(array) {
  // store every number in a hash table
	// for each number, check if the number immediately less than and greater than is in the hash table
	// mark off each number as they are found
	// store the array, comparing future generated arrays' lengths
	const nums = {};
	let resultPair = [];
	let longestRange = 0;
	for (const num of array) {
		nums[num] = true;
	}
	for (const num of array) {
		if (!nums[num]) continue;
		nums[num] = false;
		let currLength = 1;
		let left = num - 1;
		let right = num + 1;
		while (left in nums) {
			nums[left] = false;
			currLength++;
			left--;
		}
		while (right in nums) {
			nums[right] = false;
			currLength++;
			right++;
		}
		if (currLength > longestRange) {
			longestRange = currLength;
			resultPair = [left+1, right-1]
		}
	}
	return resultPair;
}
