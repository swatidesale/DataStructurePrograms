/*
 * Data Structure for Queue Operations.
 */ 
module.exports  = class Queue{
    constructor(size,noofppl) {
        this.front = 0;
		this.rear = 0;
		this.size = size;
		this.cnt = noofppl;
    }
	isEmpty() {
		return (this.cnt == 0);
	}

	isFull() {
		return (this.rear == this.size);
	}
	
	sizeofQueue() {
		return this.cnt;
	}

	enqueue() {
		if(this.isFull())
			console.log("Queue is full");
		else {
			this.rear++;
			this.cnt++;
		}
	}
	
	dequeue() {
		if(this.isEmpty())
			console.log("Queue is empty");
		else {
			this.cnt--;
			this.front--;
		}
	}
};
