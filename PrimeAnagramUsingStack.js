/******************************************************************************
 *  
 *  Purpose: Take a range of 0 - 1000 Numbers and find the Prime numbers in 
 * that range and print using stack.
 *
 *  @author  Swati Desale
 *  @version 1.0
 *  @since   27-07-2018
 *
 ******************************************************************************/
var common = require('./utility.js');
const LinkedListStack = require('./LinkedListStack.js');

function primeAnagramUsingStack() {
    let stk = new LinkedListStack();
    var prime = [];
    var i=0;
    /*
     * To check prime or not and store into prime array.
     */ 
    for(var index=2;index<1000;index++) {
        if(common.checkPrime(index)) {
            prime[i] = index;
            i++;
        }
    }
    /*
     * To check calculatd prime numbers are anagram or not and push into stack.
     */ 
    for(var i=0;i<prime.length;i++) {
        for(var j=i+1;j<prime.length;j++) {
            if(common.isAnagram(prime[j], prime[i])) {
                stk.push(prime[i]);
                stk.push(prime[j]);
            }
        }
    }
    /*
     * To pop prime anagram from stack and display all
     */ 
    console.log("Prime Anagrams : ");
    for(var index=0;index<prime.length;index++) {
        if(stk.isEmpty()) {
            console.log("Stack is Empty");
            break;
        } else {
            var primeAnagram = stk.pop();
            console.log(primeAnagram+" ");
        }
    }
}

primeAnagramUsingStack();