/*
Best/average/worst: O(n^2) time | O(1) space, where n is the length of the array
*/

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let minIdx = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[minIdx]) minIdx = j;
		}
		if (i !== minIdx) {
			[array[i], array[minIdx]] = [array[minIdx], array[i]];
		}
	}
	return array;
}
