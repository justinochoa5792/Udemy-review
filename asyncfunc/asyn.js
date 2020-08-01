// async
// *****
async function greet() {
  return "Hello";
}
greet().then((val) => {
  console.log("Promise Resolved With: ", val);
});

async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "X and Y must be numbers";
  }
  return x + y;
}
console.log(add(4, 5));

// await
// *********

function getPlanets() {
  return axios.get("https://swapi.dev/api/planets/");
}

getPlanets().then((res) => {
  console.log(res.data);
});

async function newPlanet() {
  const res = await axios.get("https://swapi.dev/api/planets/");
  console.log(res.data);
}
newPlanet();

// requests
// ********
// Sequential Requests
async function get3Pokemon() {
  const pokemon1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const pokemon2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const pokemon3 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
  console.log(pokemon1.data);
  console.log(pokemon2.data);
  console.log(pokemon3.data);
}
get3Pokemon();

// Parallel Requests
async function getThreePokemon() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const poke1 = await prom1;
  const poke2 = await prom2;
  const poke3 = await prom3;
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}
getThreePokemon();

async function getPokemon() {
  const promise1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const promise2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const promise3 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const results = await Promise.all([promise1, promise2, promise3]);
  printPokemon(results);
}
function printPokemon(results) {
  for (let pokemon of results) {
    console.log(pokemon.data.name);
  }
}
getPokemon();
