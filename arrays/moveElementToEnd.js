/* Move Element To End

Given an array of integers and an integer, write a function that moves all instances
of that integer int he array to the end of the the array. The function should perform
this in place, and the order of the other integers does not matter.

O(n) time | O(1) space, where n is the length of the array
*/

function moveElementToEnd(array, toMove) {
  // use two pointers - right pointer stays at the end, left at the start
  // if right is the integer, right--
    // also for an edge case make sure that this is while left < right
  // when left runs into the integer, swap it with right, right-- left++

	let left = 0;
	let right = array.length-1;
	while (left < right) {
		while (left < right && array[right] === toMove) right--;
		if (array[left] === toMove) {
			[array[left], array[right]] = [array[right], array[left]];
		}
		left++;
	}
	return array;
}
