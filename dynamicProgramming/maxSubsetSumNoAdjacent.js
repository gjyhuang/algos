/* Max Subset Sum With No Adjacent Elements

Write a function that takes in an array of positive integers and returns an integer
representing the max sum of non-adjacent elements in the array. If a sum cannot be
generated, the function should return 0.

O(n) time | O(1) space, where n is the length of the input array
*/

function maxSubsetSumNoAdjacent(array) {
	//          [1, 2, 5, 3, 10, 15]
	// maxSums: [1, 2, 6, 6, 16, 21]
	// sum = array[i] + maxSums[i-2]

	// create a maxSums array by slicing the original array
	// maxSums[1] is whichever is largest of [0] or [1]
	// loop through the array, starting at idx 2
		// maxSums[i] is whichever is largest of sum or maxSums[i-1] (the previous largest sum)

  if (!array.length) return 0;
	if (array.length === 1) return array[0];
	const maxSums = array.slice();
	maxSums[1] = Math.max(maxSums[0], maxSums[1]);
	for (let i = 2; i < array.length; i++) {
		let sum = array[i] + maxSums[i-2];
		maxSums[i] = Math.max(sum, maxSums[i-1]);
	}
	return maxSums[maxSums.length - 1];
}
