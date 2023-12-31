// SideBar:
let color_col = 3;
let color_row = 8;
let color_count = color_col * color_row;
const sidebar = document.querySelector("#sidebar");
const clear = document.querySelector("#clear");

let color = null;

for (let i = 0; i < color_count; i++) {
  let div = document.createElement("div");
  div.style.backgroundColor = generateRandomColor();
  div.addEventListener("click", function (event) {
    color = event.target.style.backgroundColor;
    console.log(color);
  });
  sidebar.appendChild(div);
}

function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 16);
    color += letters[random];
  }
  return color;
}
// generateRandomColor();

// Main:
let main_col = 60;
let main_row = 40;
let main_count = main_col * main_row;
const main = document.querySelector("#main");
const body = document.getElementsByTagName("body")[0];

let mousedown = false;
body.addEventListener("mousedown", function () {
  mousedown = true;
});
body.addEventListener("mouseup", function () {
  mousedown = false;
});

for (let i = 0; i < main_count; i++) {
  let div = document.createElement("div");
  div.addEventListener("mousedown", function (event) {
    if (color != null) {
      event.target.style.backgroundColor = color;
    }
  });

  div.addEventListener("mouseover", function (event) {
    if (color != null && mousedown) {
      event.target.style.backgroundColor = color;
    }
  });
  main.appendChild(div);
}

// Clear Button:
const button = document.querySelector("button");
button.addEventListener("click")
