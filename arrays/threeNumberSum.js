/* Three Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer
representing a target sum. It should find all triplets in the array that add up to
the target sum and return a 2D array of all such triplets. The numbers in each triplet
should be listed in ascending order, and the triplets themselves should be ordered in
ascending order with respect to the numbers they hold.

If no three numbers sum up to the target, return an empty array.

O(n^2) time | O(n) space, where n is the length of the input array

*/

function threeNumberSum(array, targetSum) {
	// sort the array
	// use pointers at [i, left, and right]; sum the values
	// if sum > target, right--
	// if sum < target, left++
	// if sum === target, push sum to sums array, left++ right--

	let sums = [];
	array.sort((a, b) => a - b);
	for (let i = 0; i < array.length - 2; i++) {
		let left = i + 1;
		let right = array.length - 1;
		while (left < right) {
			let sum = array[i] + array[left] + array[right];
			if (sum < targetSum) {
				left++;
			} else if (sum > targetSum) {
				right--;
			}
			else {
				sums.push([array[i], array[left], array[right]]);
				left++;
				right--;
			}
		}
	}
	return sums;
}
