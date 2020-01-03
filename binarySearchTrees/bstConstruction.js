/* BST Construction

Write a BST class which has value, left, and right properties. (Value is strictly
greater than the values of every node to its left, and <= the values of every
node on its right.)

The class should support insertion, searching, and removal. The removal method
should only remove the first instance of the target value.

For all three methods:
Average: O(log(n)) time | O(1) space
Worst: O(n) time | O(1) space

*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
		// insert the node at the first empty this.left
    // if value < this.value, go left
      // else, go right

    const newNode = new BST(value);
		if (value < this.value) {
			if (!this.left) this.left = newNode;
			else this.left.insert(value);
		}
		else {
			if (!this.right) this.right = newNode;
			else this.right.insert(value);
		}
    return this;
  }

  contains(value) {
		if (value < this.value) {
			if (!this.left) return false;
			else return this.left.contains(value);
		}
		else if (value > this.value) {
			if (!this.right) return false;
			else return this.right.contains(value);
		}
		else return true;
  }

	//recursive solution:
  remove(value, parentNode = null) {
		let currNode = this;
		while (currNode) {
			if (value < currNode.value) {
				//save parent node in case there are children to reassign upwards
				parentNode = currNode;
				currNode = currNode.left;
			} else if (value > currNode.value) {
				parentNode = currNode;
				currNode = currNode.right;
			} else {
				//this is the node to remove
				//find smallest value of the right subtree, replace what we're removing with it
				//if two children:
				if (currNode.left && currNode.right) {
					currNode.value = currNode.right.findMinVal();
					//currNode.value is now smallest value of the right subtree
					//now remove it
					currNode.right.remove(currNode.value, currNode)
				}
				//if node is the root node
				else if (!parentNode) {
					//here we know currNode only has one child node
					if (currNode.left) {
						currNode.value = currNode.left.value;
						currNode.right = currNode.left.right;
						currNode.left = currNode.left.left;
						//assign left last so we don't overwrite it before we're finished using it
					} else if (currNode.right) {
						currNode.value = currNode.right.value;
						currNode.left = currNode.right.left;
						currNode.right = currNode.right.right;
					} else {
						//no children nodes - edge case - deleting the BST: one node with no child
						//discuss with interviewer
						currNode.value = null;
					}
				}
				//if one child - is currNode left child or right child?
				else if (parentNode.left === currNode) {
					/*currNode is the left, therefore the parentNode.left will be reassigned to
					either the left child of our currNode, if it has one - otherwise, the right*/
					parentNode.left = currNode.left ? currNode.left : currNode.right;
				}
				else if (parentNode.right === currNode) {
					parentNode.right = currNode.left ? currNode.left : currNode.right;
				}
				//no children:
				else {
					currNode.value = null;
				}
				break;
			}
		}
    return this;
  }

	findMinVal() {
		if (!this.left) return this.value;
		else return this.left.findMinVal();
	}
}
