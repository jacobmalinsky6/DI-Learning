// Exercice 4 : Volume Of A Sphere
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
const radiusInput = document.querySelector("#radius");
const radiusInputValue = radiusInput.value;
const volumeInput = document.querySelector("#volume");
const volumeInputValue = volumeInput.value;
const button = document.querySelector("#submit");

function volumeCalculator(event) {
event.preventDefault();
  if (radiusInputValue > 0) {
    const volume = (4 / 3) * Math.PI * Math.pow(radiusInputValue, 3);
    volume = volumeInputValue.textContent;
  }
}
button.addEventListener("click", volumeCalculator);


