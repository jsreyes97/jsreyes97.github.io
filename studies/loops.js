//1. Loops
/* A for loop is a control flow statement that iterates a part of the programs multiple times. 
* A while loop runs through a block of code as long as the code retruns true.
* A for in loop is used to loop through an objects key/value pairs.
*/


//2. Loop forward to 99 
for(var i = 0; i < 100;i++){
    console.log(i);
}
// Loop backwards from 99
for(var i = 99; i > 0; i--){
    console.log(i);
}

//3. Loop over an array
for(var i = 0; i <= Array.length;i++){
    console.log(i);
}
// Loop backward over an Array
for(var i = Array.length - 1; i >= 0;i--){
    console.log(i);
}

//4. Loop over an object
for(var key in Object){
    console.log(Object[key]);
}