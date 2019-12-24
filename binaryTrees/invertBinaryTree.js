/* Invert Binary Tree

Write a function that takes in a binary tree and inverts it - swaps every left node
in the tree for its corresponding right node.

O(n) time | O(d) space, where n is the number of nodes in the BT and d is the depth

*/

function invertBinaryTree(tree) {
  if (!tree) return;
	if (tree.left) invertBinaryTree(tree.left);
	if (tree.right) invertBinaryTree(tree.right);

	let temp = tree.left;
	tree.left = tree.right;
	tree.right = temp;
}
