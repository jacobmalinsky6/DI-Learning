// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0, 1);
console.log(people);
// Write code to replace “James” to “Jason”.
people.splice(2, 1, "Jason");
console.log(people);
// Write code to add your name to the end of the people array.
people.push("Jacob");
console.log(people);
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));
// Write code to make a copy of the people array using the slice method.
let copyPeople = people.slice();
console.log("Copy of people: " + copyPeople);
// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo"));
// It is showing -1 people "Foo" does not exist within the array

// Create a variable called last which value is the last element of the array.
let last = people.pop();
console.log(last);

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}

//Exercise 2 : Your Favorite Colors
//Create an array called colors where the value is a list of your five favorite colors.
let colors = ["Blue", "Green", "Yellow", "Red", "Purple"];
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0; i < colors.length; i++) {
  console.log("My #" + (i + 1) + " choice is " + colors[i]);
}
// Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number
for (let i = 0; i < colors.length; i++) {
  let suffix = ["st", "nd", "rd", "th", "th"];
  console.log("My #" + (i + 1) + suffix[i] + " choice is " + colors[i]);
}
// Exercise 3 : Repeat The Question
// Prompt the user for a number.
// let input = prompt("Enter a Number");
// let number = parseInt(input);

// if (isNaN(number)) {
//   alert("Please enter a valid number");
// } else {
//   console.log(`You entered the number: ${number}`);
// }
// // While the number is smaller than 10 continue asking the user for a new number.
// while (input < 10) {
//   input = prompt("enter a new number");
// }
// console.log("Welcome");

//  Exercise 4 : Building Management

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

// Console.log the number of floors in the building.
console.log("Number of floors in the building: " + building.numberOfFloors);
// Console.log how many apartments are on the floors 1 and 3.
console.log(
  building.numberOfAptByFloor.firstFloor +
    building.numberOfAptByFloor.thirdFloor
);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(
  building.nameOfTenants[1] +
    " has " +
    building.numberOfRoomsAndRent.dan[0] +
    " rooms"
);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
if (
  building.numberOfRoomsAndRent.sarah[1] +
    building.numberOfRoomsAndRent.david[1] >
  building.numberOfRoomsAndRent.dan[1]
) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
  console.log(
    "Dans rent increased to: " + building.numberOfRoomsAndRent.dan[1]
  );
} else console.log("Rent has not been changes for Dan");

// Exercise 5 : Family
// Create an object called family with a few key value pairs.

const family = {
  father: "John",
  wife: "Jill",
  son: "Todd",
  daughter: "Alice",
};

// Using a for in loop, console.log the keys of the object.
for (let key in family) {
  console.log(key);
}
// Using a for in loop, console.log the values of the object.
for (let key in family) {
  console.log(family[key]);
}

// Exercise 6 : Rudolf

const details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let sentence = ""; // Initialize an empty string to store the sentence

// Loop through the object properties
for (const key in details) {
  sentence += details[key] + " "; // Add each key's value to the sentence with a space
}

// Remove the last space
sentence = sentence.trim();

console.log(sentence); // Output: "my name is Rudolf the reindeer"

// Exercise 7 : Secret Group
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// 1. Extract the first letter of each name
const firstLetters = names.map((name) => name[0]);

// 2. Sort the first letters alphabetically
const sortedLetters = firstLetters.sort();

// 3. Join the sorted letters into a single string
const secretSocietyName = sortedLetters.join("");

// 4. Print the secret society name
console.log(secretSocietyName); // Output: ABJKPS
