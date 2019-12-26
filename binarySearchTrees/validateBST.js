/* Validate BST

Write a function that returns a boolean representing whether or not the input
binary tree is a valid BST. (A node's value is greater than every node to its left
and less than or equal to every node to its right.)

O(n) time | O(d) space, where n is the number of nodes and d is the depth of the BST

*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// function below
// use helper function to pass down parent node, min val, and max val
// check if current node is >= min and < max (initialize to +/-Infinity)
/*
in relation to the middle 5:

        10 (max)
      /
     5      15
      \
  2     5 (min)

*/
// node.left must be below the max of node.value
// node.right must be above the min of node.value

function validateBst(tree) {
	return helper(tree, -Infinity, Infinity);
}

function helper(tree, min, max) {
	if (!tree) return true;
	if (tree.value < min || tree.value >= max) return false;
	const isLeftValid = helper(tree.left, min, tree.value);
	const isRightValid = helper(tree.right, tree.value, max);
	return isLeftValid && isRightValid;
}

