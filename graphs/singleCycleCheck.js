/* Single Cycle Check

You are given an array of integers where each integer represents a jump of said value
through the array. (E.g. 2 represents a jump of 2 indices forward; -3 represents a jump
of 3 backward.) If a jump spills past the array's length/bounds, the jump wraps to the
other side.

Write a function that returns a boolean representing whether the jumps in the array form
a single cycle. (This is when starting at any index in the array and following the jumps,
every element is landed on exactly once before landing back on the starting index/element.)

O(n) time | O(n) space
*/

function hasSingleCycle(array) {
	// initialize a counter that must be less than the array's length
  // if you haven't visited all elements but the idx of the curr element is 0, false
	// to get the nextIdx, need to use % to find the remainder of the element + nextIdx % the array's length
		// (in case the element is large and loops the length more than once)
		// if no remainder, then element is negative - add to the length

	let visited = 0;
	let currIdx = 0;
	while (visited < array.length) {
		if (visited > 0 && currIdx === 0) return false;
		visited++;
		currIdx = getNextIdx(currIdx);
	}
	return currIdx === 0;

	function getNextIdx(currIdx) {
		const jump = array[currIdx];
		const nextIdx = (jump + currIdx) % array.length;
		return nextIdx >= 0 ? nextIdx : array.length + nextIdx;
		// if (nextIdx >= 0) currIdx = nextIdx;
		// else currIdx = nextIdx + array.length;
	}

}
