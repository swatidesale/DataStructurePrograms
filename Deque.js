/*
 * Data Structure class for Double Ended Queue.
 */
module.exports = class Deque {
    constructor() {
        this.front = this.rear = -1;
        this.dque = [];
    }

    isEmpty() {
        return (front == rear);
    }

    addRear(data) {
        this.rear++;
        this.dque[this.rear] = data;
    }

    addFront(data) {
        this.front--
        this.dque[this.front] = data;
    }

    removeRear() {
        var data = this.dque[this.rear];
        this.rear--;
        return data;
    }

    removeFront() {
        var data = this.dque[this.front];
        this.front++;
        return data;
    }
}
