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
