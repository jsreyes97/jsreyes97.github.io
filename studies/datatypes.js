//1. Numbers
/* Primitive number types are divided into two groups:
Integer types stores whole numbers, positive or negative (such as 123 or -456), without decimals. Valid types are byte, short, int and long. Which type you should use, depends on the numeric value.
Floating point types represents numbers with a fractional part, containing one or more decimals. There are two types: float and double.*/
5;


//2. Strings
/*The String data type is used to store a sequence of characters (text). String values must be surrounded by double quotes or single quotes*/
"Hello World!";


//3. Booleans
/*Booleans tell if osmething has a value of true or false*/
true,false; 

//4. Arrays
/*An Array is a zero indexed list of datatypes. An array can store any datatype besides an Object. Arrays are held inside brackets "[]"*/ 
var arr = []; // Declaring an array literal


//5. Objects
/*An object is a collection of key/value pairs. Objects are identified by curly brackets {}*/
var myObj = {}; // Declaring an object literal

//6. Function
/* function is "saved for later use", and will be executed later, when it is invoked (called). In JavaScript, functions are objects, and they have both properties and methods. A function can also be defined using an expression*/
function add(a,b){ // creating a function, giving it arguemnets
    return a + b; // functions body, giving a value
}
add(2,5); // calling the function

//7. Undefined
// undefined is a property of the global object; i.e., it is a variable in global scope. The initial value of undefined is the primitive value undefined.
var name = "Josh"; // Console can define "name"
console.log(josh); // Console cannot log "josh" because it has no meaning.

//8.Null
// Null is a keyword that signifies no value in an object.
var myObj = {}; // declaring an object
var myObj.firstName = null; // making a key and giving it a value of null/undefined.

//9. NaN
//NaN is a value meaning not a number
isNaN('hello world');        // true
Number.isNaN('hello world'); // false


//10. Infinity and -Infinity
//The global Infinity property is a numeric value representing infinity.
// I can't find -infinity but id assume you do that to someone you hate os there console crashes?


//11. Primitve and complex data types
//Primitive types are the most basic data types available within the Java language. There are 8: boolean, byte, char, short, int, long, float and double. They are atomic(A single value in the nummber) and immutable(Cannot be changed) Copy by value.
//Complex datatypes are Objects, Arrays and functions. Complex values aggragate other values and therefore are of indefinite size. Copy by reference.


//12. Differnce in Copy by refernece and Copy by value
//Copy by value only changes the copy made of the datatype. Copy by reference changes the original datatype aswell as the copy.
//Copy by Refrence 
var obj = {};
obj.name = "Joshua";
obj.age = "21"; 
//Copy by Value
var a = 4;
var b = a;
var b = 9;
console.log(a); // prints 9
