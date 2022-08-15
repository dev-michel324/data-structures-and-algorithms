class Stack{
	constructor(){
		this.count = 0;
		this.storage = {};
	}

	push(value){
		this.storage[this.count] = value;
		this.count++;
	}

	size() {
		return this.count;
	}

	pop() {
		if (this.count === 0){
			return undefined;
		}

		this.count--;
		let result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	}

	peek(){
		return this.storage[this.count-1];
	}

}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.peek());
myStack.pop();
myStack.push("Hey guys!");
console.log(myStack.peek());
console.log(myStack.size());
