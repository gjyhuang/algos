/* Powerset

Write a function that takes in an array of unique integers and returns its powerset. The powerset P(X)
of a set X is the set of all subsets of X, e.g. the powerset of [1,2] is [[],[1],[2],[1,2]]. The sets
in the powerset do not need to be in any particular order.

[1,2,3] // [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]

O(n*2^n) time | O(n*2^n) space
(the number of subsets doubles over time, so 2^n, and are at most length n)

[1,2,3], [[]]
 1    -> [[], [1]]
   2  -> [[], [2], [1], [1,2]]
 	   3-> [[], [2], [1], [1,2], [3], [2,3], [1,3], [1,2,3]]

	// create a subsets array to hold all subsets, initialized to contain one empty array
	// loop through the ints in the array
		// for each int, loop through the subset and add subset[i] + int
		// length of subsets will change as you push, so you need to assign the initial length to variable
*/

function powerset(array) {
  const subsets = [[]];
	for (const num of array) {
		const length = subsets.length;
		for (let i = 0; i < length; i++) {
			const set = subsets[i];
			subsets.push(set.concat(num));
		}
	}
	return subsets;
}
