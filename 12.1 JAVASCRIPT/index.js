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
    /* 2.
    alert("leaveHouse");
    alert("moveRight");
    alert("moveRight");
    alert("moveUp");
    alert("moveUp");
    alert("moveUp");
    alert("moveUp");
    alert("moveRight");
    alert("moveRight");
    var numberOfBottles = money / 1.5;
    
    alert("buy " + numberOfBottles + " bottles of milk");
    alert("moveLeft");
    alert("moveLeft");
    alert("moveDown");
    alert("moveDown");
    alert("moveDown");
    alert("moveDown");
    alert("moveLeft");
    alert("moveLeft");
    alert("enterHouse");
    return money % 1.5;
    */



    /* 3.
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

    return money % 1.5; //Remainder of this function
}
var change = getMilk(4);
console.log(change);
    */
}

getMilk(5);

//12. Life in weeks

function lifeInWeeks(age) {
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("You have " + days + + "days, " + weeks + "weeks, and" + months + "months left.");
}
lifeInWeeks(12);

// 13. BMI CALCULATOR Challenge

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    // or you could write: var bmi = weight / Math.pow(height, 2);
    return bmi;
    // or: return Math.round(bmi);
}
var bmi = bmiCalculator(65, 1.0);
console.log(bmi);

// 14. LOVE CALCULATOR

prompt("what is your name?");
prompt("What is their name?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("Your love score is " + loveScore + "%");


// 15. LOVE CALCULATOR MODIFIED

prompt("what is your name?");
prompt("What is their name?");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if(loveScore > 70) {
    alert("Your love score is " + loveScore + "%" + "You love each other like Kanye loves Kanye.");
} else {
    alert("Your love score is " + loveScore + "%");
}

// 16. BMI Calculator Advanced (IF/ELSE)

function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height, 2);
    if (bmi < 24.9) {
        if (bmi < 18.5) {
            return ("Your BMI is " + bmi + ", so you are underweight.");
        } else {
            return ("Your BMI is " + bmi + ", so you have a normal weight.");
        }
    }
    if ( bmi > 24.9) {
        return ("Your BMI is " + bmi + ", so you are overweight.");
    }
}