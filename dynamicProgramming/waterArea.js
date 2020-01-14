/* Water Area
You are given an array of integers. Each non-zero integer represents the height of a pillar of width 1. Imagine
water being poured over all of the pillars, and return the amount of the water trapped between the pillars
viewed from the front. Water must be between two pillars to count. (One unit of water is one 1x1 block.)

[0,1,0,2,1,1,0,0,3,2,0,1,1,0] // 7

O = water, X = block

 3										  x
 2					x	 O	O  O  x  x
 1    x  O  x  x  O  O  x  x  O  x  x

	 0  1  2  3  4  5  6  7  8  9  10 11 12
  [0, 1, 0, 2, 1, 0, 0, 3, 2, 0, 1, 1, 0]

L: 0  1  1  2  2  2  2  3  3  3  3  3  3
R: 3  3  3  3  3  3  3  3  2  1  1  1  0

H: 0  1  1  2  2  2  2  3  2  1  1  1  0  // Math.min of L, R
X: 0  1  0  2  1  0  0  3  2  0  1  1  0
O: 0  0  1  0  1  2  2  0  0  1  0  0  0
// at any vertical axis, min of L/R - block height = water

// look at horizontal slices
// loop through the array from right to left
	// make array for the max rightmost block height at i
// create var to represent water total
// loop through array from the left
	// find rightmost block height, and find the min of L, R
  // add the above min - current block height to the water total

O(n) time | O(n) space
*/

function waterArea(heights) {
	const rightMaxes = [];
	let rightMax = 0;
  for (let i = heights.length-1; i >= 0; i--) {
		rightMax = Math.max(heights[i], rightMax);
		rightMaxes[i] = rightMax;
	}
	let waterCollected = 0;
	let leftMax = 0;
	for (let i = 0; i < heights.length; i++) {
		const rightMax = rightMaxes[i];
		leftMax = Math.max(heights[i], leftMax);
		waterCollected += Math.min(leftMax, rightMax) - heights[i];
	}
	return waterCollected;
}
