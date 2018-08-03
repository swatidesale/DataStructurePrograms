/*
 * Class for Unordered Linked List Operations.
 * 
 */
fs = require('fs');
const Node = require('./Node.js');

module.exports = class UnOrderedLinkedList {
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
        else {
            var temp = this.head;

            while(temp.next != null) 
                temp = temp.next;
            temp.next = newnode;
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
      
        fs.writeFile('ab.txt', array , function (err) {
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