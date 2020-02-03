/* Median of Two Sorted Arrays

Given two sorted arrays, find their median. You may assume both arrays cannot be empty.

O(log(m+n)) time

[1, 3] // 2     [1,2] // (2+3)/2 = 2.5
[2]             [3,4]

    // set var length to lengths of both arrays / 2
    // use two pointers to go through each array while their sum < length
    // to return:
        // if two lengths together are odd, take the number - median
        // else, take the number and the one after and get their average
*/

var findMedianSortedArrays = function(nums1, nums2) {
  let total = nums1.length + nums2.length;
  let length = Math.floor(total / 2) + 1
  let i = 0, j = 0, median, prev;
  while (i + j < length) {
      prev = median;
      if (nums1[i] < nums2[j] || j === nums2.length) {
          median = nums1[i++];
      } else {
          median = nums2[j++];
      }
  }
  return total % 2 ? median : (prev + median) / 2;
};
