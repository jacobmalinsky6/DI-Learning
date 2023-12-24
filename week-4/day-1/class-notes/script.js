// Functions: A function is a block of code designed to perform a specific task.

// Syntax:

// function fntName() {
//   //statements
// }

// Example of syntax:
function a() {
  console.log("Hello students of javascript!");
}
// How to call / execute the function:
a();
// Executing function within another function:
function b() {
  for (let i = 0; i < 10; i++) {
    a();
    console.log("");
    // console.log("") makes a new line each time above
  }
}
// Calling the function b (which stores function a inside of it):
b();

// Parameters
// Parameters are only recognized inside the function! The parameters behave as local variables.

// Syntax:
// function myFunc(param1,param2, ..., paramN){
//     //statement
// }

// Example of syntax:
function greeting(name, email) {
  console.log(
    "Hello, " + name + " welcome to JS lesson" + " your email is: " + email
  );
}
// Calling the function:
greeting();

// Looping paramter function:
const students = ["John", "Marry", "Alla", "Ann", "Dan"];
const email = [
  "John@gmail.com",
  "Marry@gmail.com",
  "Alla@gmail.com",
  "Ann@gmail.com",
  "Dan@gmail.com",
];
for (let i = 0; i < students.length; i++) {
  greeting(students[i], email[i]);
}

// Calcuating the sum of two variables in a function:
// function sum(a, b) {
//   console.log(a + b);
// }
// sum(10, 15);

// Default value: If a parameter is not provided, then its value becomes undefined.

// Example:
// Assigning default value to b:
function hello(a = "Jill", b = "John") {
  console.log("Hello " + a + " & hello " + b);
}
hello("Jacob", "Moshe");
// The function hello overwrote the default value decaled in the function
// Everything that is written in the scope of the function will NOT BE RECOGNIZED outside of the scope of the function

// Local Variables: A variable declared inside a function is only visible inside that function.
// Example:
// let age = 15;
// function myAge() {
//   let age = 16;
//   console.log("Output of function: ", age);
// }
// myAge();
// console.log("Output of function: ", age);

// Global Variables: Global variables are visible from any function.

for (var i = 0; i < 5; i++) {}
console.log(i);

// Exercise One:
// Write a Javascript function that takes a parameter: myAge
// In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.
var age = 26;
function myAge(age) {
  var mom = age * 2;
  var dad = mom * 1.2;
  console.log("Mom's age is: " + mom + " Dad's age is: " + dad);
}
// Call the function
myAge();

// Return Statement: stops the function execution immediately.
// When a function returns a value, it’s returning a result.
// The return value is “returned” back to the “caller” of the function.

// Example:

// function userInfo(userName, userAge) {
//     let result = "My name is " + userName + " my age is "  + userAge;
//     return "hey";
//     console.log(result); //not reached
// }

// let girlInfo = userInfo("Sarah", 22)
// console.log(girlInfo) //hey

// function myA() {
//   return {
//     a: 1,
//     b: "John",
//   };
// }
// let a = myA();
// console.log(a,b);

function sum(a, b) {
  return a + b;
}
let sumAB = sum(10, 15);
console.log(sumAB);

// Object method:

console.log(this);
let obj = {
  userName: "John",
  userAge: function () {
    console.log(this.userName, this.myAge);
  },
};
console.log(obj.userAge());
