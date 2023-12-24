// function playTheGame() {
//   const userPrompt = confirm("Would you like to play a guessing game?");

//   if (userPrompt === true) {
//     alert("Let's start the game");

//     let guessCount = 0;

//     while (guessCount < 3) {
//       const userGuess = prompt("Guess a number between 1 - 10");

//       if (isNaN(userGuess)) {
//         alert("Sorry, not a number. Goodbye");
//         break;
//       } else {
//         const numberGuess = Number(userGuess);

//         if (numberGuess >= 1 && numberGuess <= 10) {
//           const computerNumber = Math.floor(Math.random() * 10) + 1;
//           alert("The computer guessed " + computerNumber);
//           compareNumbers(numberGuess, computerNumber);
//           guessCount++;
//         } else {
//           alert("Please guess a number between 1 and 10");
//         }
//       }
//     }
//   } else {
//     alert("No problem, Goodbye");
//     function compareNumbers(userNumber, computerNumber) {
//       if (userNumber === computerNumber) {
//         alert("You won the game congrats!");
//       } else if (userNumber > computerNumber) {
//         alert("Your number is bigger than the computer's, guess again");
//         playTheGame();
//       } else if (userNumber < computerNumber) {
//         alert("Your number is less than than the computer's, guess again");
//         playTheGame();
//       } else {
//         alert("Your number is smaller than the computer's, guess again");
//         playTheGame();
//       }
//     }

//     if (guessCount > 3) {
//       alert("Out of chances!");
//     }
//   }
// }

// playTheGame();

function playTheGame() {
  const userPrompt = confirm("Would you like to play a guessing game?");

  if (userPrompt === true) {
    alert("Let's start the game");

    let guessCount = 0; // Initialize guess count

    while (guessCount < 3) {
      // Loop for 3 guesses
      const userGuess = prompt("Guess a number between 1 - 10");

      if (isNaN(userGuess)) {
        // Check for invalid input
        alert("Sorry, not a number. Goodbye");
        break; // Exit if invalid input
      } else {
        const numberGuess = Number(userGuess);

        if (numberGuess >= 1 && numberGuess <= 10) {
          // Check for valid range
          const computerNumber = Math.floor(Math.random() * 10) + 1;
          alert("The computer guessed " + computerNumber);
          compareNumbers(numberGuess, computerNumber); 
          guessCount++; // Increment guess count

          if (guessCount === 3) {
            // Check for 3rd guess after comparison
            alert("Out of chances!");
            break; // Exit the loop if maximum guesses reached
          }
        } else {
          alert("Please guess a number between 1 and 10");
        }
      }
    }

    if (guessCount < 3) {
      // Check if loop exited due to invalid input or user choice
      alert("Thank you for playing!"); // Game finished normally
    }
  } else {
    alert("No problem, Goodbye");
  }
}

function compareNumbers(userNumber, computerNumber) {
  if (userNumber === computerNumber) {
    alert("You won the game congrats!");
  } else if (userNumber > computerNumber) {
    alert("Your number is bigger than the computer's. Try again!");
  } else {
    alert("Your number is smaller than the computer's. Try again!");
  }
}

playTheGame();
