// // // In your Javascript file, using setTimeout, call a function after 2 seconds.
// // function showMessage() {
// //   alert("Hello world");
// // }
// // // Delay the execution of the function
// // setTimeout(showMessage, 2 * 1000);

// // In your Javascript file, using setTimeout, call a function after 2 seconds.
// // The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// // let div = document.querySelector("#container");
// // const pContent = document.createElement("p");

// // function newParagraph() {
// //   pContent.textContent = "Hello world!";
// //   div.appendChild(pContent);
// // }
// // setTimeout(newParagraph, 2 * 1000);

// // In your Javascript file, using setInterval, call a function every 2 seconds.
// // The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// // The interval will be cleared (ie. clearInterval), when the user will click on the button.

// let div = document.querySelector("#container");
// let id = setInterval(newParagraph, 2 * 1000);

// let count = 0;
// function newParagraph() {
//   const pContent = document.createElement("p");
//   pContent.textContent = "Hello world!";
//   div.appendChild(pContent);
//   count++
//   if (count >= 5){
//     clearContent();
//   }
// }

// function clearContent() {
//   clearInterval(id);
// }

// // The interval will be cleared (ie. clearInterval), when the user will click on the button.

// const button = document.querySelector("#clear");
// button.textContent = "Clear Content";
// button.addEventListener("click", clearContent);

// // Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// 🌟 Exercise 2 : Move The Box
// Located on index2.html

// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.

// RedBox Movement:

const redBox = document.querySelector("#animate");
function moveTheBox() {
  let moveLength = 0;
  let movement = setInterval(function () {
    if (moveLength === 350) {
      clearInterval(movement);
    }
    moveLength++;
    redBox.style.left = moveLength + "px";
  }, 1);
}

// Button:
const button = document.querySelector("button");
button.addEventListener("click", moveTheBox);
