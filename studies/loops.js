
//1. Loops
/* A for loop is a control flow statement that iterates a part of the programs multiple times. Most commonly used to loop over a array or a block of code a number of times 
* A while loop runs through a block of code as long as the code returns true. 
* A for in loop is used to loop through an objects key/value pairs. 
*/


//2. Loop forward to 99 
for(let i = 0; i < 100;i++){
    console.log(i); //prints number 0-99
}
// Loop backwards from 99
for(let i = 99; i > 0; i--){
    console.log(i); // prints number 99-0
}

//3. Loop over an array
var array = [1, 2, 3];
for(let i = 0; i <= array.length;i++){
    console.log(i); // prints 1, 2, 3
}
// Loop backward over an Array
for(let i = Array.length - 1; i >= 0;i--){
    console.log(i); // prints 3, 2, 1
}

//4. Loop over an object
var obj = {key1:'value1', key2:'value2'};
for(var key in Object){
    console.log(Object[key]); // prints value1, value2
}