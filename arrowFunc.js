// ARROW FUNCTIONS  -  >=
// RUNS THE SAME AS A REGULAR FUNCTION
/*
Syntax

functionName = ( ) => {
    CODE TO BE RUN GOES HERE;

}

*/

// EXAMPLE - ARROW FUNCTIONS
themeSong = () => {
    console.log(`Just sit right back and you will hear a tale`);
}
themeSong();//Displays "Just sit right back and you will hear a tale"
 
console.log(`========`);

// EXAMPLE - ARROW FUNCTIONS  - Using () NOT {} changes how () work
//NO SEMICOLON (You'll get an error)
// INSIDE A PARENTHESES - Parentheses () can be used in an ARROW FUNCTION to return a value without using the RETURN keyword (NOTE: Semicolon at the end of the line is NOT to be used in this case)
boat = () => (
`The SS Minnow`
)//no semi colon here

const boatName = boat();
console.log(boatName);

console.log(`========`);

// EXAMPLE - USING STRING VALUE
//Returns the value of what is after the ARROW FUNCTION =>
//Value after an ARROW FUNCTION does not require () will display the value inside the function all on one line

crew = ( ) => `Gilligan, Skipper, Ginger, Mr. Howell, Mrs. Howell, Professor, Mary Ann`;
const names = crew();
console.log(names);


console.log(`========`);

// ARROW FUNCTION THAT USES A PARAMETER
// PARENTHESES () are not needed when creating an ARROW FUNCTION with a single parameter
tourLength = num => {
    console.log(`${num} hour tour`);
}
tourLength(3);

console.log(`========`);

// ARROW FUNCTION THAT USES 3 PARAMETERS
lyrics = (one, two, three) => {
    console.log(`No ${one}, no ${two}, no ${three}, Not a single luzury`);
}
lyrics(`phone, lights, motor car`);

