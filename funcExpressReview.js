// EXAMPLE - FUNCTION NESTING (mentioned in SCOPE Lesson)

function findPerry () {
    function foundPerry () {
        console.log(`Oh, there you are Perry.`);
    }
    // NESTED FUNCTIONS must be called / run inside the outer function
    foundPerry();//Need to call / execute foundPerry within findPerry
}
findPerry();//Need to call / execute foundPerry within findPerry

console.log(`========`);

// FUNCTIONS EXPRESSIONS REVIEW - Another way to create a FUNCTION
// ARROW FUNCTION

const funcOne = function () {
    console.log(`Function Expression`);
}
funcOne();


// Example 2 - difference between arrow function without setting it to a variable (running fuction )
const arrowFunc = () => console.log(`Function Expression using an anonymous Arrow Function`);

