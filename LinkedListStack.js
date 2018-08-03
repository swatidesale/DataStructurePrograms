/*
 * Data Structure for Stack Using Lnked List
 */ 
const Node = require('./Node.js');
module.exports = class LinkedListStack {

    constructor() {
		this.head = null;
	}
	
	isEmpty() {
		return (this.head == null);
	}
	
	pop() {
		if(this.isEmpty()) {

		} else {
			var data =  this.head.data;
			this.head = this.head.next;
			return data;
		}
	}
	
	push(data) {
		let newnode = new Node(data);
		if(this.isEmpty()) {
			this.head = newnode;
		} else {
			newnode.next = this.head;
			this.head = newnode;
		}
	}
}

	 