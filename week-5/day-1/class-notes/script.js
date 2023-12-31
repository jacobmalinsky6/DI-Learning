// // DOM Recap:

// // Access ID of element:
// let maindiv = document.getElementById("main");
// console.log(maindiv);
// // Access Tag name of elements:
// let divs = document.getElementsByTagName("div");
// console.log(divs);
// // Access class of elements:
// let header = document.getElementsByClassName("header");
// console.log(header[0]);
// // Query Selector: Will give the first element requested:
// let elem = document.querySelector("div");
// console.log("elem => ", elem);
// // Query Selector: access ID:
// let elemID = document.querySelector("#main");
// console.log("elemID => ", elemID);
// // Query Selector: access child of class:
// let elemClassChild = document.querySelector(".submainclass p");
// console.log("elemClassChild => ", elemClassChild);
// // Query Selector: access a specific child of class:
// let elemClassChildSpecific = document.querySelector(
//   "div .submainclass p.content"
// );
// console.log("elemClassChildSpecific => ", elemClassChildSpecific);

// // DOM EVENTS:

// // Add an event to an element: Example based on content made on HTML:
// // onClick Event
// function handleClick() {
//   console.log("Buttom Clicked!");
// }

// function handleInput() {
//   console.log(event.target.value);
// }

// function handleEnter(e) {
//   e.target.style.backgroundColor = "pink";
// }

// function handleLeave(e) {
//   e.target.style.backgroundColor = "";
//   e.target.style.border = "1px solid red";
// }

// // In a JS file, write a JavaScript function to add rows to a table. Use the code below as a base

// // Student Answer:
// // function insertRow() {
// //   let newtr = document.createElement("tr");
// //   let newtd = document.createElement("td");
// //   let newtd2 = document.createElement("td");
// //   newtr.appendChild(newtd);
// //   newtr.appendChild(newtd2);

// //   let table = document.getElementById("sampleTable");
// //   table.appendChild(newtr);

// //   newtd.innerHTML = "New Cell 1";
// //   newtd2.innerHTML = "New Cell 2";
// // }

// // // Using Clone / Teacher Answer:
// // function insertRow() {
// //   const table = document.getElementById("sampleTable");
// //   const tbody = table.firstElementChild;
// //   const row = tbody.lastElementChild;
// //   const new_row = row.cloneNode(true);
// //   table.appendChild(new_row);
// // }

// // adding elements into HTML:
// const root = document.getElementById("root");
// const button = document.createElement("button");
// const button1 = document.createElement("button");
// button.innerText = "Click Me!";
// button1.innerText = "Click Me 1!";

// button.addEventListener("click", function (event) {
//   event.target.style.backgroundColor = "yellow";
//   //   changeBG("yellow");
//   changeBGPink();
// });
// // button1.addEventListener("click", function (event) {
// //   event.target.style.backgroundColor = "red";
// //   changeBG("red");
// // });

// button1.addEventListener("click", changeBGPink);

// function changeBGPink() {
//   root.style.backgroundColor = pink;
// }
// function changeBG(color) {
//   root.style.backgroundColor = color;
// }

// root.appendChild(button);
// root.appendChild(button1);

// //Event Propagation:
// const div = document.getElementById("root");
// const innerdiv = document.getElementById("root");
// const innerbutton = document.getElementById("root");

// div.addEventListener("click", divclick);
// innerdiv.addEventListener("click", innerdivclick);
// innerbutton.addEventListener("click", innerbuttonclick);

// function divclick() {
//   console.log("root");
// }
// function innerdivclick() {
//   console.log("main");
// }
// function innerbuttonclick() {
//   console.log("button");
// }

function handleMySubmit(e) {
  e.preventDefault();
  const email = doucment.getElementById("nameinput");
  console.log(email.value);
  e.target.submit();
}
