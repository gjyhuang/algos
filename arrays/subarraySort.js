/* Subarray Sort

Write a function that takes in an array of integers that is at least 2 elements long. The function
should return an array of the starting and ending indices of the smallest subarray in the input
array that needs to be sorted in place in order for the entire input array to be sorted.
If the input array is already sorted, the function should return [-1, -1].

O(n) time | O(1) space

  [1,2,4,7,10,11,7,12,6,7,16,18,19] // [3,9] (7,10,7,12,6,7 need to be sorted)
out of order:  + -  + -

min value that's out of order: 6 (is less than array[i-1])
max value that's out of order: 12 (is greater than array[i+1])

where in the array should 6 be - idx 3 --> loop through until after 4
                         12 be - idx 9 --> loop through until before 16

*/

function subarraySort(array) {
  // find the smallest and largest nums that are out of order
		// initialize them to infinity and -infinity
    // compare each value to the one before it or after it
    // if vals are still infinity, the array is already sorted

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
    // aka while min is >= array[left], increment left; vice versa for right
	// return [left, right]

	let left = 0;
	let right = array.length-1;
	while (min >= array[left]) left++;
	while (max <= array[right]) right--;
	return [left, right];
}
