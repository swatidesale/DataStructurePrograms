/******************************************************************************
 *  
 *  Purpose: Take a range of 0 - 1000 Numbers and find the Prime Anagram numbers in 
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
 * Function to take range to find prime numbers and anagram.
 * 
 * @param range contains value of range upto which find prime anagrams.
 */
function primeAnagram2DArray() {
    read.question("Enter range between 1 - 1000 : ",(range) => {
        var prime = [];
        var i = 0;
        var anagram = [];
        var count1 = 0;
        for(var index=2;index<=range;index++) {
            /*
             * To check prime or not and store into prime array.
             */ 
            if(common.checkPrime(index)) {
                prime[i] = index;
                i++;
            }
        }
        /*
         * To check calculatd prime numbers are anagram or not and store into array.
         */ 
        for(var i=0;i<prime.length;i++) {
            for(var j=i+1;j<prime.length;j++) {
                if(common.isAnagram(prime[j],prime[i])) {
                    anagram[count1] = prime[i];
                    count1++;
                    anagram[count1] = prime[j];
                    count1++;
                } 
            }
        }

        //print prime and anagram numbers.
        for(var i=0;i<anagram.length;i++) {
            console.log(anagram[i]);
        }
        read.close();
    });
}

primeAnagram2DArray();