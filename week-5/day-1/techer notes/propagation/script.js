// Get the outer and inner div elements
const outerdiv = document.querySelector(".outer");
const innerdiv = document.querySelector(".inner");
const button = document.querySelector(".button");

// Add click event listeners to both divs
outerdiv.addEventListener(
  "click",
  function (event) {
    console.log("Outer Div Clicked");
  },
  true //flase
);

innerdiv.addEventListener(
  "click",
  function (event) {
    console.log("Inner Div Clicked");
    // Stop the event propagation to the outer div
    // event.stopPropagation();
  },
  true //flase
);

button.addEventListener(
  "click",
  function (event) {
    console.log("button Clicked");
    // Stop the event propagation to the outer div
    //   event.stopPropagation();
  },
  true //flase
);
