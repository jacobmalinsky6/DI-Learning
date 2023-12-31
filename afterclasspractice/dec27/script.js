// https://octopus.developers.institute/courses/collection/87/course/199/section/297/chapter/124#

// Loop through the array above and determine whether or not each number is divisible by three.
// Each time you loop console.log true or false.

let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Given the object above where the key is the student’s name and the value is the country they are from.
// Prompt the student for their name.
// If the name is in the object, console.log the name of the student and the country they come from.

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};

// Two different ways of access the values of an object:
// console.log(guestList["norman"]);
// console.log(guestList.norman);

// let userPrompt = prompt("what is your name?");
// let notGuest = false;

// for (guest in guestList) {
//   if (guest === userPrompt) {
//     console.log("Hi I am " + guest + "," + " I am from " + guestList[guest]);
//     notGuest = true;
//     break;
//   }
// }

// if (!notGuest) {
//   console.log("I am not a guest");
// }

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// for (x in obj) {
//   // Key:
//   console.log(x);
//   //   Value:
//   console.log(obj[x]);
// }

// 1. Console.log the sum of all the numbers in the age array.
// 2. Console.log the highest age in the array.

let age = [20, 5, 12, 43, 98, 55];
let ageSum = 0;
let ageGreatest = 0;

for (a in age) {
  ageSum = ageSum + age[a];
  if (age[a] > ageGreatest) {
    ageGreatest = age[a];
  }
}
console.log(ageSum);
console.log(ageGreatest);

// https://octopus.developers.institute/courses/collection/87/course/331/section/301/chapter/134#

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

function infoAboutMe() {
  console.log("something...");
}
infoAboutMe();

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)

function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log(
    `Your name is: ${personName} your age is: ${personAge} your favorite color is: ${personFavoriteColor}`
  );
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
// Create a function named calculateTip() that takes no parameter.

function calculateTip(bill) {
  if (bill < 50) {
    return bill * 0.2;
  } else if (bill > 200) {
    return bill * 0.1;
  } else {
    return bill * 0.15;
  }
}
let amountTotal = calculateTip(100);
console.log(amountTotal);

// 🌟 Exercise 4 : Shopping List
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

let shoppingList = ["banana", "orange", "apple"];

// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

function myBill() {
  let itemTotal = 0;
  for (item in shoppingList) {
    let itemInBasket = shoppingList[item];
    if (stock[itemInBasket] > 0) {
      itemTotal = itemTotal + prices[itemInBasket];
    }
  }
  return itemTotal;
}
let totalBill = myBill();
console.log(totalBill);
