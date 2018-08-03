/*
 * Class for Ordered Linked List Operations. 
 */
fs = require('fs');
const Node = require('./Node.js');

module.exports = class OrderedLinkedList {
    constructor() {
     this.head = null;
    }
    /**
	 * Function to add word into Linked List
	 * @param data
	 */ 
    add(data) {
        let newnode = new Node(data);
        if(this.head == null)
            this.head = newnode;
        else if(data < this.head.data) {
			var temp = new Node(data);
			temp.next = this.head;
			this.head = temp;
		} else {
			var flag = true;
			var prev = this.head;
			var temp = this.head.next;
			while(temp != null) {
				if(data > temp.data) {
					prev = temp;
					temp = temp.next;
				} else {
		            var newNode = new Node(data);
					newNode.next = temp;
					prev.next = newNode;
					flag = false;
					break;
				}
			}
			if(flag) {
			    var temp1 = this.head;
				while(temp1.next != null) {
					temp1 = temp1.next;
				}
				temp1.next = new Node(data); 
			}
		}
    }
    /**
	 * Function to display contents of Linked List.
	 */ 
    display() {
		var temp = this.head;
		while( temp != null) {
			console.log(temp.data);
			temp = temp.next;
        }
    }
    /**
	 * Function to search a given word.
	 * @param word
	 */  
    search(word) {
		var temp = this.head;
		var flag = 0;
		while(temp != null) {
			if((temp.data) == (word))
				flag = 1;
			temp = temp.next;
		}
		
		if(flag == 1)
			return true;
		else
			return false;
    }
    /**
	 * Function to remove word from Linked List.
	 * @param word
	 */   
    remove(word) {
        if((this.head.data) == (word))
            this.head = this.head.next;
        else {
            var temp = this.head.next;
            var prev = this.head;
            while(((temp.data) != (word))) {
                prev = temp;
                temp = temp.next;
            }
            prev.next = temp.next;
            temp = null;
        }
    }
    /**
	 * Function to write updated Linked List into file.
	 */ 
    writeToFile() {    
        var array = [];
        var index = 0;
        var temp = this.head;
        while(temp != null) {
            array[index] = temp.data;
            temp = temp.next;
            index++;
        }
      
        fs.writeFile('abc.txt', array , function (err) {
            if (err) 
                return console.log(err);
        });

        /*var writeStream = fs.createWriteStream("ab.txt");
        if(this.head == null) {
			console.log("List is empty");
		}
		else {
			var temp = this.head;
			while(temp != null) {
                writeStream.write(temp.data+" ");
                temp = temp.next;
			}
        }*/
    }
}