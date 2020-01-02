/* Min Heap Construction

Implement a min heap class that supports insertion, removal (of the min/root value),
peeking (of the min/root value), as well as sifting a value up and down the heap
and building the heap from an input array. The heap should be represented via array.



*/

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
		// find the lowest parent node in the array at Math.floor((n-2)/2)
		// start to sift down every parent element in the array
		// return array
    const parentIdx = Math.floor((array.length-2)/2);
		for (let i = parentIdx; i >= 0; i--) {
			this.siftDown(i, array);
		}
		return array;
  }

  siftDown(currIdx, heap) {
		// get indices for childOne and (if existing) childTwo
		// set an idxToSwap to whichever child is smaller
		// compare parent to child - if parent is larger, swap
		// the child becomes the new parent - repeat until you reach the end of the heap
    let childOneIdx = currIdx * 2 + 1;
		while (childOneIdx <= heap.length-1) {
			let childTwoIdx = currIdx * 2 + 2 <= heap.length-1 ? currIdx * 2 + 2 : -1;
			let idxToSwap;
			// if childTwo & childTwo is smaller
			if (childTwoIdx && heap[childTwoIdx] < heap[childOneIdx]) {
				idxToSwap =  childTwoIdx;
			}
			// else if ChildOne is the smallest
			else idxToSwap = childOneIdx;

			if (heap[currIdx] > heap[idxToSwap]) {
				this.swap(currIdx, idxToSwap, heap);
				currIdx = idxToSwap;
				childOneIdx = currIdx * 2 + 1;
			}
			else return;
		}
  }

	swap(idx1, idx2, heap) {
		[heap[idx1], heap[idx2]] = [heap[idx2], heap[idx1]];
	}

  siftUp(currIdx, heap) {
		// currIdx is child
		// find parentIdx
		// while currIdx exists aka > 0, swap if child is less than parent
			// then the parent becomes the new currIdx - keep moving up in the heap/array
			// stops once the child/curr isn't smaller than the parent
		let parentIdx = Math.floor((currIdx - 1) / 2);
		while (currIdx > 0 && heap[currIdx] < heap[parentIdx]) {
			this.swap(currIdx, parentIdx, heap);
			currIdx = parentIdx;
			parentIdx = Math.floor((currIdx - 1) / 2);
		}
  }

  peek() {
    // shows the top value in the heap
		return this.heap[0];
  }

  remove() {
    // swap the first and last items in the heap; pop the last item
		// sift down all of the elements
		// return the popped item
		this.swap(0, this.heap.length-1, this.heap);
		const toRemove = this.heap.pop();
		this.siftDown(0, this.heap);
		return toRemove;
  }

  insert(value) {
    // push the value to the heap
		// sift up starting at the last value in the heap
		this.heap.push(value);
		this.siftUp(this.heap.length-1, this.heap);
  }
}
