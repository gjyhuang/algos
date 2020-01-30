/* Quick Sort

Write a function that takes in an array of integers and returns a sorted version of that array, using quick sort.

[4,6,9,1,2,5,3] // [3,2,1,4,6,9,5]
       4
 3,2,1,  6,9,5
     3     6
 2,1     5   9
   2
 1

[4,6,9,1,2,5,3]
 4 = pivot
 s
   i             4 < 6
 4 6,9,1,2,5,3
 s   i           4 < 9
 4 6,9,1,2,5,3
 s     i         4 > 1 // s++, then swap nums at s and i
 4 6,9,1,2,5,3
   s   i
 4 1,9,6,2,5,3
   s     i       4 > 2 //
 4 1,9,6,2,5,3
     s   i
 4 1,2,6,9,5,3
     s     i     4 < 5
 4 1,2,6,9,5,3
     s       i   4 > 3 //
 4 1,2,6,9,5,3
       s     i
 4 1,2,3,9,5,6
                // swap pivot with swapIdx
 3,1,2,4,9,5,6

*/

function quickSort(array, left = 0, right = array.length-1) {
  if (left < right) {
		let pivotIndex = pivot(array, left, right);
		quickSort(array, left, pivotIndex-1);
		quickSort(array, pivotIndex+1, right);
	}
	return array;
}

function swap(array, i, j) {
	[array[i], array[j]] = [array[j], array[i]];
}

function pivot(array, start = 0, end = array.length-1) {
	// make pivot the starting element
	let pivot = array[start];
	let swapIdx = start;
	for (let i = start + 1; i <= end; i++) {
		if (pivot > array[i]) {
			swapIdx++;
			swap(array, i, swapIdx)
		}
	}
	// swap the pivot from the start with the swap point
	swap(array, start, swapIdx);
	return swapIdx;
}
