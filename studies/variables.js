/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//var, let, const
//var - can be used to as a global use of declaring variables
//var name = "Josh";

// let - used in a block scope, can reassign a variavble with let.
let name = "josh";

// const - used in block scope, but cannot reassign it's value
const yourName = "Andy";

//Hoisting 
//a variable can be declared after it has been assigned. Variables get hoisted to the top of a control.log(variable). functions get hoisted to the top of your software before run time.
//how functions and variables are hoisted before run time.
function add(a,b){
    return a + b;
}
var a;
a = 14;
