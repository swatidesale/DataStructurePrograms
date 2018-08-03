const LinkedListQueue = require('./LinkedListQueue.js');
const LinkedListStack = require('./LinkedListStack.js');
var common = require('/home/bridgeit/Desktop/Swati/FunctionalPrograms/utility.js');
var common1 = require('/home/bridgeit/Desktop/Swati/AlorithmPrograms/utility.js');

module.exports = {

    //-----------------------Data Structure Programs-------------------------//

    /**
	 * 3. Simple Balanced Parentheses
	 * @param str
     * @param stack
	 * @return
	 */
    matchParanthesis: function (str, stack) {
        for (var i = 0; i < str.length; i++) {
            var current = str.charAt(i);
            if (current == '{' || current == '(' || current == '[') {
                stack.push(current);
            }
            if (current == '}' || current == ')' || current == ']') {
                if (stack.isEmpty())
                    return "Unbalanced Parenthesis";
                var last = stack.peek();

                if (current == '}' && last == '{' || current == ')' && last == '(' || current == ']' && last == '[')
                    stack.pop();
                else
                    return "Unbalanced Parenthesis";
            }
        }

        if (stack.isEmpty())
            return "Balanced Parenthesis";
        else
            return "Unbalanced Parenthesis";
    },

    /**
	 * 5. Palindrome-Checker
	 * @param str
     * @param stack
	 * @return
	 */
    checkPalindrome: function (string, dque) {
        for (var index = 0; index < string.length; index++) {
            ch = string.charAt(index);
            dque.addRear(ch);
        }
        str1 = new String();
        for (var index = 0; index < string.length; index++) {
            str1 = str1 + dque.removeRear();
        }

        if (string == str1)
            console.log(string + " is Palindrome ");
        else
            console.log(string + " is Not Palindrome ");
    },

    /**
	 * 8. Function which takes month and year and prints calender for that perticular month.
	 * @param month
     * @param year
	 */
    calendar: function(month,year) {
        months = [" ","January","Feb","March","April",
        "May","June","July","Aug",
        "Sep","Oct","Nov","Dec"];

        days = [ ,31,28,31,30,31,30,31,31,30,31,30,31 ];

        if(month == 2 && common.isLeapYear(year))
            days[month] = 29;
        
        var value = [];
        console.log(months[month]+" "+year);
        var weekDaysArray = ['S','M','T','W','T','F','Sat'];
        var d = common1.findDayOfWeek(month, 1, year);
        
        for(var index = 0;index<d;index++)
            value.push(' ');
        for(var i=1;i<=days[month];i++) {
            value.push(i);
        }

        var weekDay = '';
        for(var i=0;i<7;i++) {
            weekDay = weekDay+weekDaysArray[i]+'   ';
        }
        console.log(weekDay);
        
        var cal='';
        for(var i=0;i<7;i++) {
            cal=cal+value[i]+'   ';
        }
        console.log(cal);
        cal = '';
        for(var i=7;i<14;i++) {
            if(value[i]<10) {
                cal=cal+value[i]+'   ';
            } else {
                cal=cal+value[i]+'  ';
            }
        }
        console.log(cal);
        cal = '';
        for(var i=14;i<21;i++) {
            if(value[i]<10) {
                cal=cal+value[i]+'   ';
            } else {
                cal=cal+value[i]+'  ';
            }
        }
        console.log(cal);
        cal = '';
        for(var i=21;i<28;i++) {
            cal=cal+value[i]+'  ';
        }
        console.log(cal);
        cal = '';
        for(var i=28;i<days[month];i++) {
            cal=cal+value[i]+'  ';
        }
        console.log(cal);
    },


    /**
	 * 9.The WeekDay objects are stored in a Queue implemented using Linked List. 
     * Further maintain also a Week Object in a Queue to finally display the Calendar
	 * @param month
     * @param year
	 */
    queueCalendar: function(month,year) {
        var months = [" ","January","Feb","March","April",
        "May","June","July","Aug",
        "Sep","Oct","Nov","Dec"];
    
        var days = [ ,31,28,31,30,31,30,31,31,30,31,30,31 ];
    
        var weekDay = '';
        var cal='';
        let weekDays = new LinkedListQueue();
        let day = new LinkedListQueue();
        var d = common1.findDayOfWeek(month, 1, year);

        if(month == 2 && common.isLeapYear(year))
            days[month] = 29;
    
        weekDays.enqueue(' ');
        weekDays.enqueue('S');
        weekDays.enqueue('M');
        weekDays.enqueue('T');
        weekDays.enqueue('W');
        weekDays.enqueue('T');
        weekDays.enqueue('F');
        weekDays.enqueue('Sa');
    
        day.enqueue(' ');
        for(var index = 0;index<d;index++)
            day.enqueue(' ');
        for(var i=1;i<=days[month];i++) {
            day.enqueue(i);
            if((i+d)%7 == 0 || (i == days[month]))
                day.enqueue('\n');
        }

        while(!weekDays.isEmpty()) {
            weekDay = weekDay+weekDays.dequeue()+'   ';
        } 
    
        console.log(months[month]+" "+year);
        console.log(weekDay);
        while(!day.isEmpty()) {
            var date = day.dequeue();
            if(date < 10)
                cal = cal+date+'   ';
            else 
                cal = cal+date+'  ';
        } 
        console.log(cal);
    },

    /**
	 * 10.The WeekDay objects are stored in a Stack implemented using Linked List. 
     * Further maintain also a Week Object in a Stack to finally display the Calendar
	 * @param month
     * @param year
	 */
    stackCalendar: function(month,year) {
        var months = [" ","January","Feb","March","April",
        "May","June","July","Aug",
        "Sep","Oct","Nov","Dec"];
    
        var days = [ ,31,28,31,30,31,30,31,31,30,31,30,31 ];
    
        var weekDay = '';
        var cal = '';
        let weekDays = new LinkedListStack();
        let day = new LinkedListStack();
        let day1 = new LinkedListStack();
        var d = common1.findDayOfWeek(month, 1, year);
    
        if(month == 2 && common.isLeapYear(year))
            days[month] = 29;
    
        weekDays.push('S');
        weekDays.push('M');
        weekDays.push('T');
        weekDays.push('W');
        weekDays.push('T');
        weekDays.push('F');
        weekDays.push('Sa');
    
        for(var index = 0;index<d;index++)
            day.push(' ');
        for(var i=1;i<=days[month];i++) {
            day.push(i);
        }
        for(var i=days[Number(month)+1];i<42;i++) {
            day.push(' ');
        }
        while(!weekDays.isEmpty()) {
            weekDay = weekDays.pop()+'   '+weekDay;
        } 
    
        console.log(months[month]+" "+year);
        console.log(weekDay);
    
        while(!day.isEmpty()) {
            day1.push(day.pop());
        }
    
        for(var i=0;i<7;i++) {
            cal=cal+day1.pop()+'   ';
        }
        console.log(cal);
        cal = '';
        for(var i=7;i<14;i++) {
            var dd = day1.pop();
            if(dd<10) {
                cal=cal+dd+'   ';
            } else {
                cal=cal+dd+'  ';
            }
        }
        console.log(cal);
        cal = '';
        for(var i=14;i<21;i++) {
            var dd = day1.pop();
            if(dd<10) {
                cal=cal+dd+'   ';
            } else {
                cal=cal+dd+'  ';
            }
        }
        console.log(cal);
        cal = '';
        for(var i=21;i<28;i++) {
            cal=cal+day1.pop()+'  ';
        }
        console.log(cal);
        cal = '';
        for(var i=28;i<35;i++) {
            cal=cal+day1.pop()+'  ';
        }
        console.log(cal);
     }, 

    /**
	 * 11. Print 2D Array for 1-1000 prime numbers.
	 * @param array
	 */
    twoDPrimeArray: function (array) {
        var prime=[];
        var ran = [];

        ran[0] = '1-100';
        ran[1] = '101-200';
        ran[2] = '201-300';
        ran[3] = '301-400';
        ran[4] = '401-500';
        ran[5] = '501-600';
        ran[6] = '601-700';
        ran[7] = '701-800';
        ran[8] = '801-900';
        ran[9] = '901-1000';

        for (var i = 0; i < array.length; i++) {

            if((array[i] > 0) && (array[i] <= 100)) {
                prime.push([ran[0],array[i]]);
            }
            else if((array[i] > 100) && (array[i] <= 200)) {
                prime.push([ran[1],array[i]]);
            }
            else if((array[i] > 200) && (array[i] <= 300)) {
                prime.push([ran[2],array[i]]);
            }
            else if((array[i] > 300) && (array[i] <= 400)) {
                prime.push([ran[3],array[i]]);
            }
            else if((array[i] > 400) && (array[i] <= 500)) {
                prime.push([ran[4],array[i]]);
            }
            else if((array[i] > 500) && (array[i] <= 600)) {
                prime.push([ran[5],array[i]]);
            }
            else if((array[i] > 600) && (array[i] <= 700)) {
                prime.push([ran[6],array[i]]);
            }
            else if((array[i] > 700) && (array[i] <= 800)) {
                prime.push([ran[7],array[i]]);
            }
            else if((array[i] > 800) && (array[i] <= 900)) {
                prime.push([ran[8],array[i]]);
            }
            else if((array[i] > 900) && (array[i] <= 1000)) {
               prime.push([ran[9],array[i]]);
            }
        }
        console.log(prime);
    },

    /**
	 * Function to check Prime number  
	 * @param number
	 * @return
	 */
    checkPrime: function (number) {
        var flag = 0;
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                flag = 1;
                break;
            }
        }

        if (flag == 0)
            return true;
        return false;
    },

    /**
	 * Function to check anagram number  
	 * @param number
	 * @return
	 */
    isAnagram: function (num1, num2) {
        var a = num1.toString();
        var b = num2.toString();
        y = a.split("").sort();
        z = b.split("").sort();
        areAnagrams = true;
        for (i = 0; i < y.length && areAnagrams; i++) {
            if (y.length === z.length) {
                if (y[i] === z[i]) {
                    areAnagrams = true;
                } else {
                    areAnagrams = false;
                }
            }
            else {
                areAnagrams = false;
            }
        }

        if (areAnagrams) {
            return true;
        } else {
            return false;
        }
    }
};