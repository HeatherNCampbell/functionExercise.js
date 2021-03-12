// March 11 2021
// SCOPE uses a lot of loops
// SCOPE determines the accessibility (AKA visability) of VARIABLES
// Where we create a VARIABLE determines where it can be used / called

// FUNCTION SCOPE (Each FUNCTION has it's own SCOPE)

// Example
const location = `Scranton, PA`;
function dunderMifflin() {
    const regionalManager = `Michael Scott`;//inside FUNCTION. Will run first cause console.log (regionalManager)
    console.log(regionalManager);//This is OK cause the console log is also inside the function where the (regionalManager) VARIABLE was created. (The (regionalManager) Variable is SCOPed to the dunderMIfflin function)
    }
    dunderMifflin();
    console.log(location);//This is OK cause the (location) VARIABLE is SCOPED to the entire JavaScript FILE

    
    // NOT OK cause (regionalManager) VARIABLE was created inside the dunderMifflin function so it is SCOPED to that FUNCTION. There we cannot access (regionalManager) VARIABLE outside the FUNCTION
    // console.log(regionalManager);

    console.log(`======`);

    // EXAMPLE
    // let dwight = `Assistant to the Regional Manager`;//console.log will return `Assistant to the Regional Manager`
    // function promotion () {

    // dwight = `Assistant Regional Manager`;
    // }

// console.log(dwight);//Displays the initials value of the (dwight) VARIABLE. Cause the FUNCTION has not been RUN / EXECUTED. (File is running TOP DOWN)

console.log(`==========`);

// Create a VARIABLE that is outside
// let dwight = `Assistant to the Regional Manager`;
//     function promotion () {
//         dwight = `Assistant Regional Manager`;
//     }

// promotion();//Running this FUNCTION - It will display the updated VALUE of the (dwight) VARIABLE cause the FUNCTION was RUN / EXECUTED.
//It is able to access the new VALUE promotion() because the VARIABLE was created / initialized outside of the FUNCTION
// console.log(dwight);

console.log(`==========`);

//EXAMPLE
// let declare = "";
// function bankruptcy () {
//     let declare = `I... DECLARE... BANKRUPTCY!!!`;
//     console.log(declare); // First, checks for a VARIABLE with the name of (declare) inside the FUNCTION / SCOPE, the outside of the FUNCTION / SCOPE if one inside cannot be found.
// }
// bankruptcy();
// console.log(declare); //Will only display the VALUE of (declare) VARIABLE outside of the bankruptcy FUNCTION. (This is because the VARIABLE in the FUNCTION is creating a new different VARIABLE, NOT updating the VALUE of the first VARIABLE.)

console.log(`==========`);

// EXAMPLE - BLOCK SCOPE WITH CONTITIONAL STATEMENTS
// BLOCK SCOPE - Conditional Statements and Loops have BLOCK SCOPE)
// CONDITIONAL STATEMENTS EXAMPLE
// const seasons = 9;
// if (seasons === 9) {
//     const episodes = 201;
// }
// console.log(seasons);// OK

// const seasons = 9;
// if (seasons === 9) {
//     const episodes = 201;
// }
// console.log(seasons);//WILL RUN - (seasons) VARIABLE is SCOPED to the entire JavaScript file (AKA Globally Scoped = entire file)

// console.log(episodes);//WILL NOT RUN - (episodes) VARIABLE is SCOPED to the CONDITIONAL BLOCK (if)

// LOOPS EXAMPLE
for (i = 1; i <= 3; i++) {
    //  you can create VARIABLES in a loop without getting "Already been declared ERROR" because it will be Initialized / Declared each time through the loop (AKA It is like it is being created for the first time each time through the LOOP)
    const fireDrill = `What's the procedure everyone?`;
    // console.log(fireDrill); //this will give us an error when run
}
//NOT OK - (fireDrill) VARIABLE is SCOPED to the Loop Block
// console.log(fireDrill);


console.log(`==========`);
// LEXICAL SCOPE - is the ability for FUNCTION SCOPE to access VARIABLES from the 'parent' SCOPE 
// The 'parent' SCOPE can be another FUNCTION or the entire JavaScript file

// NESTED FUNCTIONS EXAMPLE - UNDER LEXICAL SCOPE
function question(){
    const fearLoved = `Would I rather be feared or loved?`;
    function answer () {
        const easyBoth = `Easy. Both. I want people to be afraid of how much they love me`;
        console.log(easyBoth);
    }
    // answer();//this needs to be run inorder for question() to run
}
question();
// answer();//will not run if this is not inside function quesiton. The answer Function is SCOPED to the SCOPE of the question FUNCTION

console.log(`======`);


function question(){
    const fearLoved = `Would I rather be feared or loved?`;
    function answer () {
        const easyBoth = `Easy. Both. I want people to be afraid of how much they love me`;
        console.log(easyBoth);
    }
    answer();//this needs to be run inorder for question() to run
    // console.log(easyBoth);//Will Not run - this console log  easyBoth VARIABLE is SCOPED to the nested (AKA The answer FUNCTION);
}
question();

console.log(`==========`);

function question(){
    const fearLoved = `Would I rather be feared or loved?`;
    function answer () {
        const easyBoth = `Easy. Both. I want people to be afraid of how much they love me`;
        console.log(easyBoth);
        console.log(fearLoved);//OK - the answer FUNCTION is inside the SCOPE of the (question) FUNCTION which is where the (fearLoved)VARIABLE is created in
    }
    // Must run / execute the answer FUNCTION for it to be run with running/executing the question FUNCTION
    answer();//this needs to be run inorder for question() to run
    // console.log(easyBoth);//Will Not run - this console log  (easyBoth) VARIABLE is SCOPED to the nested (AKA The answer FUNCTION);
}
question();



