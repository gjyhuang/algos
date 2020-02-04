/* Longest Common Subsequence

Write a function that returns the longest subsequence common to two given strings. A subsequence
is defined as a group of characters that appear sequentially, i.e. do not need to appear consecutively
in order to form a subsequence. Assume that there will only be one longest common subsequence.

"ZXVVYZW", "XKYKZPW" // ["X","Y","Z","W"]

(/ means the strings have no common subsequence)
idx col     0     1     2     3     4     5     6			7     str2
row        ""     X     K     Y     K     Z     P     W
0    ""     /     /     /     /     /     /     /     /
1     Z     /     /     /     /     /     Z     Z     Z
2     X     /     X     X     X     X     X     X     X
3     V     /     X     X     X     X     X     X     X
4     V     /     X     X     X     X     X     X     X
5     Y     /     X     X     XY    XY    XY    XY    XY
6     Z     /     X     X     XY    XY    XYZ   XYZ   XYZ
7     W     /     X     X     XY    XY    XYZ   XYZ   XYZW
str1

X = string[2]			// these idxs are all when row = col
Y = string[4]     // && str at [row][col] is longer than at [r-1][c-1]
Z = string[5]
W = string[6]

// initialize a 2D array that will hold the lengths of the max subsequences
	// initialize to their lengths + 1 for the row/col for the empty string
	// loop through the rows starting at 1
		// loop through the cols starting at 1
		// if str[row-1] === str[col-1], the chars are the same - increment from prev col in this row
		// else, lengths[r][c] equals [r-1][c]
			// or, in the case of c === 1, is the length above it at [r-1][c] - so Math.max the two

// generate the subsequence from this 2D array and the original string
	// create results array
	// traverse the lengths array in reverse
		// need it to go as far left as possible, then as far up, until it would hit a smaller num
			// this gives the coordinates for the letter belonging to the subsequence
	// if lengths[r][c] is the same as its left, row--
	// if lengths[r][c] is the same as above, col--
	// else, it was a longer substring - unshift str[r-1] to the results array
		// and decrement both row and col
*/

function longestCommonSubsequence(str1, str2) {
  const lengths = [];
	for (let i = 0; i < str1.length + 1; i++) {
		lengths.push(new Array(str2.length + 1).fill(0));
	}
	for (let r = 1; r < str1.length + 1; r++) {
		for (let c = 1; c < str2.length + 1; c++) {
			if (str1[r-1] === str2[c-1]) {
				lengths[r][c] = lengths[r-1][c-1] + 1;
			} else {
				lengths[r][c] = Math.max(lengths[r][c-1], lengths[r-1][c]);
			}
		}
	}
	return getSubsequence(lengths, str1);
}

function getSubsequence(lengths, str) {
	const results = [];
	let r = lengths.length - 1;
	let c = lengths[0].length - 1;
	while (r > 0 && c > 0) {
		if (lengths[r][c] === lengths[r-1][c]) r--;
		else if (lengths[r][c] === lengths[r][c-1]) c--;
		else {
			results.unshift(str[r-1]);
			r--;
			c--;
		}
	}
	return results;
}
