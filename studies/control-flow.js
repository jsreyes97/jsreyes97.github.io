//1.If Statements
/*if statements - using the keyword if to check for a specific condition. 
* Runs the code wrapped in {} only if a condition us true. The condition is any boolean value or any boolean expression ie: 1 === 1, 1 !==1. 
* The condition being checked must be Innside parentheses. */
if(/*condition here*/){
    // perfrom this action
};
//2.Else-if statements
/*Else-if statement- using the keyword else if to check for a specific condition. 
* Just like if statements, it runs the code wrapped in curly brackets{} only if a condition is true. 
* But only if the initial if statement is false. Again just like if the condition is any boolean value or any boolean expression. 
* The condition being checked must be inside parentheses. */
if(/*condition*/){
    //perform action
}else if(/*condition){
    //perfrom different action
}
//3. Else statement
/*Else Statement- using the keyword else that runs a block of code if all other conditions are false. So if all other conditions are false, that means this is default. 
Since else statements are default, there is no condition to check for. The only thing that follows else is a code block or body of code {}.*/
if(/*condition*/){
    //perform action
}else if(/*condition){
    /*perfrom different action */
}else {
    //runs some code if the conditions are false
}
/*4.Switch Statements
* The switch statement evaluates an input expression, matching the expresion's value to case clause, and execute statements associated with that case. 
* Use a break to end each individual case */
var car = frs;
switch (car) {
    case "mustang":
        console.log("Put a widebody on her");
        break;
    case "golf":
        console.log("Spitting flames");
        break;
    case "frs":
        console.log("Thats the car we want");
        break:
    default:
        console.log("What car?")
}