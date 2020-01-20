/* Merge Sort

Write a function that takes in an array of integers and returns a sorted version of the
array. Use merge sort.

O(n log(n)) time | O(n) space

*/

function mergeSort(array) {
  if (array.length <= 1) return array;

	const mid = Math.floor(array.length/2);
	const left = mergeSort(array.slice(0, mid));
	const right = mergeSort(array.slice(mid));
	return merge(left, right);
}

function merge(arr1, arr2) {
	const resultArr = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			resultArr.push(arr1[i]);
			i++;
		} else {
			resultArr.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		resultArr.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		resultArr.push(arr2[j]);
		j++;
	}
	return resultArr;
}
