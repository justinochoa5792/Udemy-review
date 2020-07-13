// if/else and switch statement;

let highScore = 1430;
let userScore = 1431;
if (highScore >= userScore) {
  console.log(
    `I am sorry your score is ${userScore} the high score is ${highScore}`
  );
} else {
  console.log(`Congrats your score of ${userScore} is the new high score!`);
}
let emoji = "smiley face";
switch (emoji) {
  case "heart":
    console.log("red");
    break;
  case "smiley face":
    console.log("yellow");
    break;
}

// ternary operator

let status = "offline";

let color = status === "offline" ? "red" : "green";
console.log(color);

// Array

let shoppingList = ["cereal", "cheese", "ice"];
let lotto = [23, 10, 18];

let myCollection = [shoppingList, lotto];
console.log(myCollection);

let topSongs = [
  "first time ever i saw your face",
  "god only knows",
  "a day in the life",
  "life on mars",
];
topSongs.push("Fortunate Son");
topSongs.pop();
console.log(topSongs);

let dishesToDo = [];
dishesToDo.unshift("big plate");
dishesToDo.unshift("bowl");
dishesToDo.unshift("spoon");
console.log(dishesToDo);
dishesToDo.shift();
console.log(dishesToDo);

// nested Array

const board = [
  ["O", null, "X"],
  [null, "X", "O"],
  ["X", "O", null],
];
console.log(board);

// .include method

let ingredients = ["water", "flour", "fish", "butter"];

if (ingredients.includes("flour")) {
  console.log(`It has ${ingredients[1]},I can't eat gluten`);
}

// .reverse & .join

let letters = ["T", "C", "E", "P", "S", "E", "R"];
letters.reverse().join();
console.log(letters);

// objects
const numbers = {
  color: "red",
  100: "one hundred",
  16: "sixteen",
  "46 trombone": "Great Song!",
};
console.log(numbers[100]);
console.log(numbers.color);

const palette = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b",
};
console.log(palette["blue"]);

// adds to an empty Object

const userReviews = {};
userReviews.lilJohn = 4.5;
console.log(userReviews);

// adds to an Object
userReviews.lilJohn += 2;
console.log(userReviews);

// js loops
for (i = 1; i <= 10; i++) {
  console.log("hello");
}

const animals = ["lions", "tigers", "bears"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

for (let i = 1; i <= 10; i++) {
  console.log("Outer Loop", i);
  for (let j = 10; j >= 0; j -= 2) {
    console.log("   Inner Loop", j);
  }
}

// while loop
let target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess != target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log("Congrats you Win!");

// for of loop
let subreddits = ["soccer", "popheads", "cringe", "books"];
for (i = 0; i <= subreddits.length; i++) {
  console.log(subreddits[i]);
}
for (let sub of subreddits) {
  console.log(sub);
}

// for of loops with Object
const movieReviews = {
  Arrival: 9.5,
  Alein: 9,
  Amelie: 8,
  "In Bruges": 9,
  Amadeus: 10,
  "Kill Bill": 8,
  "Little miss Sunshine": 8.5,
  Coraline: 7.5,
};
// You cannot Iterate through an object so you have to use object.keys

for (movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

// for in loop

const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 10000,
};
for (prop in jeopardyWinnings) {
  console.log(prop);
  console.log(jeopardyWinnings[prop]);
}

// functions
function grumpus() {
  console.log("ugh you again!");
  console.log("For the last time!");
  console.log("LEAVE ME ALONE!");
}
// grumpus();
for (let i = 0; i < 5; i++) {
  grumpus();
}

function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`${roll} was rolled!`);
}
rollDie();

function throwDice(numOfRolls) {
  for (let i = 0; i < numOfRolls; i++) rollDie();
}
throwDice(3);

function greet(nickname) {
  console.log(`Hello ${nickname}`);
}
greet("Nick");

function isValid(password, username) {
  if (
    password.length < 8 ||
    password.indexOf(" ") ||
    password.indexOf(username)
  ) {
    return false;
  }
  return true;
}
function isPanagram(sentence) {
  let lowerCased = sentence.toLowerCase();
  for (let char of "abcdefghijlmnopqrstuvwxyz")
    if (!lowerCased.includes(char)) {
      return false;
    }
  return true;
}
//  lexical Scope
// learning how to access in nested functions
function outer() {
  let movie = "amadeus";
  function inner() {
    console.log(movie.toUpperCase());
  }
  inner();
}
outer();

// function expressions
const sum = function (x, y) {
  return x + y;
};
// higher order functions
// functions that operate on/with other functions
function add(x, y) {
  return x + y;
}
const subtract = function (x, y) {
  return x - y;
};
function product(x, y) {
  return x * y;
}
const divide = function (x, y) {
  return x / y;
};
const operation = [add, subtract, product, divide];

