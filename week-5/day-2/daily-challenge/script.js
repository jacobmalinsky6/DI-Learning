// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.

const form = document.getElementById("libform");
const noun = document.getElementById("noun");
const adjective = document.getElementById("adjective");
const person = document.getElementById("person");
const verb = document.getElementById("verb");
const place = document.getElementById("place");
const story = document.getElementById("story");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  getAllInputValues();
});

function getAllInputValues() {
  if (
    !validateValueInput(adjective.value) ||
    !validateValueInput(person.value) ||
    !validateValueInput(noun.value) ||
    !validateValueInput(verb.value) ||
    !validateValueInput(place.value)
  ) {
    return;
  }
  const myStory = `In a ${adjective.value} ${place.value}, ${person.value} stumbled upon a peculiar ${noun.value}. Intrigued, ${person.value} decided to ${verb.value} the ${noun.value}. in the middle of the ${adjective.value} landscapes of ${place.value}, ${person.value} embarked on an unforgettable journey, forever changed by the experience.`;
  story.innerText = myStory;
}

function validateValueInput(val) {
  if (val.trim().length === 0) {
    alert("Please enter a value");
    return false;
  }
  return true;
}
