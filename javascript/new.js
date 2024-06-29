let number = 10;
if (number <=10) {
  console.log("You've passed exam!");
}else {
  console.log("You've failed.");
}

let date = new Date;
console.log(date);
document.getElementById("demo-time").innerHTML = "The Date is: " + date;

var x = 83.9;
var y = 25.8;
var z = 21.9;
let Result = x - y + z;
console.log("The result is: " + Result);

const cars = ["Porsche","Mercedes-Benz","BMW","Aston Martin"];
cars.push("Bugatti")
console.log(cars.length);
let text = "";

for (var i = 0; i < cars.length; i++) {
  text += cars[i] + "; " ;
}
console.log(text);

function myFunction() {
  document.getElementById("show").innerHTML = number - x + y * z;
}

for (let i = 1; i < 5; i++) {
  console.log("Attempt " + i);
}

let counter = 1
while (counter < 4) {
  console.log("Loading..." + " " + counter)
  counter++
}

console.warn("BOMBACLART!!!");
console.error("23 baby mudda reeeaaaaal badman");
console.dir("something something Steve?");

let userName = "Gary";
function greetUser() {
  console.log("Hello " + userName);
  console.log("Welcome back");
  document.getElementById("usrnm").innerHTML = "Hello " + userName;
}

let name = "Alex";
let age = "50";
name += " Jones";
console.log(name + " - " + age + " years old");

// Create a Map
const fruits = new Map([
  ["apples", 135],
  ["banana", 245],
  ["ananas", 445]
]);

fruits.set("ananas", 500)
document.getElementById("demo").innerHTML = "The price of pineapple is: " + fruits.get("ananas");
document.getElementById("demoLite").innerHTML = "Fruits left in the storage: " + fruits.size;
let letters = ["a","b","c"];
letters.forEach(function (value, i) {
  text += value + "<br>"
});

function testAlert() {
  alert("YOU'RE FUCKIN FAILURE");
}

function display() {
  var txt = prompt("are you straight?");
  console.log("Are you straight: " + txt);
}

class Car {
  constructor(name, year, price) {
  this.name = name;
  this.year = year;
  this.price = price;
  }
}

const myCar = new Car("Aston Martin", 2023, "$300000");

console.log(myCar);

var lang = navigator.language;
console.log("The language of website is: " + lang);

var isOnline = navigator.onLine;
console.log("Browser is online: " + isOnline);

var isJavaOn = navigator.javaEnabled();
console.log("Java is enabled: " + isJavaOn);

function chat() {
  let txt;
  let person = prompt("Please enter your name:", "Harry Potter");
if (person == null || person == "") {
  txt = "User cancelled prompt.";
} else {
  txt = "Hey " + person + "!" + "<br>" + "How are you doing?";
}
document.getElementById('chat').innerHTML = txt;
}

// "/n is a line break"

function funcsec() {
  alert('Thank you for your patience ;-)');
}

function myTimer() {
  const t = new Date();
  document.getElementById('timer').innerHTML = t.toLocaleTimeString();
}
