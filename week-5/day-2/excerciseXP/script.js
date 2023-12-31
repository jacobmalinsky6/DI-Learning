// Exercise 1 : Change The Article
// Using a DOM property, retrieve the h1 and console.log it.
const h1 = document.querySelector("h1");
console.log(h1.innerText);
// Using DOM methods, remove the last paragraph in the <article> tag.
const article = document.querySelector("article");
const lastPArticle = article.querySelectorAll("p")[3];
article.removeChild(lastPArticle);
// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2 = document.querySelector("h2");
function handleClick() {
  h2.style.backgroundColor = "red";
}
h2.addEventListener("click", handleClick);
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3 = document.querySelector("h3");
function hideH3OnClick() {
  h3.style.display = "none";
}
h3.addEventListener("click", hideH3OnClick);
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const button = document.querySelector("button");
function boldP() {
  const allP = document.querySelectorAll("article p");
  allP.forEach((p) => (p.style.fontWeight = "bold"));
}
button.addEventListener("click", boldP);
// When you hover on the h1, set the font size to a random pixel size between 0 to 100.
h1.addEventListener("mouseover", hoverH1);
function hoverH1() {
  const randomFontSize = Math.floor(Math.random() * 101);
  h1.style.fontSize = `${randomFontSize}px`;
}
// // When you hover on the 2nd paragraph, it should fade out
//
// const p2 = document.querySelector("p:nth-child(2)")
// p2.addEventListener("mouseover", fadeOut);
// function fadeOut() {
//   let opacity = 1; // Start at full opacity

//   const interval = setInterval(() => {
//     opacity -= 0.05; // Decrease opacity by 0.05 in each step
//     element.style.opacity = opacity; // Apply the new opacity

//     if (opacity <= 0) {
//       clearInterval(interval); // Stop the animation when opacity reaches 0
//       element.style.display = "none"; // Optionally hide the element completely
//     }
//   }, 20); // Adjust the interval duration (in milliseconds) for animation speed
// }

//  Exercise 2 : Work With Forms
// Retrieve the form and console.log it.
const form = document.querySelector("form");
console.log(form);
// Retrieve the inputs by their id and console.log them.
const firstName = document.getElementById("fname");
console.log(firstName);
const lastName = document.getElementById("lname");
console.log(lastName);
const submit = document.getElementById("submit");
console.log(submit);
// Retrieve the inputs by their name attribute and console.log them.
const attFirstName = document.getElementsByName("firstname")[0];
const attLastName = document.getElementsByName("lastname")[0];
console.log(attFirstName, attLastName);
// When the user submits the form (ie. submit event listener):
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

const ul = document.querySelector("ul.usersAnswer");

function valuesSubmition(event) {
  event.preventDefault();
  const fNameValue = firstName.value;
  const lNameValue = lastName.value;
  if (fNameValue.length > 0 && lNameValue.length > 0) {
    const lifName = document.createElement("li");
    lifName.textContent = fNameValue;
    ul.appendChild(lifName);

    const lilName = document.createElement("li");
    lilName.textContent = lNameValue;
    ul.appendChild(lilName);

    firstName.value = "";
    lastName.value = "";
  }
}

submit.addEventListener("click", valuesSubmition);

//  Exercise 3 : Transform The Sentence
// Declare a global variable named allBoldItems.
const allBoldItems = [];
// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems() {
  const boldItems = document.querySelectorAll("strong");
  for (const boldItem of boldItems) {
    allBoldItems.push(boldItem.textContent);
  }
}
getBoldItems();
console.log(allBoldItems);
// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
  const boldItems = document.querySelectorAll("strong");
  for (const boldItem of boldItems) {
    boldItem.style.color = "blue";
  }
}
// highlight();
// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
function returnItemsToDefault() {
  const boldItems = document.querySelectorAll("strong");
  for (const boldItem of boldItems) {
    boldItem.style.color = "";
  }
}
// returnItemsToDefault();
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph).
const boldItems = document.querySelectorAll("strong");

boldItems.forEach((boldItem) => {
  boldItem.addEventListener("mouseover", highlight);
  boldItem.addEventListener("mouseout", returnItemsToDefault);
});
