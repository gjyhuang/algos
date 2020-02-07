/* Convert Sorted Array to BST

Given an array where elements are sorted in ascending order, convert it to a height-balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees
of every node never differ by more than 1.

*/

class Node {
  constructor(val) {
     this.val = val;
     this.left = null;
     this.right = null;
  }
}

function sortedArrayToBST(nums) {
  if (!nums.length) return null;
  let medianIdx = Math.floor(nums.length/2);
  const root = new Node(nums[medianIdx]);
  root.left = sortedArrayToBST(nums.splice(0, medianIdx));
  root.right = sortedArrayToBST(nums.splice(1));
  return root;
};
