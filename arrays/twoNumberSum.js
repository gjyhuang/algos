/*Two Number Sum

Write a function that takes in a non-empty array of distinct integers and a target sum.
If any two numbers in the input array add up to the target sum, the function should return them in an array.
If no two numbers add up to the target sum, the function should return an empty array.
Only return at most one pair of numbers which add up to the target sum.


Best: O(n) time | O(n) space - where n is the length of the array
*/

function twoNumberSum(array, targetSum) {
  const nums = {};
	for (let i = 0; i < array.length; i++) {
		let curr = array[i];
		if (nums[curr]) {
			return [nums[curr], curr];
		}
		else {
			nums[targetSum-curr] = curr;
		}
	}
	return [];
}
