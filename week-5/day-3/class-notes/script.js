// // setTimeout(function , delay)

// function showMessage() {
//   console.log("Hello, after 2 seconds");
// }

// // Delay the execution of the function
// setInterval(showMessage, 5 * 1000);

// // A different way of using setTimeout by making the function inside the setTimeout
// setTimeout(function () {
//   console.log("hello again after 8 seconds");
// }, 8 * 1000);

// // Create a function that logs a countdown from 5 to 1 in the console with each number displayed after 1 second delay with setTimeout

// let count = 5;
// let id;
// function displayCount() {
//   console.log(count);
//   count--;
//   if (count >= 0) {
//     id = setTimeout(displayCount, 1000);
//   }
//   if (count === 3) {
//     clearTimeout(id);
//   }
// }
// displayCount();

// setInterval - execute the function again & again in intervals of milliseconds that we put on the delay
// setInterval (function, interval time)

// let index = 0;
// const id = setInterval(showMessage, 2000);

// function showMessage() {
//   index++;
//   console.log("Hello, after 2 seconds" + " index: " + index);
//   if (index === 5) {
//     clearInterval(id);
//   }
// }

// Create a function that logs a countdown from 5 to 1 in the console with each number displayed after 1 second delay with setInterval

// let index = 5;
// const id = setInterval(showMessage, 1000);

// function showMessage() {
//   console.log("Hello, after " + index + " seconds" + " index: " + index);
//   index--;
//   if (index === 0) {
//     clearInterval(id);
//   }
// }

// Class exercise - move inner box left to right:

function myMove() {
  const elem = document.querySelector(".inner");
  let pos = 0;
  let id = setInterval(function () {
    if (pos >= 350) {
      clearInterval(id);
    }
    pos ++;
    elem.style.left = pos + "px";
  }, 1000);
}
