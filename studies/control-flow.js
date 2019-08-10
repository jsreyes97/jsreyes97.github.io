/*Control Flow
* controlling the flow of our application refers to how we can make decisions in our code by asking true or false conditions.
//1.If Statements
/*if statements - using the keyword if to check for a specific condition. 
* Runs the code wrapped in {} only if a condition us true. The condition is any boolean value or any boolean expression ie: 1 === 1, 1 !==1. 
* The condition being checked must be Innside parentheses. */
if(!yellow){
return "non existent"
};
//2.Else-if statements
/*Else-if statement- using the keyword else if to check for a specific condition. 
* Just like if statements, it runs the code wrapped in curly brackets{} only if a condition is true. 
* But only if the initial if statement is false. Again just like if the condition is any boolean value or any boolean expression. 
* The condition being checked must be inside parentheses. */
if(!car){
    console.log("not the one")
}else if(!frs){
    console.log('where it at doe?')
}
//3. Else statement
/*Else Statement- using the keyword else that runs a block of code if all other conditions are false. So if all other conditions are false, that means this is default. 
Since else statements are default, there is no condition to check for. The only thing that follows else is a code block or body of code {}.*/
var name = "josh"
if(name === " sara"){
    return true;
}else if(name === "amy"){
    return true
}else {
    return false
}// this if/ else if statement will return fale.
/*4.Switch Statements
* The switch statement evaluates an input expression, matching the expresion's value to case clause, and execute statements associated with that case. Use a switch statement over an if statement when you have many alternative blocks of code to execute.
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