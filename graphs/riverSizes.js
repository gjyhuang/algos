/* River Sizes

Given a 2D array (matrix) containing only 0s and 1s, where each 0 represents land
and each 1 represents part of a river, write a function that returns an array of
the sizes of all rivers represented in this matrix. A river consists of any number
of 1s that are either horizontally or vertically adjacent (but not diagonally).
The sizes do not need to be in any particular order.

[
  [1,0,0,1,0],
  [1,0,1,0,0],
  [0,0,1,0,1],
  [1,0,1,0,1],
  [1,0,1,1,0]
]

*/

function riverSizes(matrix) {
	// create array to hold all river sizes, and a 2D array to track nodes visited
	// loop through
		// if node was visited, continue
		// use DFS; if node is 1, search its 4 neighbors for 1s and mark them as visited
			// recursive DFS

  const riverSizes = [];
	const visited = matrix.map(row => row.map(v => false));
	for (let i = 0; i < matrix.length; i++) {
		//loop through each row
		for (let j = 0; j < matrix[i].length; j++) {
			if (visited[i][j]) continue;
			traverse(i, j, 0);
		}
	}
	return riverSizes;

	function traverse(row, col, size) {
		const adjList = [];
		visited[row][col] = true;
		let currNode = matrix[row][col];
		if (currNode) {
			size++;
			getUnvisitedNeighbors(row, col);
			for (const node of adjList) {
				const x = node[0];
				const y = node[1];
				if (visited[x][y]) continue;
				visited[x][y] = true;
				if (matrix[x][y]) {
					size++;
					getUnvisitedNeighbors(x, y);
				}
			}
			riverSizes.push(size);
		}

			function getUnvisitedNeighbors(row, col) {
				// order of N, S, E, W
				// if the node exists and hasn't been visited, push the coords to the adjacency list
				if (row > 0 && !visited[row-1][col]) adjList.push([row-1, col]);
				if (row < matrix.length-1 && !visited[row+1][col]) adjList.push([row+1, col]);
				if (col < matrix[row].length-1 && !visited[row][col+1]) adjList.push([row, col+1]);
				if (col > 0 && !visited[row][col-1]) adjList.push([row, col-1]);
			}
	}
}
