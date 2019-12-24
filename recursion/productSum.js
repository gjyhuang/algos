/* Product Sum

Write a function that takes in an array and returns its product sum. The array is a non-empty array
that contains either integers or other such arrays. The product sum of an array is the sum of its
elements, where the arrays inside should be added up and then multiplied by their level of depth.

Sample input: [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
Sample output: 12 ( = 5 + 2 + 2 * (7-1) + 3 + 2 * (6+3 * (-13+8) +4))

O(n) time | O(d) space, where n is the length of the array, and d the greatest depth of subarrays
*/

function productSum(array, multiplier = 1) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			sum += productSum(array[i], multiplier + 1);
		}
		else {
			sum += array[i];
		}
	}
	return sum * multiplier;
}
