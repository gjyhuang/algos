/* Smallest Difference

Write a function that takes in two non-empty arrays of integers. It should find
the pair of numbers (one from each array) whose absolute difference is closest to
zero. Assume there will only be one pair with the smallest difference.

O(n log(n) + m log(m)) time | O(1) space, where n is the length of array 1 and
m the length of array 2

*/

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
	let idxOne = 0;
	let idxTwo = 0;
	let smallestDiff = Infinity;
	let currDiff = Infinity;
	let smallestPair = [];
	while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
		let currOne = arrayOne[idxOne];
		let currTwo = arrayTwo[idxTwo];
		if (currOne < currTwo) {
			currDiff = currTwo - currOne;
			idxOne++;
		} else if (currTwo < currOne) {
			currDiff = currOne - currTwo;
			idxTwo++;
		} else {
			return [currOne, currTwo];
		}
		if (currDiff < smallestDiff) {
			smallestDiff = currDiff;
			smallestPair = [currOne, currTwo];
		}
	}
	return smallestPair;
}

