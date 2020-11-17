let name = "justin";
let phrase = "this isn't very nice!";

// console.log(name + " " + phrase);

// var first = prompt("enter a number");
// var second = prompt("enter another number");
// var sum = Number(first) + Number(second);
// alert("The answer is" + " " + sum);
// console.log(sum);

// function getName() {
//   var name = prompt("enter name");
//   if (name === "justin" || "Justin") {
//     return alert(`"Hello Justin!"`);
//   } else {
//     return alert("Who are you?!");
//   }
// }
// getName();

// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?
var age = prompt("What is your age?");

function checkDriverAge() {
  if (Number(age) < 18) {
    alert("Sorry, you are too yound to drive this car. Powering off");
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
}
checkDriverAge();
//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.
var checkDriverAge2 = function () {
  if (Number(age) < 18) {
    alert("Sorry, you are too yound to drive this car. Powering off");
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
};
//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:

function checkDriverAge(age) {
  if (Number(age) < 18) {
    console.log("Sorry, you are too yound to drive this car. Powering off");
  } else if (Number(age) > 18) {
    console.log("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    console.log(
      "Congratulations on your first year of driving. Enjoy the ride!"
    );
  }
}

console.log(checkDriverAge(92));
// it returns "Powering On. Enjoy the ride!"

function sing(song) {
  console.log(song);
}
sing("Ladd deee daa");
sing("Hello");

function multiply(a, b) {
  if (a > 10 || b > 10) {
    return "that's too hard!";
  } else return a * b;
}

console.log(multiply(5, 2));
console.log(multiply(30, 2));

let list = ["lions", "tiger", "bears"];
console.log(list[1]);
console.log(list.shift());
console.log(list);
console.log(list.push("elephant"));
console.log(list);
console.log(list.sort());

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  return console.log(num);
});

// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
console.log(array.shift());
// 2. Sort the array in order.
console.log(array.sort());
// 3. Put "Kiwi" at the end of the array.
console.log(array.push("kiwi"));
// 4. Remove "Apples" from the array.
console.log(array.splice(0, 1));

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
console.log(array.reverse());
// you should have at the end:
"Kiwi", "Oranges", "Blueberries";

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1][0]);

var user = {
  name: "Justin",
  age: "28",
  hobby: "weightlifting",
};
console.log(user.hobby);

// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

let people = {
  Username: "Justin",
  Password: "Password",
};

// 2. Create an array which contains the object you have made above and name the array "database".

let database = [
  {
    Username: "Justin",
    Password: "Password",
  },
  {
    Username: "Sally",
    Password: "Pass",
  },
  {
    Username: "Ingrid",
    Password: "777",
  },
];
console.log(database);
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
let newsfeed = [
  {
    username: "bobby",
    timeline: "So tired from all that learning!",
  },
  {
    username: "sally",
    timeline: "Javascript is sooooo cool!",
  },
  {
    username: "mitch",
    timeline: "Javascript is pretty cool!",
  },
];

console.log(newsfeed);

let userPrompt = prompt("What is your username");
let passPrompt = prompt("What is your password");

function validUser(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (
      database[i].Username === username &&
      database[i].Password === password
    ) {
      return true;
    }
  }
  return false;
}
function signIn(user, password) {
  if (validUser(user, password)) {
    console.log(newsfeed);
  } else {
    alert("Sorry wrong username or password");
  }
}

signIn(userPrompt, passPrompt);

let todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat",
];

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i]);
}

let counterOne = 0;
while (counterOne < 10) {
  counterOne++;
  console.log(counterOne);
}

todos.forEach(function (todos) {
  console.log(todos);
});
