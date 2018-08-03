/******************************************************************************
 *  
 *  Purpose: To print Calender.
 *
 *  @author  Swati Desale
 *  @version 1.0
 *  @since   26-07-2018
 *
 ******************************************************************************/
var readline = require('readline');
// var common = require('/home/bridgeit/Desktop/Swati/FunctionalPrograms/utility.js');
// var common1 = require('/home/bridgeit/Desktop/Swati/AlorithmPrograms/utility.js');
var common = require('./utility.js');

var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*
 * Function to print calender
 * 
 * @param month contains value for month
 * @param year contains value for year
 */
function printCalendar() {
    read.question("Enter month : ",(month) => {
        read.question("Enter year : ",(year) => {
            common.calendar(month,year);
        });
    });
}

printCalendar();

