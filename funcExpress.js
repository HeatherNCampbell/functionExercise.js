// March 11 2021

// FUNCTION EXPRESSIONS 
// Creating a FUNCTION and storing it to a VARIABLE

/*
Syntax Example
= function(keyword)

variableType variableName = function (){
    CODE TO BE RUN GOES HERE;
}

OR

-- Can also be done with an ARROW FUNCTION set as the value...

variableType variableName =  () => {
    CODE TO BE RUN GOES HERE;
}

*/


// Example - 
const theFuncExpress = function () {
    console.log(`Hop on board the Func Express`);
    console.log(`This is a Function Expression`);
}
theFuncExpress();

// Example - This is the OLD way 
// Example 2A
// CAN run a function declaration (Or Arrow Function) on a line that precedes where the function is created, because function declarations are Hoisted to the beginning of the JavaScript file.
function funcOne (){
    console.log(`Hello`);
}
funcOne();


// Example 2B - Hoisting
// Can NOT run a Function Expression on a line that precedes where the function is created; Function Expressions are NOT Hoisted to the beginning of JavaScript file
// funcTwo();
console.log(========);

// EXAMPLE - FUNCTION EXPRESSION that uses an ARROW FUNCTION as the FUNCTION VALUE set to the funcThree VARIABLE

const funcTwo = function () {
    console.log(`End of lesson`);

}
funcThree();

// this will HOIST
const funcTwo =  ()  => {
    console.log(`End of lesson`);

}
funcThree ();