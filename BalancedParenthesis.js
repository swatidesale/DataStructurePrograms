/******************************************************************************
 *  
 *  Purpose: Simple Balanced Parentheses
 *
 *  @author  Swati Desale
 *  @version 1.0
 *  @since   24-07-2018
 *
 ******************************************************************************/
var readline = require('readline');
const Stack = require('./Stack.js');
var common = require('./utility.js');

var read = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

/*
 * Function to chechk balanced paranthesis.
 * 
 * @param exp contains expression.
 * 
 */
function balancedParanthesis() {
    let stack = new Stack();
    read.question("Enter expression : ",(exp) => {
        var result = common.matchParanthesis(exp,stack);
        console.log("Result : "+result);

        read.close();
    })
}	

balancedParanthesis();