/* Permutations

Write a function that takes in an array of unique integers and returns an array of
all permutations of those integers. If the input array is empty, it should return
an empty array.

O(n*n!) time | O(n*n!) space

[1, 2, 3] // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

function getPermutations(array) {
	// create array to store permutations, helper recursive function
	// helper function that takes in array and current permutation:
		// if no array length but permutation length, push the permutation to results
		// loop through the array
			// set a variable to hold int at i
			// concat the other ints in the array (noninclusive of int at i)
			// run getPermutations on the array and set to variable

	const permutations = [];
	helper(array, []);
	return permutations;

	function helper(array, permutation) {
		if (!array.length && permutation.length) permutations.push(permutation);
		for (let i = 0; i < array.length; i++) {
			const currInt = array[i];
			const currArr = array.slice(0, i).concat(array.slice(i + 1));
			const currPermutation = permutation.concat([currInt]);
			helper(currArr, currPermutation);
		}
	}
}

function getPermutations(array) {

}

// function getPermutations(array) {
// 	// create array to store permutations
// 	// base case - array length is 1, push to results array, return result array
// 	// loop through the array
// 		// set a variable to hold the first int
// 		// concat the other ints in the array, run getPermutations on the array and set to variable
// 		// set another (nested) loop for the permutation generated above
// 			// set variable to be the first int + getPermutations[int]
// 			// if the result array doesn't contain this result, push it
// 		// return result array (in the outermost loop, for the concatenation)

// 	const permutations = [];
// 	if (!array.length) return array;
// 	if (array.length === 1) {
// 		permutations.push(array);
// 		return permutations;
// 	}

// 	for (let i = 0; i < array.length; i++) {
// 		const firstInt = [array[i]];
// 		// console.log(array.slice(0, i).concat(array.slice(i)))
// 		let otherInts = array.slice(0, i).concat(array.slice(i + 1));
// 		let permutation = getPermutations(otherInts);

// 		for (let j = 0; i < permutation.length; i++) {
// 			const newCombo = firstInt.concat(permutation[j]);
// 			// console.log(newCombo)
// 			permutations.push(newCombo);
// 		}
// 		console.log(permutations)
// 		return permutations;
// 	}
// }
