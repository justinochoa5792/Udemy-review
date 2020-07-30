const firstReq = new XMLHttpRequest();

firstReq.addEventListener("load", function () {
  console.log("It Worked!!");
  const data = JSON.parse(this.responseText);
  const filmUrl = data.results[0].films[0];
  const filmReq = new XMLHttpRequest();
  filmReq.addEventListener("load", function () {
    console.log(this);
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  });
  filmReq.addEventListener("error", function () {
    console.log("Error", e);
  });
  for (let planet of data.results) {
    console.log(planet.name);
  }
  filmReq.open("get", filmUrl);
  filmReq.send();
});
firstReq.addEventListener("error", () => {
  console.log("Error!!!!");
});
firstReq.open("get", "https://swapi.dev/api/planets/");
firstReq.send();
console.log("Request Sent");

// fetch

fetch("https://swapi.dev/api/planets/")
  .then((res) => {
    res.json().then((data) => {
      for (let planet of data.results) {
        console.log(planet.name);
      }
    });
  })
  .catch((err) => {
    console.log("Something Went Wrong!");
    console.log(err);
  });
