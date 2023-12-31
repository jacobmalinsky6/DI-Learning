// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)
const lettersInput = document.querySelector("input");

lettersInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;

  const regex = /^[a-zA-Z]+$/;

  if (!regex.test(inputValue)) {
    event.target.value = inputValue.replace(/[^a-zA-Z]/gi, ""); // Remove non-letters
    console.log("Only letters are accepted."); // Log a message to the console
  }
});
