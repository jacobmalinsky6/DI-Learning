// Exercise One
// Create 2 variables, x and y. Each of them should have a different numeric value.
let x = 10;
let y = 5;

// Write an if/else statement that checks which number is bigger.
if (x > y) {
  console.log("The value of X: " + x + " is bigger than Y");
} else if (x === y) {
  console.log("Values / type are the same");
} else {
  console.log("Y has a bigger value than X");
}

// Exercise Two
// Create a variable called newDog where it’s value is “Chihuahua”.
let newDog = "Chihuahua";
// Check and display how many letters are in newDog.
console.log(newDog.length);
// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’

if (newDog === "Chihuahua") {
  console.log("I love Chihuahuas, its my favorite dog breed");
} else {
  console.log("I dont care, I prefer cats");
}

// Exercise Three
// Prompt the user for a number and save it to a variable.
let question = prompt("Pick a number");
// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
if (question % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

//  Exercise 4: Group Chat
// Below is an array of users that are online in a group chat.
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
// If there is 1 user, console.log “<name_user> is online”.
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
if (users === 0) {
  console.log("There are no users online");
} else if (users === 1) {
  console.log(users[0] + " is online");
} else if (users === 2) {
  console.log(users + " are online");
} else {
  console.log(
    users[0] +
      ", " +
      users[1] +
      " and " +
      (users.length - 2) +
      " others are online"
  );
}
