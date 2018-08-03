/*
 * Data Structure forStack operations.
 */ 
module.exports  = class Stack{
    constructor() {
		this.stk = [];
		this.top = -1;
    }
	isEmpty() {
		return (this.top == -1);
	}

	push(item) {
		this.stk[++this.top] = item;
	}
	
	pop() {
		return this.stk[this.top--];
	}
	
	peek() {
		return this.stk[this.top];
	}
};

