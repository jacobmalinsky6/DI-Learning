// Exercise 1 : Information
// Part I : function with no parameters
//   Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.
function infoAboutMe() {
  console.log("My name is Jacob, I live in Givatayim and I am 26");
}
infoAboutMe();
// Part II : function with three parameters
// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log(
    "Your name is " +
      personName +
      " you are " +
      personAge +
      " your favorite color is " +
      personAge
  );
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

//  Exercise 2 : Tips
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.
// Inside the function, use prompt to ask John for the amount of the bill.
// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// function calculateTip() {
//   const userPrompt = parseInt(prompt("How much was the bill?"));
//   const tipPercentage20 = (20 / 100) * userPrompt;
//   const tipPercentage15 = (15 / 100) * userPrompt;
//   const tipPercentage10 = (10 / 100) * userPrompt;
//   if (userPrompt < 50) {
//     alert(
//       "You need to pay " +
//         "$" +
//         tipPercentage20 +
//         " for the tip. The Total bill is: " +
//         (tipPercentage20 + userPrompt)
//     );
//   } else if (userPrompt > 200) {
//     alert(
//       "You need to pay " +
//         "$" +
//         tipPercentage10 +
//         " for the tip." +
//         " The total bill is: " +
//         (tipPercentage10 + userPrompt)
//     );
//   } else if (userPrompt >= 50 && userPrompt <= 200) {
//     alert(
//       "You need to pay " +
//         "$" +
//         tipPercentage15 +
//         " for the tip." +
//         " The total bill is: " +
//         (tipPercentage15 + userPrompt)
//     );
//   }
// }
// calculateTip();

// Exercise 3 : Find The Numbers Divisible By 23
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// At the end, console.log the sum of all numbers that are divisible by 23.

function isDivisible() {
  let outcome = [];
  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      outcome.push(i);
    } else {
      console.log();
    }
  }
  console.log(outcome);
  let sum = 0;
  for (let num of outcome) {
    sum += num;
  }
  console.log("The sum of all numberes that are divisible by 23 is " + sum);
}
isDivisible();

// Exercise 4 : Shopping List
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

const shoppingList = ["banana", "orange", "apple"];

// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
function myBill() {
  let totalPrice = 0;
  for (const fruit of shoppingList) {
    if (fruit in stock) {
      const price = prices[fruit];
      if (price) {
        totalPrice += price;
      } else {
        console.warn(`Price for ${fruit} is not defined!`);
      }
    } else {
      console.warn(`${fruit} is out of stock!`);
    }
  }
  return totalPrice;
}
//  Calling the myBill function:
const totalBill = myBill();
console.log(`Total bill: $${totalBill}`);

// Exercise 5 : What’s In My Wallet ?
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
function changeEnough(itemPrice, amountOfChange) {
  // Define values of each coin denomination
  const coinValues = {
    quarters: 0.25,
    dimes: 0.1,
    nickels: 0.05,
    pennies: 0.01,
  };

  // Calculate total value of change by multiplying each type with its amount and summing
  const totalChange = amountOfChange.reduce((acc, count, i) => {
    const coinType = Object.keys(coinValues)[i];
    return acc + count * coinValues[coinType];
  }, 0);

  // Compare total change with item price
  return totalChange >= itemPrice;
}

//  Exercise 6 : Vacations Costs
function hotelCost() {
  while (true) {
    const nights = prompt(
      "How many nights would you like to stay at the hotel?"
    );
    if (nights === null) {
      return; // User canceled
    }
    if (!isNaN(nights)) {
      return nights * 140; // Valid number, calculate and return cost
    }
    alert("Please enter a valid number of nights.");
  }
}

function planeRideCost() {
  while (true) {
    const destination = prompt("Where would you like to travel to?");
    if (destination === null) {
      return; // User canceled
    }
    if (typeof destination === "string") {
      if (destination === "London") {
        return 183;
      } else if (destination === "Paris") {
        return 220;
      } else {
        return 300;
      }
    }
    alert("Please enter a valid destination.");
  }
}

function rentalCarCost() {
  while (true) {
    const days = prompt("How many days would you like to rent the car?");
    if (days === null) {
      return; // User canceled
    }
    if (!isNaN(days)) {
      let cost = days * 40;
      if (days > 10) {
        cost *= 0.95; // Apply discount
      }
      return cost;
    }
    alert("Please enter a valid number of days.");
  }
}

function totalVacationCost() {
  const hotelPrice = hotelCost();
  if (hotelPrice === undefined) return; // User canceled

  const planePrice = planeRideCost();
  if (planePrice === undefined) return; // User canceled

  const carPrice = rentalCarCost();
  if (carPrice === undefined) return; // User canceled

  console.log(`Your vacation costs will be:`);
  console.log(`* Car rental: $${carPrice}`);
  console.log(`* Hotel: $${hotelPrice}`);
  console.log(`* Plane tickets: $${planePrice}`);
  console.log(`* Total: $${carPrice + hotelPrice + planePrice}`);
}

totalVacationCost();
