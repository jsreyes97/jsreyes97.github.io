/*Operators
Operators act on our data.*/
//1. Assignment Operators 
//Assignment operators assign values to variables.

=	    x = y	    x = y
+=	    x += y	    x = x + y
-=	    x -= y	    x = x - y
*=	    x *= y	    x = x * y
/=	    x /= y	    x = x / y
%=	    x %= y	    x = x % y
**=	x   **= y	    x = x ** y

//2.Arithmatic Operators
//Are used to perform arithmatic on numbers

//+	  Addition   
x + y;
//-	   Subtraction . 
x - y;
//* 	   Multiplication .
x * y;
//**	   Exponentiation (ES2016) .
x ** y;
//	   Division  
x / y;
//%	   Modulus (Division Remainder)
x % y
//++	   Increment 
x++
//--	   Decrement 
x--


//3.Comparison Operators
//are used in logical statements to determine equality or difference between variables or values.
//==	   equal to   
x == x;
//===	   equal value and equal type 
x === x;
//!=	   not equal 
x != y;
//!==	   not equal value or not equal type 
x !== y;
//>	   greater than . 
x > y
//<	   less than .  
x < y;
//>=	   greater than or equal to 
x >= y;
//<=	   less than or equal to 
x <= y;

//4.Logical Operators
// are used to determine the logic between variables or values.

//&&	  logical and .  
if( x > y && x > s) return "yikes";
//||    logical or . 
if(x > y || x < s) return "yo";
//!	  logical not 
if(!array) return "not an array";


//5.Unary Operators

//Unary plus (+)	           Tries to convert the operand into a number
+3 // returns '3'
//*Unary negation (-) *	   Tries to convert the operand into a number and negates after
-3 // returns '-3'
//Logical Not (!)	           Converts to boolean value then negates it
!false // returns true
//Increment (++)	           Adds one to its operand
i++ 
//Decrement (--)	           Decrements by one from its operand
i--
//Bitwise not (~)	           Inverts all the bits in the operand and returns a number
~2 //returns '-3'
//typeof	                   Returns a string which is the type of the operand
typeof 3 // returns number
//delete	                   Deletes specific index of an array or specific property of an object
delete c;
//void	                   Discards a return value of an expression.
void 0                     // returns undefined
var hi = function () {
    console.log('Yap')
    return 4;
}


/*6.Ternary Operators
?	   ternary operator condition .  
An expression whose value is used as a condition.
exprIfTrue
An expression which is evaluated if the condition evaluates to a truthy value (one which equals or can be converted to true).
exprIfFalse
An expression which is executed if the condition is falsy (that is, has a value which can be converted to false).
*/
//(if this is true) ? (then do this) : (or this if false)
y < x ?  y :  x;  


