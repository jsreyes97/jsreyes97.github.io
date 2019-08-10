//String Manipulation
//



//1. <String Manipulation with Operators>
//Concatnation Operator (+) can join string together.
var fullName = "Joshua" + " " + "Reyes"; // joins the 3 strings into "Joshua Reyes";
fullName += "is 21."; // when logged will print fullName to "Joshua Reyes is 21."



//<2. String Manipulation with Methods>
//The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string. The indexOf() method cannot take powerful search values (regular expressions).
var string = 'How is the weather today?';
console.log(string.indexOf("is")); // prints "4" to the console
//The search() method searches a string for a specified value and returns the position of the match. The search() method cannot take a second start position argument.
var diff = "What is the diference between indexOf() and seach()?"
console.log(diff.search('between')); // prints "22" to the console
//slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: the start position, and the end position.
var str = "Apple, Banana, Kiwi";
console.log(str.slice(2, 1)); // removes "banana"
//substring() method extracts parts of a string and returns the extracted part in a new string but cannot extract negative indexes.
var str = "Apple, Banana, Kiwi";
console.log(str.substring(2)); //prints "ple, Banana, Kiwi" to console
//The replace() method replaces a specified value with another value in a string. 
var str = "I don't know how to think."
console.log(str.replace("think", "draw")); //  prints "I don't know how to dance"
//toUpperCase(), toLowerCase() either converts a string to uppercase or to lowercase.
var string = "hELo";
console.log(string.toUpperCase()); // upper cases string to "HELO"
console.log(string.toLowerCase()); // lower cases string to "helo"
//concat() joins two or more strings. 
var text1 = "Hello";
var text2 = "World";
console.log(text1.concat(" ", text2)); // ==> prints "Hello World" to console
//split() method converts a string to an array.
var str = 'It is a fine day.'
console.log(str.split(" ")); // prints ['It', 'is', 'a' , 'fine', 'day.'] to console
