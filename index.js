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
