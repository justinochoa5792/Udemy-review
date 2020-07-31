// const firstReq = new XMLHttpRequest();

// firstReq.addEventListener("load", function () {
//   console.log("It Worked!!");
//   const data = JSON.parse(this.responseText);
//   const filmUrl = data.results[0].films[0];
//   const filmReq = new XMLHttpRequest();
//   filmReq.addEventListener("load", function () {
//     console.log(this);
//     const filmData = JSON.parse(this.responseText);
//     console.log(filmData);
//   });
//   filmReq.addEventListener("error", function () {
//     console.log("Error", e);
//   });
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   filmReq.open("get", filmUrl);
//   filmReq.send();
// });
// firstReq.addEventListener("error", () => {
//   console.log("Error!!!!");
// });
// firstReq.open("get", "https://swapi.dev/api/planets/");
// firstReq.send();
// console.log("Request Sent");

// // fetch

// fetch("https://swapi.dev/api/planets/")
//   .then((res) => {
//     if (!res.ok) throw new Error(`status code error: ${response.status}`);

//     return res.json();
//   })
//   .then((data) => {
//     console.log("Fetched all of the planets(first 10)");
//     const filmUrl = data.results[0].films[0];
//     return fetch(filmUrl);
//   })
//   .then((response) => {
//     if (!response.ok) throw new Error(`Status code error: ${response.status}`);
//   });

// // refactoring fetch chain

// const checkStatusAndParse = (response) => {
//   if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

//   return response.json();
// };

// const printPlanets = (data) => {
//   console.log("Loaded 10 more planets...");
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
//   return fetch(url);
// };

// fetchNextPlanets()
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .catch((err) => {
//     console.log("SOMETHING WENT WRONG WITH FETCH!");
//     console.log(err);
//   });

// Axios
axios
  .get("https://swapi.dev/api/planets/")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

axios
  .get("https://swapi.dev/api/planets/")
  .then(({ data }) => {
    console.log(data);
    for (let planet of data.results) {
      console.log(planet.name);
    }
    return axios.get(data.next);
  })
  .then(({ data }) => {
    console.log(data);
    for (let planet of data.results) {
      console.log(planet.name);
    }
  });
