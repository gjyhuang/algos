/* Breadth-First Search

Implement BFS with a function that takes in an empty array, stores all of the
nodes' names in the array, and returns it.

O (v+e) time | O(v) space, where v is the number of vertices of the input graph
and e is the number of edges.

O (v+e) --> traverse every node, so O(v), but on top of that we add every node's
children nodes to the queue. how many children nodes? as many edges as it has,
so O(e) --> O(v+e)

*/

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
		// create a queue, and put the current vertex into it
		// while you have a queue, shift off the first element
			// add its name to the array and add its children to the queue
    // return array

    const queue = [this];
		while (queue.length) {
			const curr = queue.shift();
			array.push(curr.name);
			for (const child of curr.children) {
				queue.push(child);
			}
		}
		return array;
  }
}

