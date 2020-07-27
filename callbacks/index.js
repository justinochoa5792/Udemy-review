// call stack
const multiply = function (x, y) {
  x * y;
};
const square = function (x) {
  multiply(x, x);
};
const isRightTriangle = function (a, b, c) {
  return square(a) + square(b) === square(c);
};
isRightTriangle(3, 4, 5);

// asynchronous callbacks
console.log("I happen First");
setTimeout(function () {
  console.log("I happen Third");
}, 3000);
console.log("I happen Second");

console.log("Everyone");

setTimeout(function () {
  console.log("MOOOOOOO!");
}, 7000);

setTimeout(function () {
  console.log("Oink Oink!");
}, 3000);
console.log("Bye Everyone!");
console.log("Bye Everyone For Real!");

const btn = document.querySelector("button");

// setTimeout(function () {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(function () {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(function () {
//       btn.style.transform = `translateX(300px)`;
//       setTimeout(function () {
//         btn.style.transform = `translateX(400px)`;
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const moveX = (element, amount, delay, callback) => {
  const boundary = document.body.clientWidth;
  const elRight = element.getBoundingClientRect().right;
  const elLeft = element.getBoundingClientRect().left;
  if (elRight + amount > boundary) {
    console.log("Done, Cannot Go that Far!");
  } else {
    setTimeout(function () {
      element.style.transform = `translateX(${elLeft + amount}px)`;
      if (callback) callback();
    }, delay);
  }
};
moveX(btn, 100, 1000, function () {
  moveX(btn, 100, 1000, function () {
    moveX(btn, 100, 1000, function () {
      moveX(btn, 10000, 1000);
    });
  });
});
