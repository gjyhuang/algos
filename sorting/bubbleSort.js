/*
Best: O(n) time | O(1) space - where n is the length of the array
Average/worst: O(n^2) time | O(1) space
*/

function bubbleSort(array) {
	for (let i = array.length; i > 0; i--) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j+1]) {
				[array[j], array[j+1]] = [array[j+1], array[j]];
			}
		}
	}
	return array;
}
