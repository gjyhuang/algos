/* Find Closest Value in BST

Given a BST and a target value, find the closest value to that target in the BST.
A node's value is strictly greater than the values of every node to its left, and
its value is less than or equal to the values of every node on its right.

Average: O(log(n)) time | O(1) space, where n is the number of nodes
Worst: O(n) time | O(1) space
*/

function findClosestValueInBst(tree, target) {
	return helper(tree, target, tree.value);

	function helper(tree, target, closest) {
		if (!tree) return closest;
		if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
			closest = tree.value;
		}
		if (tree.value > target) {
			return helper(tree.left, target, closest);
		}
		else if (tree.value < target) {
			return helper(tree.right, target, closest)
		}
		else {
			return closest;
		}
	}
}

