// MARCH 12 2021
// FUNCTIONS BASICS REVIEW
// A JavaScript FUNCTION is a block of code designed to perform a specific task

// SEE functionBasics.js for details

// EXAMPLE 1 - create a function without passing anything in
// Creates the phineasFerb function
function phineasFerb() {
    console.log(`Hey Ferb, I know what we're gonna do today!`);
}
phineasFerb();

console.log(`========`);

// EXAMPLE 2 - multiple lines of code inside a function - create a function without passing anything in
// A function can have multiple lines
function perry() {
    console.log(`Hey...`);
    console.log(`where's Perry?`);
}
// A function can be run mulitple times - just repeat
perry();
perry();
perry();

console.log(`========`);

// PARAMETERS & ARGUMENTS
// Parameters are the names created 

// EXAMPLE 1
function bestCharacter(char) {
    console.log(`${char} is the best character on Phineas and Ferb`);
}
// bestCharacter();//because we did not enter char - pass in an ARGUMENt - inbetween ()the return is undefined
// (char) is the PARAMETER
bestCharacter(`Dr Heinz Doofenshmirtz`);//(`Dr Heinz Doofenshmirtz`) is passing into (char) and becomming the ARGUMENT VALUE
bestCharacter(`Buford Van Stomm`);//passing in ARGUMENT - running FUNCTION again but we have a different output
bestCharacter(`Norm`);//passing in ARGUMENT of (`Norm`)


// Passing in a VARIABLE as an ARGUMENT monogram into bestCharacter 
const monogram = `Major Francis Monogram`;
bestCharacter(monogram);

console.log(`========`);

// EXAMPLE 2 - Multiple times
// A single PARAMETER can be used multiple times in a FUNCTION
function doofAndPerry(adjective) {
   console.log(`Oh Perry the Platypus, how un${adjective} and by un${adjective} I mean COMPLETELY ${adjective}!`); 
}
doofAndPerry(`expected`);

console.log(`========`);

// Example 3
function openingSong(num) {
    console.log(`There's ${num} days of summer vacation...`);
}
// Parameters can accept all types of VALUES (Strings, Numbers, etc...)
// NOTE: When concatenating a Number VALUE to a STRING  the Number will be changed to a STRING VALUE
openingSong(104);//passing in Number VALUE - converts into a STRING
openingSong("104");//passing in String VALUE

console.log(`========`);

// EXAMPLE 4
// FUNCTION has two PARAMETERS
function doof(name, animal){
    console.log(`Curse you, ${name} the ${animal}!`);
}
doof(`Perry`, `Platypus`);//Two different ARGUMENTS being passed into VALUE. When we run this the first ARGUMENT will pass into PARAMETER-


// EXAMPLE 5 - 
// A default ARGUMENT can be set for a PARAMETER
function invention(inator = `Bread`) {
    console.log(`Behold my new evil scheme, the ${inator}-Inator!`);
    }
// Runs / executes the FUNCTION with the default ARGUMENT value
invention ();
invention(`Mustache`);//Overriding default ARGUMENT with the 'Mustache' ARGUMENT Value

console.log(`========`);

// RETURN KEY WORD
// ALWAYS Stops the execution of a FUNCTION and Returns a VALUE( only if value present)








// EXAMPLE 2 - Whenever we're in a FUNCTION with a RETURN keyword
function perryTheme() {
    console.log(`Dooby dooby doo-bah`);
    return console.log(`Perry`);    //RETURN will STOP the run VALUE. IF RETURN is on the same line the line will return.
    console.log(`Perry`);//This line will not run items on next line or below within the string?

}
perryTheme();

// EXAMPLE 3 - RETURN keyword can be used multiple times 
function busted(momFindsOut) {
    if (momFindsOut) {
        return `In Trouble`;
    }
    return `Not In Trouble`;
}
busted(true);//Passing in Boolean Value of TRUE
console.log(busted(true));//Passing in Boolean Value of TRUE
console.log(busted(false));


console.log(`========`);



