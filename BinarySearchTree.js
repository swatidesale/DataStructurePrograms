/******************************************************************************
 *  
 *  Purpose: Find Number of Binary Search Tree.
 *
 *  @author  Swati Desale
 *  @version 1.0
 *  @since   25-07-2018
 *
 ******************************************************************************/
var readline = require('readline');

var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var nodes=[];
var numberofNodes;
/*
 * Function to print factorial.
 * 
 * @param num contains number for which to find factorial.
 */
function factorial(num) {
    var fact=1;
    for(var i=num;i>0;i--) {
        fact=fact*i;
    }
    return fact;
}
/*
 * Function to take number of nodes.
 * 
 * @param size contains value of number of nodes.
 */
function binarySearchTree() {
    read.question("Enter number of nodes : ",(size) => {
        numberofNodes = size;
            askNumberOfNodes();
    });
}
/*
 * Function to take node values.
 * 
 * @param node contains value for node.
 */
function askNumberOfNodes() {
    if(nodes.length >= numberofNodes) {
        for(var index = 0;index<numberofNodes;index++) {
            var a = factorial(2*nodes[index]);
            var b = factorial(Number(nodes[index])+1);
            var c = factorial(nodes[index]);
            /* 
             * Formula to calculate number of nodes.
             */ 
            var result = parseInt(a/(b*c));

            console.log("Number of binary search tree form are : ",result);
        }
        read.close();
    } else {
        read.question(`Please enter the ${(nodes.length + 1)} node : `, (node) => {
            nodes.push(node);
            askNumberOfNodes();
        });
    }
}

binarySearchTree();