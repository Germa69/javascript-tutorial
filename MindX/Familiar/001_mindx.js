/**
  // TODO: B1| Read about variables and data types:
*/

//!1. 3 different examples of invalid variable names:
//a. let break;
//b. let year-of-birth;
//c. let 4ever;
//!2. How to check a variable data type:
//Use the typeof Operator to get the type of an object or variable  in Javascript
//Example: 
let x = 10;
console.log('B1: ' + typeof x);
console.log('--------------------------------------------------')

/**
  // TODO: B2| Watch video about HTML, CSS, Javascript then connect two columns:
*/

//1. Front-end - b. Consists of HTML, CSS, Javascript;
//2. HTML - a. Content
//3. CSS - e. Decoration, appearance
//4. JS - c. Direct User interaction
console.log('B1: ' + null);
console.log('--------------------------------------------------')


/**
  // TODO: B3| Declare the following variables:
  a. Message named String has the value "Coding is great", then use
  console.log to print it out
  b. A Number named studentCount with the value 0, then use console.log to print
  it out 
*/

var message = 'Coding is great'
console.log("B3-a: " + message)
var studentCount = 0;
console.log("B3-b: " + studentCount)
console.log('--------------------------------------------------')

/**
  // TODO: B4| Update the declared variables in Exercise 3
  a. Change message into ‘Coding might not be easy, but still
  great’, then use console.log to print it out
  b. Change studentCount into total of the students in our class right now (16 for
  example), then use console.log to print it out
  c. After completing exercise a, change the message into lowercase, then use
  console.log to print it out
  d. After completing exercise b, increase studentCount by 1, then use
  console.log to print it out
*/

message = 'Coding might not be easy, but still great'
console.log("B4-a: " + message)
var totalStudent = 16;
studentCount = totalStudent;
console.log("B4-b: " + studentCount)
message = message.toLowerCase();
console.log("B4-c: " + message);
studentCount += 1;
console.log("B4-d: " + studentCount)
console.log('--------------------------------------------------')

/**
  // TODO: B5| Write a script to show user a nice message 
*/

var str = 'You look beautiful today'
console.log("B5: " + str)
    // alert(str)
console.log('--------------------------------------------------')

/**
  // TODO: B6| Write a script to ask user about their name, and then say hi to them, say something nice to them if you want :)
*/


var promptStr = prompt('Hi there, your name please?')
console.log("B6: " + promptStr)
console.log('--------------------------------------------------')

/**
  // TODO: B7| Write a script that ask 2 things from users, their first name and last name, then greet them with their full name
*/

var enterFirstName;
var enterLastName;

do {
    enterFirstName = prompt('Enter your first name')
    enterLastName = prompt('Enter your last name')
} while (enterFirstName == '' && enterLastName == '')

console.log("B7: " + enterFirstName + ' ' + enterLastName)
console.log('--------------------------------------------------')

/**
  // TODO: B8| Write a script that calculates the area of a square
*/

var calculates;

do {
    calculates = Number(prompt('Enter side length of the square'))
} while (isNaN(calculates) || calculates == '')

console.log("B8: " + calculates * 10)
alert(`The square area is ${calculates * 10}`)

/**
  // TODO: B9| Write a script that calculates the area of a circle
*/

var calculates;

do {
    calculates = Number(prompt('Enter the radius of the circle'))
} while (isNaN(calculates) || calculates == '')

var calculatesAfter = calculates ** 2 * 3.14;

console.log("B9: " + calculatesAfter.toFixed(1))
alert(`The square area is ${calculatesAfter.toFixed(1)}`)

/**
  // TODO: B10| Write a script that converts Celsius ( 0 C) into Fahrenheit ( 0 F)
*/

var doC;

do {
    doC = Number(prompt('Enter the temperature in Celcius'))
} while (isNaN(doC) || doC == '')

var doF = doC * 1.8 + 32;
console.log("B10: " + doF.toFixed(1) + " (F)")
alert(`The square area is ${doF.toFixed(1)} (F)`)