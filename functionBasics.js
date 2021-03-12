// MARCH 10
// FUNCTION BASICS
// functions are created LINES OF CODE that we can use throughout a JavaScript file (AKS Reusable Procedures)

/* EXAMPLE OF GOOD USE OF FUNCTIONS 
Yhatzee Dice Roll Function Example (Roll)
*/

// const die1 = Math.floor(Math.random() * 6) +1;
// console.log(die1);
// const die2 = Math.floor(Math.random() * 6) +1;
// console.log(die2);
// const die3 = Math.floor(Math.random() * 6) +1;
// console.log(die3);
// const die4 = Math.floor(Math.random() * 6) +1;
// console.log(die4);
// const die5 = Math.floor(Math.random() * 6) +1;
// console.log(die5);

// Instead of writing above code use FUNCTION
// function rollDie(){
//   return Math.floor(Math.random() * 6) + 1;
// }

// const die1 = rollDie();
// const die2 = rollDie();
// const die3 = rollDie();
// const die4 = rollDie();
// const die5 = rollDie();

// console.log(die1);
// console.log(die2);
// console.log(die3);
// console.log(die4);
// console.log(die5);

// LESSON STARTS HERE

/* 

Syntax Example - BASIC EXAMPLES to create and use

To create a function...functionName can be anything
function functionName (){
    CODE TO BE RUN GOES HERE;
}



TO RUN/USE A FUNCTION
functionName();
*/

// EXAMPLE 1 - BASIC
// Creates the "scream" function
function scream( ){
    console.log(`Do you like scary movies?`);//will not display on console log cause we haven't run it yet
}
// Runs / executes the "scream" function
scream();//consol log will run because we are using the function name 

console.log(`========`);

// Example 2
// A function can have multiple lines of code inside of it
function saw (){
    console.log(`Do you want to ...`);
    console.log(`play a game?`);
}
// A function can be run/executed unlimited times in a file
saw();
saw();

console.log(`========`);

// FUNCTION WITH PARAMETERS / ARGUMENTS (mixins)
// PARAMETERS are the names we will use inside function is created (declared)
// Arguments are the values entered(passed) in when running (executing)the function
/* 
Syntax Example

To create a function with a parameter.....
function functionName(parameter){
    CODE TO BE RUN GOES HERE - this is where CODE & PARAMETER will be run/executed;
}

To run a function with a PARAMETER....
Value is ARGUMENT
functionName(ARGUMENT goes here)

*/
//  EXAMPLE -  FUNCTIONS WITH PARAMETERS
// like plugging in variable value into Template Literal (`$()`);

function horrorMovieVillain (villain){
    console.log(`${villain} is the scariest horror movie villain`);//"villain" is the parameter in this function
}
// PASSING in a Template Literal
// `MICHAEL MYERS` is the ARGUMENT that is passed into the FUNCTION
horrorMovieVillain(`Michale Myers`);//MICHAEL MYERS IS BEING PLUGGED INTO ${villian}
horrorMovieVillain(`Pennywise`);
horrorMovieVillain(`Xenomorph`);

console.log(`========`);

// EXAMPLE - USE PARAMETERS MULTIPLE OF TIMES
// A PARAMETER can be used multiple times inside of a function
function beetlejuice(name){
console.log(`${name}, ${name}, ${name}`);

}
beetlejuice(`BeetleJuice`);


// EXAMPLE - WORD REVERSE
function theShining(word){
    const message = word.reverse();
console.log(message);

}
// Parameters can accept all types of value (STRINGS, NUMBERS, AND DATA STRUCTURES - ARRAYS AND OBJECTS, ETC)
theShining(["R", "E", "D", "R", "U", "M"]);//THIS IS AN ARRAY ARGUMENT = WORD

console.log(`========`);


// EXAMPLE - MORE THAN ONE FUNCTION
// A FUNCTION can have mulitple parameters
function villainWeapon (villain, weapon){
    console.log(`${villain}'s weapon of choice is a ${weapon}`);
}
villainWeapon(`Jason`, `Machete`);
villainWeapon(`Leatherface`, `CHAINSAW`);
villainWeapon(`Chucky`, `Creative Mind plus knives`);
villainWeapon(`Candyman`, `Hook and Bees`);

