/******************************************************************************
 *  
 *  Purpose: To print Calender using Linked List Queue.
 *
 *  @author  Swati Desale
 *  @version 1.0
 *  @since   26-07-2018
 *
 ******************************************************************************/
var readline = require('readline');
var common = require('./utility.js');

var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*
 * Function to take user input for month and year
 */
function calenderQueue() {
    read.question("Enter month : ",(month) => {
        read.question("Enter year : ",(year) => {
            /*
             * Function to print calender of given month.
             */ 
            common.queueCalendar(month,year);
        })
    })
}

calenderQueue();
