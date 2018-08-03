/******************************************************************************
 *  
 *  Purpose: Take a range of 0 - 1000 Numbers and find the Prime numbers in 
 * that range and print in 2D array.
 *
 *  @author  Swati Desale
 *  @version 1.0
 *  @since   27-07-2018
 *
 ******************************************************************************/
var readline = require('readline');
var common = require('./utility.js');

var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*
 * Function to take range for prime numbers.
 * 
 * @param range contains value of range to find prime numbers.
 */
function primeNumbers2DArray() {
    read.question("Enter range between 1 - 1000 : ",(range) => {
        var prime = [];
        var i = 0;
        for(var index=2;index<=range;index++) {
            /*
             * Function to check whether a number is prime or not.
             */ 
            if(common.checkPrime(index)) {
                prime[i] = index;
                i++;
            }
        }
        /*
         * Function to print 2D array. 
         */ 
        common.twoDPrimeArray(prime);
        read.close();
    });
}

primeNumbers2DArray();