console.log(`========`);

// EXAMPLE - USING NUMBERS AS ARGUMENTS
// Using two PARAMETERS

function sawMovies(numMovies, preferredNumMovies){
    console.log(`They have made ${numMovies} Saw movies. That is ${numMovies - preferredNumMovies} too many. They should have just made ${preferredNumMovies}.`);
  }
  // Parameters (PASSING IN AN ARGUMENT FOR THE PARAMETER) can accept all types of values (Strings, Numbers, Arrays, etc.)
//   If a number is added into a string it will be converted to a string value
  sawMovies(9, 3);

console.log("========");

function sawMovies(numMovies, preferredNumMovies){
    console.log(`They have made ${numMovies} Saw movies. That is ${numMovies - preferredNumMovies} too many. They should have just made ${preferredNumMovies}.`);
  }
  // Parameters can accept all types of values (Strings, Numbers, Arrays, etc.)
  sawMovies(9, 3);

  // Example 6
// A default ARGUMENT can be set for a PARAMETER (parameter = quote)
function horrorMovieQuote(quote = `Here's Johnny!`){
    console.log(quote);
  }
  // Runs/executes the function with the default ARGUMENT. Each Addition overrides the first
  horrorMovieQuote();
  horrorMovieQuote(`We have such sights to show you`);//We're passing in a new ARGUMENT (`We have such sights to show you`) which overrides the default value ()
  horrorMovieQuote(`It rubs the lotion on it's skin, or it gets the hose again`);
  horrorMovieQuote(`Candycane`);

  console.log("========");

//   RETURN KEYWORD
// The RETURN Keyword stops the execution of a function and returns a value if a value is present


console.log(`========`);
/* 
Syntax Example

function functionName (){ 
    return value;
}

*/

// RETURNING A VALUE  IS DIFFERENT THAN CONSOLE LOG. RETURN keyword will not display value in Terminal / Console. But, we are not able to capture or set that value. However, we can RETURN a VALUE and set to 'something'

// EXAMPLE - RETURN KEYWORD - Just returning a VALUE(`I See Dead People`) if a VALUE is present
function sixthSense(){
    return `I See Dead People`;//what ever comes after RETURN is what is displayed
}
sixthSense();//returns nothing
console.log(sixthSense());//FUNCTION returns a value and the value is displayed in the terminal/console

const cole = sixthSense();//FUNCTION returns a value and the value is displayed in the terminal/console
console.log(cole);

console.log(`========`);

// Example - does not have any parameters
function freddyKruger(){
    console.log(`Whatever You do....`)
    return;//stops the execution of a FUNCTION (stops the line after from displaying. However if the line was part of RETURN it would display
    console.log(`Don't Fall Asleep`);//The second console.log will NOT run because RETURN  stops this and any following lines
}

freddyKruger();

console.log(`========`);

// EXAMPLE - (NEED TO REWATCH THIS PART OF THE VIDEO) 
// Functions can contain multiple RETURN keywords
function aQuietPlace(sound){
    if (sound === ""){
      return `You are safe`;
    }
    return `THEY HEAR YOU!!!`;
  }
  const safe = aQuietPlace("");
  console.log(safe);
  const notSafe = aQuietPlace("Child's toy makes a noise");
  console.log(notSafe);
  
  console.log("=======");

// EXAMPLE
// FUNCTION NESTING
/* 
Syntax EXAMPLE

function functionNameOne (){
    CODE TO BE RUN GOES HERE (If necessary);
    function functionNameTwo (){
        CODE TO BE RUN GOES HERE;
    }
    functionNameTwo(); //needs to run side
    CODE TO BE RUN GOES HERE (If necessary);
}
*/

// EXAMPLE FUNCTION NESTING

function dracula(){
    function draculaOne(){
      console.log(`I do not drink, wine.`);
    }
    // NESTED FUNCTION must be run/executed inside the outer FUNCTION when using FUNCTION NESTING
    draculaOne();//this is functionNameTwo that is needed to display
}

dracula();
















