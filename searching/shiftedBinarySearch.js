/* Shifted Binary Search

Write a function that takes in a sorted array of integers and a target integer. The numbers
in the array have been shifted by some amount - they have been moved to the left or rigth by
one or more positions (e.g. [1,2,3,4] => [3,4,1,2]).

The function should use a variation of binary search. If the target number is in the array,
it should return its index; if not, it should return -1.

*/

// use a recursive helper function, set left and right as idx pointers
// while left <= right
	// calculate mid (idx)
	// if array[left] <= array[mid], aka this part of the array is not shifted
		// if target < array[mid] and array[left] <= target, reassign right pointer
		// else, reassign left pointer
	// else
		// if target > array[mid] and target <= array[right], reassign left pointer
			// else, reassign right pointer

function shiftedBinarySearch(array, target) {
  return helper(0, array.length - 1);

  function helper(left, right) {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (array[mid] === target) return mid;
      else if (array[left] <= array[mid]) {
        if (target < array[mid] && target >= array[left]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        if (target > array[mid] && target <= array[right]) {
          if (left === mid - 1) break;
          left = mid + 1;
        } else {
          if (right === mid + 1) break;
          right = mid - 1;
        }
      }
    }
    return -1;
  }
}
