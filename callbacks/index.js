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
// moveX(btn, 100, 1000, function () {
//   moveX(btn, 100, 1000, function () {
//     moveX(btn, 100, 1000, function () {
//       moveX(btn, 10000, 1000);
//     });
//   });
// });

// using promises to move button

const moveX2 = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const boundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const elLeft = element.getBoundingClientRect().left;
      if (elRight + amount > boundary) {
        reject();
      } else {
        element.style.transform = element.style.transform = `translateX(${
          elLeft + amount
        }px)`;
        resolve();
      }
    }, delay);
  });
};
moveX2(btn, 300, 1000)
  .then(() => moveX2(btn, 300, 1000))
  .then(() => moveX2(btn, 300, 1000))
  .then(() => moveX2(btn, 300, 1000))
  .then(() => moveX2(btn, 300, 1000))
  .then(() => moveX2(btn, 300, 1000))
  .catch(() => {
    console.log("Out Of Space");
  });
// promises

const willGetYouADog = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});
willGetYouADog.then(() => {
  console.log(`Yay we got a dog!!`);
});
willGetYouADog.catch(() => {
  console.log("No Dog :(");
});

// promises in a function

function makeDogPromise() {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    if (rand < 0.5) {
      resolve();
    } else {
      reject();
    }
  });
}
makeDogPromise()
  .then(() => {
    console.log(`Yay we got a dog!!`);
  })
  .catch(() => {
    console.log("No Dog :(");
  });

// fake requests

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 5, username: "Esmerelda" },
        ],
        "/users/1": {
          id: 1,
          username: "Bilbo",
          upvotes: 360,
          city: "Lisbon",
          topPostId: 454321,
        },
        "/users/5": {
          id: 5,
          username: "Esmerelda",
          upvotes: 571,
          city: "Honolulu",
        },
        "/posts/454321": {
          id: 454321,
          title: "Ladies & Gentlemen, may I introduce my pet pig, Hamlet",
        },
        "/about": "This is the about page!",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data }); //resolve with a value!
      } else {
        reject({ status: 404 }); //reject with a value!
      }
    }, 1000);
  });
};
fakeRequest("/users")
  .then((res) => {
    console.log(res);
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
  })
  .then((res) => {
    console.log(res);
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("OH NO!", err);
  });

// ATTEMPT 2 (with error to show CATCH)

// fakeRequest('/users')
// 	.then((res) => {
// 		console.log(res);
// 		const id = res.data[0].id;
// 		return fakeRequest(`/useALSKDJrs/${id}`); //INVALID URL, CATCH WILL RUN!
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		return fakeRequest(`/posts/${postId}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log('OH NO!', err);
// 	})
