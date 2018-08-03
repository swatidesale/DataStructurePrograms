/******************************************************************************
 *  
 *  Purpose: Simulate Banking Cash Counter Using Queue.
 *
 *  @author  Swati Desale
 *  @version 1.0
 *  @since   24-07-2018
 *
 ******************************************************************************/
var readline = require('readline');
const Queue = require('./Queue.js');
var read = readline.createInterface(process.stdin, process.stdout);
console.log("\n<---------------- Menu ------------------>");
console.log("===========================================")
console.log("0. Exit(exit)");
console.log("1. Deposit Amount");
console.log("2. Withdraw Amount");
console.log("3. Check Balance");
console.log("4. Add people into Queue");
console.log("5. Delete from Queue");
console.log("6. Check Number of persons in queue");
let balance = 10000;
var noofppl = 4;
var size = 10;
let que = new Queue(size, noofppl);
/*
 * T o promt for user input unless he exits.
 */
read.setPrompt('choice> ');
read.prompt();
read.on('line', function(line) {
    //Continue if noofppl > 0
    if(noofppl > 0) {
        /* 
         * Exit from input command if type exit
         */ 
        if (line === "0") 
            read.close();
        /*
         * To perform deposite operation
         */ 
        else if(line === '1') {
            console.log(noofppl+" person's Transaction is Running....");
            read.question("Enter amount to deposit : ",(deposit) => {
                balance = Number(balance) + Number(deposit);
                console.log("Total Balance is  : "+balance);
                noofppl--;
                que.cnt--;
                read.prompt();
            });
        }
        /*
         * To perform withdraw operation
         */ 
        else if(line === '2') {
            console.log(noofppl+" person's Transaction is Running....");
            read.question("Enter amount to withdraw : ",(withdraw) => {
                if(balance >= withdraw) {
                    balance = balance - withdraw;
                    console.log("Total Balance is  : "+balance);
                }
                else 
                   console.log("Insufficient Balance");
                noofppl--;
                que.cnt--;
                read.prompt();
            }); 
        }
        /*
         * To Check bank balance
         */ 
        else if(line === '3') {
            console.log("Total Amount in bank account is : "+balance);
            read.prompt();
        }
        /*
         * To add peoples into queue
         */ 
        else if(line === '4') {
            que.enqueue();
            noofppl = que.sizeofQueue();
            console.log("Number of people in queue after newly add people : "+noofppl);
            read.prompt();
        }
        /*
         * To delete people from queue
         */ 
        else if(line === '5') {
            que.dequeue();
            noofppl = que.sizeofQueue();
            console.log("Number of people in queue after deleting people : "+noofppl);
            read.prompt();
        }
        /*
         * To check number of peoples in a queue
         */ 
        else if(line === '6') {
            noofppl = que.sizeofQueue();
            console.log("Number of people in queue are : "+noofppl);
            read.prompt();
        }
        else {
            console.log(`Enter correct choice `);
            read.prompt();
        }
    }  
    else {
        console.log("Queue is empty");
        read.close();
    } 
}).on('close',function(){
    process.exit(0);
});

