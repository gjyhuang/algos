
/* BST Traversal

Write three functions that take in an empty array, traverse the BST, adds its nodes'
values to the array, and returns said array.

The three functions should traverse the BST using in-order, pre-order, and post-order.

All methods:
O(n) time | O(n) space, where n is the number of nodes in the BST

*/

function inOrderTraverse(tree, array) {
	if (tree) {
		inOrderTraverse(tree.left, array);
		array.push(tree.value);
		inOrderTraverse(tree.right, array);
	}
	return array;
}

function preOrderTraverse(tree, array) {
  if (tree) {
		array.push(tree.value);
		preOrderTraverse(tree.left, array);
		preOrderTraverse(tree.right, array);
	}
	return array;
}

function postOrderTraverse(tree, array) {
  if (tree) {
		postOrderTraverse(tree.left, array);
		postOrderTraverse(tree.right, array);
		array.push(tree.value);
	}
	return array;
}
