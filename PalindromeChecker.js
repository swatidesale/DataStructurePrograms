/******************************************************************************
 *  
 *  Purpose: Palindrome-Checker Using Deque.
 *
 *  @author  Swati Desale
 *  @version 1.0
 *  @since   25-07-2018
 *
 ******************************************************************************/
var readline = require('readline');
var Deque = require('./Deque.js');
var common = require('./utility.js');
var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*
 * Function to check string is palindrome or not. 
 * 
 * @param string contains string to check palindrome or not.
 * 
 */
function palindromeChecker() {
    var dque = new Deque();
    read.question("Enter any String : ",(string) => {
        common.checkPalindrome(string,dque);

        read.close();
    })
}

palindromeChecker();