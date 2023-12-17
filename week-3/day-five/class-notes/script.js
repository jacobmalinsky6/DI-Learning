// Loops

// For Loop
// // for (statement 1; statement ; statement 3) {
//     code block to execute
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// Looping through array:

// let colors = ["red", "yellow", "black", "pinks"];
// for (let i = 0; i < 4; i++) {
//   console.log(colors[i]);
// }

// We take i and use it as a position in a loop
// This loop we created is NOT DYNAMIC b/c we set a fixed value for the loop - this wont work b/c if we dont know the length of the array then this code wont work, also if the array changes a lot then we wont know either ...

// Improved code:
// let colors = ["red", "yellow", "black", "pinks"];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// Exercise One
// Write a javascript for loop that will iteraite from 0 - 15
// For each interation it will check if the number is odd or even and display a message to the screen
// We use remainder for determining if a number is even or odd ...
// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " is an even number");
//   } else {
//     console.log(i + " is an odd number");
//   }
// }

// // For In Loop - Looping through objects

// Syntax:
// // for (variable in object){
//     statement / code block
// }

// let person = {
//   fname: "John",
//   lname: "doe",
//   age: 25,
// };

// accessing the keys & values within an object using an In loop:
// for (let key in person) {
//   console.log("The value of the key: " + key + " is: " + person[key]);
// }

// For Of Loop: Looping through Arrays
// Syntax:
// // for (let variable of object){
//     console.log(variable)
// }

// Loop through Array
// let colors = ["blue", "yellow", "green"];
// for (let element of colors) {
//   console.log(element);
// }

// loop through string:
// let str = "Hello my name is Jacob";
// for (let element of str) {
//   console.log(element);
// }

// While Loops:

// Syntax:
// // while (boolean condition){
//     loop statements
// }

// let n = 0;
// while (n < 3) {
//   n++;
//   console.log(n);
// }

// let username = prompt("Please enter the correct username:");
// while (username != "admin") {
//   username = prompt("Please enter the correct username:");
// }
// console.log("Welcome admin");

// Do While Loops: Will execute code block at least once & check the condition AFTER
// Syntax:
// // do {
//     statement...
// }
// while (condition)

// Example:
// let username = "admin";
// do {
//   username = prompt("Please enter the correct username:");
// } while (username !== "admin");

// Break Statement:
// BREAKS the loop and continues exectuing code AFTER the loop:

// for (let i = 0; i < 10; i++) {
//   console.log("Before if statement");
//   console.log(i);
//   if (i === 3) {
//     break;
//   }
//   console.log("After if statement");
// }

// Continue:
// Used to skip one interation in the loop & continues with the next iteration
// In this example 3 , 7, 8 will be skipped over b/c we set this as the condition for continue:

// for (let i = 0; i < 10; i++) {
//   if (i === 3 || i === 7 || i === 8) {
//     // Continue skips the current iteration
//     continue;
//   }
//   console.log("The numners is " + i);
// }

// Exercise Two:

// Write a javascript for loop that will go through variable names:
// if the item is not a string, pass.
// if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.

let names = ["Bob", "Johnny", "Sam", "Earl"];

// Loop through the variables
for (let variable of names) {
  // Check if the variable is a string
  if (typeof variable === "string") {
    // Check if the first letter is lowercase
    if (!variable[0].toUpperCase()) {
      // Change the first letter to uppercase
      let capitalizedName =
        variable.charAt(0).toUpperCase() + variable.slice(1);
      console.log(`Capitalized name: ${capitalizedName}`);
    }
  } else {
    // Pass if not a string
    continue;
  }
}

// Write a JavaScript for loop that will go through the variable names:
// if the item is not a string, go out of the loop.
// if the item is a string, display it.

for (x of names) {
  if (typeof x !== "string") break;
  else {
    console.log(names);
  }
}
