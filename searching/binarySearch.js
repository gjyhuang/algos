/* Binary Search

Write a function that takes in a sorted array of integers as well as a target integer.
The function should use the Binary Search algorithm to find whether the target number
is contained in the array and should return its index if so; otherwise, return -1.

*/

function binarySearch(array, target) {
  // set pointers to the start, end, and mid of the array
	// if the value is array[mid], return mid
		// if it's lower, reassign end to mid-1 and recalculate mid
		// vice versa for if it's higher
	// keep going untnil the value is found or the array is exhausted

	let start = 0;
	let end = array.length - 1;
	while (start <= end) {
		const mid = Math.floor((start + end) / 2);
		if (array[mid] > target) {
			end = mid - 1;
		} else if (array[mid] < target) {
			start = mid + 1;
		} else return mid;
	}
	return -1;
}
