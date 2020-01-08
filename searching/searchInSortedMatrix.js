/* Search In Sorted Matrix

You are given a 2D array (matrix) of distinct integers where each row and column
are sorted. The height and width are not necessarily the same. You are also given
a target number. Write a function that returns an array of the row and column
indices of the target number if it is in the matrix, and [-1, -1] if it is not.

O(n+m) time | O(1) space, where n is the length of the matrix's rows and m the columns

[
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004]
], 44 // [3,3]

*/

function searchInSortedMatrix(matrix, target) {
	// start from top right, while setting two pointers
		// if num > target, then go down the column
		// if num < target, go back one in the row
	// return either the coordinates or [-1, -1]
	let x = 0;
  let y = matrix[0].length - 1;
	while (x < matrix.length && y >= 0) {
		let curr = matrix[x][y];
		if (curr < target) x++;
		else if (curr > target) y--;
		else return [x, y];
	}
	return [-1, -1];
}

// Do not edit the line below.
exports.searchInSortedMatrix = searchInSortedMatrix;
