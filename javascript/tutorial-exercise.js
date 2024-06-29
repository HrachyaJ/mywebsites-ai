const myName = "Hrachya";

console.log(`My name is ${myName}.`);

let coffee = 5;
let bagels = 3;
let soup = 9;
var cost = coffee + bagels + bagels + soup;

console.log(`Paycheck: $${cost}`);

let tax = cost * 0.1;

console.log(`Tax 10%: $${tax}`);

let afterTaxCost = cost - tax;

console.log(`The cost after tax is $${afterTaxCost}`);

// document.body.innerHTML = 'hello';
// document.title = 'good job';

console.log(document.title);
console.log(document.body);

console.log(document.querySelector('button'));

document.querySelector('button').innerHTML = 'Changed';
document.querySelector('.js-btn').innerHTML = 'Another button';

const btnElement = document.querySelector('.js-btn');

console.log(btnElement);


function subscribe() {
  const buttonElement = document.querySelector('.js-subs-btn');

  if (buttonElement.innerHTML === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  if (cost < 40) {
    cost = cost + 10;
  }

  document.querySelector('.js-total-cost').innerHTML = `$` + cost;
}

function handleCostKeydown() {
  if (event.key === 'Enter') {
   calculateTotal();
  }
}

const testButton = document.querySelector('.js-test');
console.log(testButton.classList.contains('.js-test'));

function isToggled() {
  const gamingBtn = document.querySelector('.gaming-btn');
   if (!gamingBtn.classList.contains('is-toggled')) {
     gamingBtn.classList.add('is-toggled');
   } else {
     gamingBtn.classList.remove('is-toggled');
   }
}

const myArray = [10, 20, 30];
console.log(myArray[0]);
console.log(myArray[1]);

myArray[0] = 11;
console.log(myArray);

myArray.splice(1, 2); //first Number for place, second for deleting
console.log(myArray);

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
//
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// NOTE: This two have the same outcome(result)

let randomNumber = 0;

while (randomNumber < 0.5) {
  randomNumber = Math.random();
}

console.log(randomNumber);

const todoList2 = [
  'make dinner',
  'wash dishes',
  'watch dumb shit'
];

for (var i = 0; i < todoList2.length; i++) {
  const value = todoList2[i];
  console.log(value);
}

const nums = [1, 1, 3];
let total = 0;

for (var i = 0; i < nums.length; i++) {
  const num = nums[i];
  total += num;
}

console.log(total);

const numsDoubled = [];

for (var i = 0; i < nums.length; i++) {
  const num = nums[i];
  numsDoubled.push(num * 2);
}
console.log(numsDoubled);
