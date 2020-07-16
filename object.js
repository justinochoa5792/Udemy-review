// objects again

// computed properties
const role = "host";
const person = "Jools Holland";
const team = {
  [role]: person,
};
console.log(team);

function addProp(obj, k, v) {
  const copy = { ...obj };
  copy[k] = v;
  return copy;
}

// Object Method

const math = {
  numbers: [1, 2, 3, 4, 5],
  add2: function add2(x, y) {
    return x + y;
  },
};
console.log(math);
console.log(math.add2(2, 3));

// this
// reference to the current Scope. It will return an Object

function sayHi() {
  console.log("Hi");
  console.log(this);
}
console.log(sayHi());

// This in Methods
const person1 = {
  first: "Cher",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
};
console.log(person1.fullName());

// arrow function This
// const annoyer={
// phrases:['literally','cray cray',"I can't even",'Totes','Yolo',"Can't Stop, Won't Stop"],
// pickPhrase(){
// const{
//     phrases
// }=this;
// const i= Math.floor(Math.random()* phrases.length)
// return phrases[i]
// },
// start(){
// this.timerId= setInterval(() => {
// console.log(this.pickPhrase())
// },3000)
// },
// stop(){
//     clearInterval(this.timerId)
//     console.log('Phew Thank Heavens That is Over')
// }
// },

function makeDeck() {
  const suits = ["hearts", "diamonds", "spades", "clubs"];
  const values = ["1,2,3,4,5,6,7,8,9,10,J,Q,K,A"];
  for (let value of values.split(",")) {
    for (let suit of suits) {
      deck.push({
        value,
        suit,
      });
    }
  }
  return deck;
}
function drawCard(deck) {
  return deck.pop();
}
const myDeck = {
  deck: [],
  drawnCards:[],
  suits = ["hearts", "diamonds", "spades", "clubs"],
  values = ["1,2,3,4,5,6,7,8,9,10,J,Q,K,A"],
  initialzeDeck() {
      const {suites,values,deck}=this
    for (let value of values.split(",")) {
        for (let suit of suits) {
          deck.push({
            value,
            suit,
          })
        }
      }
    //   return deck;
  },
  drawCard(){
      const card= this.deck.pop
      this.drawCard.push(card)
      return card;
  },
  drawMultiple(numCards){
for(let i=0; i<numCards; i++){
cards.push(this.drawCard())
}
return cards
  },
  shuffle() {
      const {deck}=this
   for (let idx= deck.length -1; idx>0; idx--){
       let j= Math.floor(Math.random()* (idx +1))
       [deck[idx],deck[j]]=[deck[j],[deck[idx]]]
   }   
  }
};
