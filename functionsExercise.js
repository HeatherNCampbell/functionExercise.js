//  1
function fozzieBear (){
    console.log("Wocka Wocka!");
}
fozzieBear();

console.log(`======`);

//  2
function beaker (speak){
   console.log(`${speak}`);
   console.log(`${speak}`);
   console.log(`${speak}`);
   console.log(`${speak}`);
   
   }
beaker('speak');
beaker(`Meep`);

console.log(`======`);

//  3
function werewolf (a, b) {
if (a == "Muppet" &&
b == "Show"){
console.log("It's time to play the music. It's time to light the lights.");
}
}
werewolf("Muppet", "Show");

console.log(`======`);

//  4
function kermit (){
    return `Kermit The Frog`;
}
console.log(kermit());


console.log(`======`);

//  5
function muppetShowSeasons (seasons){
    if(seasons === 5){
        return `true`;
    }
    return 'false';
}
muppetShowSeasons(true);
console.log(muppetShowSeasons(true));
console.log(muppetShowSeasons(false));

console.log(`======`);

//  6
const muppets = [
    `Kermit The Frog`,
    `Miss Piggy` ,
    `Fozzie Bear`,
    `The Great Gonzo`
    ];

console.log(muppets);

console.log(`======`);

// 6b
function showMuppets (names){
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
};
showMuppets(muppets);

console.log(`=====`);

// 7
const ManOrMuppett = function (){
    console.log(`Am I a man or a Muppet?`);
}
ManOrMuppett();

console.log(`======`);

// 8
rainbowConnection = () => `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`;
console.log(rainbowConnection());

console.log(`======`);

//  9 
// no

// 10
// yes

//  11a
const newMuppetMovies = [
    `The Muppets`,
    `Muppets Most Wanted`
];
console.log(newMuppetMovies);

console.log(`======`);

//   11b
 function upMov(nMov) {
    return nMov.toUpperCase();
}
const upperMovies = newMuppetMovies.map(upMov);
console.log(upperMovies);

console.log(`======`);

// 12 a
const oldMuppetMovies = [
    "The Muppet Movie", 
    "The Muppets Take Manhattan", 
    "The Great Muppet Caper", 
    "The Muppet Christmas Carol", 
    "Muppet Treasure Island", 
    "Muppets From Space"
];

console.log(`======`);

// 12b
const moreMovies = function(name){
    return name.length === 22;
}

const twoMovies = oldMuppetMovies.filter(moreMovies);
console.log(twoMovies);