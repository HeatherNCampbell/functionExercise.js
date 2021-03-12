const actors = [
    {first: `Jennifer`, last: `Anniston`},//each of the items is
    {first: `Matthew`, last: `Perry`},
    {first: `Courteney`, last: `Cox`},
    {first: `David`, last: `Schwimmer`},
    {first: `Matt`, last: `LeBlanc`},
    {first: `Lisa`, last: `Kudrow`}
];

console.log(`======`);

// EXAMPLE
function realNames(r) {
    return `${r.first} ${r.last}`;
}

console.log(`======`);
// Creates a new ARRAY using MAP METHOD and sets the VALUE of new ARRAY to the (firstAndLast)
actors.map(realNames);//creates a new ARRAY
const firstAndLast = actors.map(realNames);//need to assign a const name to the new ARRAY - use precreated function (realNames)
console.log(firstAndLast);//run new ARRAY (firstAndLast)


console.log(`=======`);

// EXAMPLE  - Using an anonymous ARROW FUNCTION as the ARGUMENT for the MAP METHOD
actors.map(i => `${i.first[0]} ${i.last[0]}`);//whatever is after => will be returned. [0] will return the first letter of first name and first letter of last name

console.log(`======`);
const friendsInitials = actors.map(i => `${i.first[0]} ${i.last[0]}`);//need to assign a const name to the new ARRAY - Passing in an anonymous function

console.log(`======`);
console.log(friendsInitials);