
// MARCH 10, 2021
// HIGHER ORDER FUNCTIONS - passes a FUNCTION into a FUNCTION as a PARAMETER ARGUMENT

// EXAMPLE  - CREATE A FUNCTION AS A PARAMETER
function showNumber(num) {
    console.log(num);
    
}
// const number = (2);//not needed for this example but another way of adding 920
showNumber(2);//num is the FUNCTION, (2) is passed in as the PARAMETER ARGUMENT - another FUNCTION

// EXAMPLE 1 (PASSING a preexisting FUNCTION as a PARAMETER)

// This is FUNCTION that will pass as an ARGUMENT into another  `print` FUNCTION
function hello (){
    console.log(`Hello`);
}

function print (greet) {
    // Need to include the parenthesis "()" so the FUNCTION passed in as an ARGUMEnt will run / execute
    greet ();//passing in a FUNCTION
}
// DO NOT unclude "()" after FUNCTION name when passing in as an ARGUMENT. Doing this will run / execute the FUNCTION before it is PASSED in.
print (hello);//Passing in a FUNCTION from FUNCTION hello from hello FUNCTION

console.log(`=========`);

// EXAMPLE - Passing in a FUNCTION
function funcOne(p = function(){
    console.log(`Set a FUNCTION as the default PARAMETER value`);
})//set default FUNCTION for a PARAMETER (p = function (){} ). Everthing from (p thru first }
{
p ();//Only line of code to be written for funcOne FUNCTION. Does not include (p = function thru })
}
funcOne ();//Runs the funcOne FUNCTION with the default anonymous FUNCTION (p = function(){console.log(`Set a FUNCTION as the default PARAMETER value`);
// })as the ARGUMENT for 'p' PARAMETER.


function funcOne(p = function(){
    console.log(`Set a FUNCTION as the default PARAMETER value`);
})//set default FUNCTION for a PARAMETER (p = function (){} ). Everthing from (p thru first }
{
p ();//Only line of code to be written for funcOne FUNCTION. Does not include (p = function thru })
}
funcOne ();

console.log(`========`);

funcOne(hello);//Runs the funcOne FUNCTION with the "hello" FUNCTION  as the ARGUMENT

console.log(`=====`);

//HIGHER ORDER - Anonymous ARROW FUNCTION
//Runs / executes the anonymous ARROW FUNCTION that is passed in as the ARGUMENT
funcOne = (() =>  console.log(`This is an anonymous ARROW FUNCTION`));//Being PASSED IN from => console.log(`This is an anonymous ARROW FUNCTION`)

console.log(`=====`);


