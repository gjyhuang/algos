/*
Best: O(n) time | O(1) space - where n is the length of the array
Average/worst: O(n^2) time | O(1) space
*/

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let j = i;
		while (j > 0 && arr[j] < arr[j-1]) {
			swap(j, j-1, arr);
			j--;
		}
	}
	return arr;
}

function swap(i, j, arr) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}
