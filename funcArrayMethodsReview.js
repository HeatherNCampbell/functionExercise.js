// MARCH 12 2021
// ARRAY METHODS REVIEW

const seinfeldEpisodes = [
    {eisodeName: `The Old Man`},
    {eisodeName: `The Chinese Restaurant`},
    {eisodeName: `The Phone Message`},
    {eisodeName: `The Soup Nazi`},
    {eisodeName: `The Strike`},
];

// EXAMPLE
showEpisode = episode => episode.episodeName;
seinfeldEpisodes.map(showEpisode);
console.log(greatEpisodes);

console.log(`=======`);

// FILTER
// Create an ARRAY
const customers = [`Jerry`, `George`, `Eliane`];//ARRAY
const soup = function (name) {//FUNCTION passing in an ARGUMENT
    return name.length === 6;//TEST - won't run Jerry cause it''s 5
}
// Adds George & Elaine ARRAY VALUES to the new ARRAY that is created
customers.filter (soup);//create
const noSoupForYou = customers.filter (soup);
console.log(noSoupForYou);