/* Kth Smallest Element In An Array

Write a function that takes in an array of distinct integers as well as an int k, and
returns the kth smallest number in that array in O(n) time. The array isn't necessarily sorted.

Best, avg: O(n) time | O(1) space
Worst: O(n^2) time | O(1) space

[8, 5, 2, 9, 7, 6, 3], 3
 p = 8
 s  i
 8, 5, 2, 9, 7, 6, 3
       s  i              9 > 8, i++
 8, 5, 2, 9, 7, 6, 3
       s     i           7 < 8, s++ and then swap i and s
 8, 5, 2, 9, 7, 6, 3
          s  i
 8, 5, 2, 7, 9, 6, 3
                s, i     swap s and i - if s === k-1, return the num
 8, 5, 2, 7, 6, 3, 9     else, run quick sort on one half or the other
 3, 5, 2, 7, 6, 8, 9     depending on if s >= k-1 or s < k-1

 3, 5, 2, 7, 6
 2, 3, 5, 7. 6       s = 1, so run on the last half

       5, 7, 6
			 5, 6, 7       s = 2, aka k-1 -> return 5

	// use quick sort
		// set the pivot point to the starting num
		// start looping at i = 1
		// when the pivot ends up at index k-1, return that number
*/

function quickselect(array, k) {
	if (k > array.length) return -1;
	return pivot(array, k, 0, array.length-1);
}

function pivot(array, k, start, end) {
	const targetIdx = k-1;
	while (start <= end) {
	let pivot = array[start];
	let swapIdx = start;
		for (let i = start + 1; i <= end; i++) {
			if (pivot > array[i]) {
				swapIdx++;
				swap(array, swapIdx, i);
			}
		}
		if (swapIdx === k-1) return array[start];
		swap(array, swapIdx, start);
		if (swapIdx < k-1) {
			start = swapIdx + 1;
		} else {
			end = swapIdx - 1;
		}
	}
}

function swap(arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}
