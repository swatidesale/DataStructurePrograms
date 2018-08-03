/******************************************************************************
 *  
 *  Purpose: Ordered Linked List Implementation.
 *
 *  @author  Swati Desale
 *  @version 1.0
 *  @since   23-07-2018
 *
 ******************************************************************************/
var fs = require('fs');
const readline = require('readline');
const OrderedLinkedList = require('./OrderedLinkedList.js');
const read = readline.createInterface(process.stdin, process.stdout);

class OrderedList {
/*
 * Function to print unordered linked list
 * 
 */
    orderedList() {
        /*
         * Read file contents
         */ 
        fs.readFile('abc.txt', 'utf8', function(err, contents) {
            let list = new OrderedLinkedList();
            var array = []; 
            /*
             * split file contents using "," delemiter.
             */
            array = contents.split(",");
            console.log("File Contents : "+array);
            /*
             * Add file contents into Linked List
             */ 
            for(var index in array)
                    list.add(array[index]);
                    
            list.display();
            read.question("Enter word to search from list : ",(key) => {
                if(key == ' ') {
                    console.log("You entered nothing please enter number to search");
                    var l1 = new OrderedList();
                    l1.orderedList();
                }
                else {
                     /*
                    * Search for word present into Linked List or not. 
                    */
                    var result = list.search(key);
                    /*
                    * if word found remove that word from Linked List. 
                    */
                    if(result == true) {
                        console.log("Word found now deleting word...");
                        list.remove(key);
                        list.display();
                    }
                    /*
                    * If word not found add into Linked List. 
                    */
                    else {
                        console.log("Word not found add word into list");
                        list.add(key);
                        list.display();
                    }
                    /*
                    * Write updated Linked List to file.
                    */
                    list.writeToFile();
                    console.log("List updated and saved into file");
                    fs.readFile('abc.txt', 'utf8', function(err,contents) {
                        console.log("Updated File  : ");
                        console.log(contents);
                    });
                }
                read.close();
            });
        });
    }
}

var l1 = new OrderedList();
l1.orderedList();