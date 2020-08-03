String.prototype.yell = function () {
  return `OMG!!! ${this.toUpperCase()}!!!! Ahhhhh}`;
};
console.log("I love you".yell());

function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rgb(r, g, b) {
  return `rgb(${r},${g}, ${b})`;
}
console.log(hex(23, 45, 10));

//This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex(); //firstColor.hex();
firstColor.rgb(); //"rgb(35, 255, 150)"

const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#0000s00"

// constructor functions
// *********************

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}
Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};
Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
const color1 = new Color(255, 40, 100);
const color2 = new Color(0, 0, 0);

console.log(color1 === color2);

document.body.style.backgroundColor = color1.rgb();

class Colors {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  innerRGB() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()},${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}
const c1 = new Colors(255, 67, 89, "tomato");
const white = new Colors(255, 255, 255, "white");
console.log(c1);
console.log(white);
console.log(white.hex());

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}
class Dog extends Pet {
  bark() {
    return "WOOFF!";
  }
  eat() {
    return `${this.name} scarfs her food!`;
  }
}
const Luna = new Dog("Luna", "8");
console.log(Luna.eat());
console.log(Luna.bark());
