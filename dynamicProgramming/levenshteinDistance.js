/* Levenshtein Distance

Write a function that takes in two strings and returns the minimum number of edit
operations that need to be performed on the first string to obtain the second string.
There are three edit operations: insertion of a character, deletion, and substitution of
a character for another.

"abc", "yabd" // 2 (insert "y", substitute "c" for "d")
		 ""	y	a	b	d
	"" 0	1	2	3	4
	a	 1	1	1	2	3
	b	 2	2	2	1	2
  c	 3	3	3	2	2

  if the char at str1 and str2 is the same (j-1 and i-1), val is same as upper left one
  else, val is the min of one of the three elements surrounding it

O(nm) time | O(min(n, m)) space, where n and m are the string lengths
*/

function levenshteinDistance(str1, str2) {
	// initialize a 2D array with axes corresponding to the lengths of str1, str2
	// start each row/col with an empty string
  const edits = [];
	for (let i = 0; i <= str2.length; i++) {
		const row = [];
		for (let j = 0; j <= str1.length; j++) {
			row.push(j);
		}
		row[0] = i;
		edits.push(row);
	}
	// nested loop through str2 & str1 to traverse the array
		// if we're on the same character for str2 and str1 (str1[j-1], str2[i-1])
			// set the value to the element to its diagonal upper left
		// else, the value will be the min of the three elements surrounding it (left, top, diag) + 1
	// return array[i][j];

	for (let i = 1; i <= str2.length; i++) {
		for (let j = 1; j <= str1.length; j++) {
			if (str2[i-1] === str1[j-1]) {
				edits[i][j] = edits[i-1][j-1];
			} else {
				edits[i][j] = 1 + Math.min(edits[i-1][j-1], edits[i-1][j], edits[i][j-1]);
			}
		}
	}
	return edits[str2.length][str1.length];
}