operation[1](100, 4);
for (let func of operation) {
  let result = func(30, 5);
  console.log(result);
}

function callThreeTimes(f) {
  f();
  f();
  f();
}
function cry() {
  console.log("BooHoo I am so sad");
}
callThreeTimes(cry);

function rage() {
  console.log("I Hate Everything");
}

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}
repeatNTimes(rage, 5);

// callback function

setTimeout(function () {
  alert("Welcome!");
}, 3000);

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("WHY DID YOU CLICK ME!");
});

// for each
const number = [21, 22, 23, 24, 25, 26, 27];
number.forEach(function (num) {
  console.log(num * 2);
});

function printTriple(n) {
  console.log(n * 3);
}
number.forEach(printTriple);

// Map
const numb = [21, 22, 23, 24, 25, 26, 27];
const doubles = numb.map(function (num) {
  return num * 2;
});
console.log(doubles);

const words = ["asap", "byob", "rvsp", "diy"];
const abbrevs = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});
console.log(abbrevs);

// arrow function
const isEven = (num) => {
  return num % 2 === 0;
};
console.log(isEven(23));

// Array.find
let moviess = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds",
];
const moviee = moviess.find((moviee) => {
  return moviee.includes("Mrs");
});
console.log(moviee);

// Array.filter
const numberss = [34, 35, 67, 54, 109, 102, 32, 9];

const oddss = numberss.filter((n) => n % 2 === 1);
const evens = numberss.filter((n) => n % 2 == 0);
console.log(oddss);
console.log(evens);

// every
// needs every element to be true to return true
const wordz = ["dog", "dig", "log", "bag"];
const all3Let = wordz.every((word) => word.length === 3);
console.log(all3Let);

// Some
// needs only one element to be true to return true
const someStartWD = wordz.some((word) => word[0] === "d");

// sort
// mutates original array
// .slice if you want to create a new array instead of chaning original array
const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];

const acsSort = prices.sort((a, b) => a - b);
const desSort = prices.sort((a, b) => b - a);
console.log(acsSort);
console.log(desSort);

// reduce
const num1 = [3, 4, 5, 6, 7];
const product1 = num1.reduce((total, currentVal) => {
  return total * currentVal;
});
console.log(product1);

// default parameters

function multi(x, y) {
  if (typeof y === "undefined") {
    y = 1;
  }
  return x * y;
}
console.log(multi(4));

// or

function multi2(x, y = 1) {
  return x * y;
}
console.log(multi2(5));

// spread for functions
const num2 = [45, 23, 34, 7, 5];
Math.max(num2);
// get NaN
console.log(Math.max(...num2));
//  spread makes each array seperate numbers which allows you to get the max of an array

// Array literals
const cephalopods = [
  "dumbo octopus",
  "humboldt squid",
  "flamboyant cuttlefish",
];
const gastropods = ["gian african snail", "banana slug", "variable neon slug"];
const cnidaria = ["fire coral", "moon jelly"];

const mollusca = [...cephalopods, ...gastropods];
console.log(mollusca);

// Object literal

const feline = {
  legs: 4,
  family: "Felidae",
};
const canine = {
  family: "Caninae",
  furry: true,
};
const dog = {
  ...canine,
  isPet: true,
  legs: 4,
};
console.log(dog);

// rest
// uses ... like spread but instead collects things into a single arry
// review before rest
function sum2() {
  const argsArr = [...arguments];
  return argsArr.reduce((total, currVal) => {
    return total + currVal;
  });
}
console.log(sum2(1, 2, 3, 4, 5));

function sum3(...nums) {
  return nums.reduce((total, currVals) => {
    return total + currVals;
  });
}
console.log(sum3(4, 5, 6, 7));

function fullName(first, last, ...title) {
  console.log("first:", first);
  console.log("last:", last);
  console.log("title:", title);
}
console.log(fullName("indiana", "jones", "III", "order of the pheonix"));

// destructuring Array
const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward",
];
const [gold, silver, bronze] = raceResults;
console.log(gold);
const [first, , , fourth] = raceResults;
console.log(fourth);
const [winner, ...others] = raceResults;
console.log(others);

// destructuring Object
const runner = {
  first2: "Eluid",
  last2: "Kipchoge",
  country2: "Kenya",
  title2: "Elder of the order of the golder heart of kenya",
};
const { first2, last2, ...other } = runner;
console.log(first2);
console.log(other);

const response = ["HTTP/1.1", "200 OK", "application/json"];
function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`);
}
parseResponse(response);
