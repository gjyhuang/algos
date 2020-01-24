/* Youngest Common Ancestor

You are given three inputs, all of which are instances of a class that have an "ancestor" property pointing
to their youngest ancestor. The first input is the top ancestor in an ancestral tree (i.e. has no ancestor),
and the other two inputs are descendants in the tree. Write a function that returns the youngest common
ancestor to the two descendants.

O(n) time | O(1) space

        A           A, E, I // B
       / \
      B   C
     / \ / \
    D  E F  G
	 / \
	H   I
*/

class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
	const depthOne = getDepth(topAncestor, descendantOne);
	const depthTwo = getDepth(topAncestor, descendantTwo);
	if (topAncestor === descendantOne || topAncestor === descendantTwo) return topAncestor;
	if (depthOne > depthTwo) {
		let diff = depthOne - depthTwo;
		// console.log(diff)
		while (diff > 0) {
			descendantOne = descendantOne.ancestor;
			diff--;
		}
	}
	if (depthTwo > depthOne) {
		let diff = depthTwo - depthOne;
		while (diff > 0) {
			descendantTwo = descendantTwo.ancestor;
			diff--;
		}
	}
	while (descendantOne !== descendantTwo) {
			descendantOne = descendantOne.ancestor;
			descendantTwo = descendantTwo.ancestor;
	}
	return descendantOne;

	function getDepth(topAncestor, descendant) {
		let depth = 0;
		while (descendant.ancestor !== topAncestor) {
			depth++;
			descendant = descendant.ancestor;
		}
		return depth;
	}
}
