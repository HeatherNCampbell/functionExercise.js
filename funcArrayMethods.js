//MARCH 10 2021
// check mainARRAYMethods exercise under DataStructures for the ARRAY HIGHER ORDER
//FUNCTION ARRAY METHODS (TYPES forEach, Map, Filter)
// ARRAY methods that require a FUNCTION to be passed in as an ARGUMENT

// FOR EACH
// Calls / Runs a FUNCTION for each ITEM in the ARRAY
// ARRAY 
const friends = [
    `Chandler Bing`,
    `Rachel Green`,
    `Monica Geller`,
    `Ross Geller`,
     `Joey Tribbiani`,
     `Phoebe Buffay`
];

//  EXAMPLE - create a FUNCTION to use For EACH ARGUMENT / METHOD
names = (n) => {
    console.log(n);
}
friends.forEach(names);//Runs the (names)FUNCTION on each item in the (friends) ARRAY as the ARGUMENT for the (n)PARAMETER

// FUNCTIONS must have a PARAMETER to plug the VALUE of each ARRAY item into

console.log(`======`);

// EXAMPLE - Runs the anonymous ARROW FUNCTION on each litems in the 'friends' ARRAY  - items in UpperCase
// You can create a new FUNCTION instead of PASSING in a precreated FUNCTION
friends.forEach(m => console.log(m.toUpperCase()));//Passing in m => console.log(m.toUpperCase()))

console.log(`=======`);

// MAP - Creates a new ARRAY with the returned VALUES from calling / running a FUNCTION for every ARRAY item
// The MAP - does NOT change / alter the original ARRAY 

const actors = [
    {first: `Jennifer`, last: `Anniston`},//each of the items is
    {first: `Matthew`, last: `Perry`},
    {first: `Courteney`, last: `Cox`},
    {first: `David`, last: `Schwimmer`},
    {first: `Matt`, last: `LeBlanc`},
    {first: `Lisa`, last: `Kudrow`}
];


// EXAMPLE
function realNames(r) {
    return `${r.first} ${r.last}`;
}

// Creates a new ARRAY using MAP METHOD and sets the VALUE of new ARRAY to the (firstAndLast)
actors.map(realNames);//creates a new ARRAY
const firstAndLast = actors.map(realNames);//need to assign a const name to the new ARRAY - use precreated function (realNames)
console.log(firstAndLast);//run new ARRAY (firstAndLast)


console.log(`=======`);

// EXAMPLE  - Using an anonymous ARROW FUNCTION as the ARGUMENT for the MAP METHOD
actors.map(i => `${i.first[0]} ${i.last[0]}`);//whatever is after => will be returned. [0] will return the first letter of first name and first letter of last name
const friendsInitials = actors.map(i => `${i.first[0]} ${i.last[0]}`);//need to assign a const name to the new ARRAY - Passing in an anonymous function
console.log(friendsInitials);

console.log(`=======`);

// FILTER (similar to MAP) - Creates an ARRAY filled with all ARRAY items that pass a test that is provided as a FUNCTION
// FILTER Method does NOT alter the original ARRAY

// EXAMPLE
const friendsSeasons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findSeasons(season){
    // return season === 4 || season === 5;  
    }
// friendsSeasons.filter(findSeasons);//if this returns a true value (return season === (4 || 5);) will create new array
const bestSeasons = friendsSeasons.filter(findSeasons);//first time it runs, we are passing in (1)item  for the first season then checks second value = nothing will be returned cause the value is false
// Will only return only those TRUE values that are passed in the ARRAY
console.log(bestSeasons);

console.log(`=====`);

// EXAMPLE
const themeSong  = [
    `I'll be there for you`,
    `When the rain starts to pour`,
    `I'll be there for you`,
    `Like I've been there before`,
    `I'll be there for you`,
    `Cause you're there for me too`
  ];

//   theseSong.filter(line => line === `I'll be there for you`);//use FILTER method with ANONYMOUS FUNCTION as the ARGUMENT for the FILTER METHOD
const lyrics = theseSong.filter (line => line === `I'll be there for you`);
console.log(lyrics);