// 1. Write a program that displays current date and time in
// your browser.
// Ans:

// var rightNow = new Date();
// document.write(rightNow);

// //2. Write a program that alerts the current month in words.
// // For example December.
// // // Ans :
// var now = new Date();
// console.log(new Date().getMonth(),"Current Month");

// //3. Write a program that alerts the first 3 letters of the current
// // day, for example if today is Sunday then alert will show
// // Sun
// // Ans:

// var daysName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var currentDay = rightNow.getDay();
// var currentDayName = daysName[currentDay]
// console.log(currentDayName.slice(0,3))

//  //4. Write a program that displays a message “It’s Fun day” if
// // its Saturday or Sunday today.
// // Ans:
// var daysName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var currentDay = rightNow.getDay();
// var currentDayName = daysName[currentDay]
// console.log(currentDayName)

//  if(currentDayName == "Saturday"|| currentDay == "Sunday"){
//     console.log("It’s Fun day")
//  }else{
//     console.log("Oh boring day")
//  }
 
// // //5. Write a program that shows the message “First fifteen
// // // days of the month” if the date is less than 16th of the month
// // // else shows “Last days of the month”.
// // // Ans:

// var date = +prompt("Enter a date")
// for(var i = 1; i<30;i++){
//     if(date < 16){
//         document.write([i].slice(0,15),"<br />")}
// else if(date > 16){
//    document.write([i].slice(16)) 
// }}

// //6. Write a program that determines the minutes since
// // midnight, Jan. 1, 1970 and assigns it to a variable that
// // hasn't been declared beforehand. Use any variable you like
// // to represent the Date object.
// // Ans :
// var now = new Date();
// var date = now.getDate();
// if(date <16){
// document.write("first days of 15")
// }
// else{
//    document.write("last days of 15")
// }
//7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
//Ans:
//NO

//8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate
// ANS : No

//9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

//Ans :
//No


//9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// Ans: no


//11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
//Ans :no

//12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
// Ans :no


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
//Ans:

//14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// DATE METHODS | JAVASCRIPT
// Page 5 of 5
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
//Ans : no

//    Chapter 35 to 38
//1. Write a function that displays current date & time in your
// browser.
//Ans:

// function dayTime(){
//    var nowDatTime = new Date();
//    document.write(nowDatTime,"<br />")
// }
// dayTime();
// dayTime();
// dayTime();

//2. Write a function that takes first & last name and then it
// greets the user using his full name.
//Ans :
// function fullName(firstName,lastName){
//    var name = firstName + lastName
//    document.write(name)
// }
// fullName("Haseeb"," Ahmed");

//3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
//Ans:
//  function addition(num1,num2){
//    var sum = num1 + num2
//    document.write(sum ,"<br />")
//  }
//  addition(25,55);
//  addition(80,20);

// //4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser

// //Ans:
// function result(num1,num2,opt){
//  if(opt == "+"){
//    document.write(num1+ num2)
//  }else if (opt == "-"){
//    document.write(num1 - num2)
//  }else if (opt == "*"){
//    document.write(num1 * num2)}}

//    result(25,50,"*")




//5. Write a function that squares its argument.
//Ans :

//6. Write a function that computes factorial of a number.
//Ans : 


//7. Write a function that take start and end number as inputs
// & display counting in your browser.
//Ans: no