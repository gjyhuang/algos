/* Min Max Stack Construction

Write a Min Max Stack class. The class should support pushing and popping values on and
off the stack, peeking at values at the top, and getting both the min and the max values
in the stack. All class methods should run in constant time and space.

push(5)
  -> 5 (min), 5 (max), 5 (peek)
push(7)
  -> 5 (min), 7 (max), 7 (peek)
push(2)
  -> 2 (min), 7 (max), 2 (peek)
pop(2), pop(7)
  -> 5 (min), 5 (max), 5 (peek)

// create two stacks - one, the normal stack
// 2nd - a minMaxStack, holding objects with the current min/max for that number in the stack
*/

// Feel free to add new properties and methods to the class.
class MinMaxStack {
	constructor() {
		this.stack = [];
		this.minMaxStack = [];
	}
  peek() {
    return this.stack[this.stack.length-1];
  }

  pop() {
		this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(number) {
		// also push the {min, max} at this number to the minMax stack
			// recalculate the min, max based on the prev min max
		const newMinMax = {min: number, max: number};
		if (this.stack.length) {
			newMinMax.min = Math.min(this.minMaxStack[this.minMaxStack.length-1].min, number);
			newMinMax.max = Math.max(this.minMaxStack[this.minMaxStack.length-1].max, number);
		}
		this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length-1].min;
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length-1].max;
  }
}
