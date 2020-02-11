/* Max Path Sum In Binary Tree

Write a function that takes in a Binary Tree and returns its max path sum. A path is a collection of
nodes where no node is connected to more than two other nodes; a path sum is the sum of the values of
the nodes in a particular path.

Each node has a value property and two left and right children nodes.

O(n) time | O(log(n)) space

     1
	  / \
	2     3
 / \   / \
4   5 6   7   // 18 => 5 - 2 - 1 - 3 - 7

// find the max of left-root-right versus just a branch, track both
// keep recursively going through tree until no more node to calculate down for

// use recursive helper
// in an array, track max path if this is a branch max path sum

*/

function maxPathSum(tree) {
  const [x, maxSum] = [...findMaxSum(tree)];
	return maxSum;
}

function findMaxSum(tree) {
	if (!tree) return [0, 0];

	const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left);
	const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);
	const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);

	const {value} = tree;
	const maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
	const maxSumAsRootNode = Math.max(leftMaxSumAsBranch + value + rightMaxSumAsBranch, maxSumAsBranch);
	const maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode);

	return [maxSumAsBranch, maxPathSum];
}
