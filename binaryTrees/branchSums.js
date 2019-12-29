/* Branch Sums

Write a function that takes in a binary tree and returns a list of its branch sums
(ordered from leftmost branch sum to rightmost), aka the sum of all values per branch.

O(n) time | O(n) space, where n is the number of nodes in the binary tree

*/

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
	const sums = [];
	sumHelper(root, 0);
	return sums;

	function sumHelper(node, sum) {
		if (!node) return;

		sum += node.value;
		if (!node.left && !node.right) {
			sums.push(sum);
			return;
		}

		sumHelper(node.left, sum);
		sumHelper(node.right, sum);
	}
}
