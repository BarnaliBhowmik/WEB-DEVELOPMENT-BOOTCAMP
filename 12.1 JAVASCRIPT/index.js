// 1. Create a var that stores the name that user enters via prompt

var name = prompt("What is your name?");

// 2. Capitalize the first letter of their name.

// a. Isolate the first char
var firstChar = name.slice(0,1);
// b. Turn the first char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();
// c. Isolate the rest of the name
var restOfName = name.slice(1,name.length);
// d. Concatenate the first char with the rest of the char
var capitilisedName = upperCaseFirstChar + restOfName;
// 3. We use the capitalised version of their name to greet them using an alert.
alert("Hello, " + capitalisedName);

// 4. To find remaining characters in the character limit

var tweet = prompt("Compose a tweet-");
alert("You have written " + tweet.length + " characters, you have " + (140 - tweetCount) + " characters remaining.");

// 5. To create pop-ups that appear one after the other

alert("Hello !");
alert("WORLD !!");