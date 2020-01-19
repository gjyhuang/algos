/* Subarray Sort

Write a function that takes in an array of integers that is at least 2 elements long. The function
should return an array of the starting and ending indices of the smallest subarray in the input
array that needs to be sorted in place in order for the entire input array to be sorted.
If the input array is already sorted, the function should return [-1, -1].

O(n) time | O(1) space

*/

function subarraySort(array) {
  // find the smallest and largest nums that are out of order
    // compare all nums to the ones before and after them
	let min = Infinity;
	let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
		if (i === 0 && array[i] > array[i+1]) {
			min = Math.min(min, array[i]);
		}
		if (array[i] < array[i-1]) {
			min = Math.min(min, array[i]);
		}
		if (array[i] > array[i+1]) {
			max = Math.max(max, array[i]);
		}
		if (i === array.length-1 && array[i] < array[i-1]) {
			max = Math.max(max, array[i]);
		}
	}
	if (min === Infinity) return [-1, -1];

	// find how far to the left the min needs to be sorted and how far right the max does
	// return those values

	let left = 0;
	let right = array.length-1;
	while (min >= array[left]) left++;
	while (max <= array[right]) right--;
	return [left, right];
}
