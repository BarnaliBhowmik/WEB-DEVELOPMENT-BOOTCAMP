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

// 17. LEAP YEAR CHECKER

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}

// 18. Storing Colllection of Data inside an array

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guestName = prompt("What is your name?");
if(guestList.includes(guestName)) {
    alert("Welcome !");
} else {
    alert("Sorry, maybe next time.");
}

// WHY DID THE PROGRAMMER QUIT HIS JOB??
// Because he didn't get arrays 😁 .


// 19. Addding Elements and Intermediate Array Techniques

/* Write a program that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the number
and for multiples of five print "Buzz".
For numbers which are multiples of both 3 & 5 print "FizzBuzz". */

var output = [];
var count = 1;

function fizzbuzz() {
    //write code here
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }
    else if (count % 3 === 0) {
        output.push("Fizz");
    }
    else if (count % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }
    count++;
    console.log(output);
}

// 20. Who's Buying Lunch? CODE CHALLENGE

function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today !";
}

/* function whosPaying(names) {
    
Don't change the code above
    
    //Write your code here.
    let randomIndex = Math.floor(Math.random() * names.length);
    
    let selectedPerson = names[randomIndex];
    
    return selectedPerson + " is going to buy lunch today!";
Don't change the code below
} */




// 21. Solution to the 99 Bottles Challenge


/* This is one of the ways you could have solved the challenge 
using a while loop. There are many others, as long as you 
achieve the desired outcome -printing the lyrics to the 99 bottles
 of beer song- then you are successful! If you've come up with 
 a fancy solution or something different, be sure to share it 
 in the Q&A section for other students to learn from! */

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
/* If you want to challenge yourself further, try changing the 
code to make the english more grammatically correct. So the final 
output should say "1 bottle of beer on the wall" when numberOfBottles
 is equal to 1 rather than "1 bottles of beer on the wall" and 
 when numberOfBottles is equal to 0, you can make the output 
 "No more bottles of beer on the wall" instead of 0 bottles of 
 beer on the wall". */
