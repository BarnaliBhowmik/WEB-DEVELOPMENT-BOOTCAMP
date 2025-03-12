// 1. Create a var that stores the name that user enters via prompt

var name = prompt("What is your name?");

// 2. Capitalize the first letter of their name.

// a. Isolate the first char
var firstChar = name.slice(0,1);
// b. Turn the first char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();
// c. Isolate the rest of the name
var restOfName = name.slice(1,name.length);
// d. Change the rest of the name to lower case
restOfName = restOfName.toLowerCase();
// e. Concatenate the first char with the rest of the char
var capitilisedName = upperCaseFirstChar + restOfName;
// 3. We use the capitalised version of their name to greet them using an alert.
alert("Hello, " + capitalisedName);

// 4. To find remaining characters in the character limit

var tweet = prompt("Compose a tweet-");
alert("You have written " + tweet.length + " characters, you have " + (140 - tweetCount) + " characters remaining.");

// 5. To create pop-ups that appear one after the other

alert("Hello !");
alert("WORLD !!");

/* 6. Dog Age to Human Age Formula
humanAge = (dogAge - 2) * 4 + 21 */
var dogAge = prompt(" Your Dogs Age is ?");
var humanAge = (dogAge - 2) * 4 + 21;
alert("Your Dog's Human Age is: " + humanAge);

// 7. The Karel ROBOT
function main(){
    /*   move();
       move();
       move();
       move();
       turnLeft();
       move();
       move();
       move();
       move();
    */
    
    moveFourTimes();
    turnLeft();
    moveFourTimes();
}
function moveFourTimes() {
    move();
    move();
    move();
    move();
}

// 8. Moving Robot along diagonal while leaving beeper at every position (diagonally)

function main(){
    putBeeper();
    diagonalMoveBeeper();
    diagonalMoveBeeper();
    diagonalMoveBeeper();
    diagonalMoveBeeper();
}
 
function diagonalMoveBeeper() {
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
}

// 9. The KAREL CHESSBOARD

function main(){
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
       beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
       beepersRight();
}
  
function goUpTurnRight() {
    turnRight();
    move();
    turnRight();
}
  
function goUpTurnLeft() {
    turnLeft();
    move();
    turnLeft();
}
  
function beepersRight() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();  
}
  
function beepersLeft() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
}

// 10. Intro to Complex JAVASCRIPT functions

function getMilk() {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

// 11. to find number of bottles of milk

function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var numberOfBottles = Math.floor(money / 1.5);
    
    console.log("buy " + numberOfBottles + " bottles of milk")  ;
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

getMilk(5);