// Exercise 1
let favoriteFood = "chocolate";
let favoriteMeal = "breakfast";
console.log("I eat " + favoriteFood + " " + "every day at " + favoriteMeal);

// Exercise 2
// Part One
const myWatchedSeries = [
  "black mirror",
  " money heist",
  " the big bang theory",
];

//Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
let myWatchedSeriesLength = myWatchedSeries.length;

// Console.log a sentence using both of the variables created above
console.log(
  "I watched " + myWatchedSeriesLength + " " + "series: " + myWatchedSeries
);

// Part Two
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries[2] = "friends";
console.log(myWatchedSeries);

// Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("breaking bad");
console.log(myWatchedSeries);

// Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.splice(0, 0, "The boys");
console.log(myWatchedSeries);

// Delete the series “black mirror”.
myWatchedSeries.splice(1, 1);
console.log(myWatchedSeries);

// Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[1][3]);

// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries);

// Exercise 3

// Store a celsius temperature into a variable. Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

let celsiuisTemp = 10;
let fahrenheitTemp = (celsiuisTemp / 5) * 9 + 32;
console.log(
  "Temp C is: " + celsiuisTemp + " " + "Temp F is: " + fahrenheitTemp
);

// Exercise 4

// Guess the Answer #1
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

let c;
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: 55
// Actual: 55

a = 2;

console.log(a + b); //second expression
// Prediction: 23
// Actual:23

// What is the value of c
// C value is not assgined so NULL

// Analyse the code below, what will be the outcome?
// console.log(3 + 4 + '5');
// The console log will show 75 b/c it put string and number together without space

// Exercise 5 : Guess The Answers #2

console.log(typeof 15);
// Prediction: Number
// Actual: Number

console.log(typeof 5.5);
// Prediction:Number
// Actual:Number

console.log(typeof NaN);
// Prediction: Null / not a number
// Actual: Number

console.log(typeof "hello");
// Prediction:string
// Actual: string

console.log(typeof true);
// Prediction: Boolean
// Actual: Boolean

console.log(typeof (1 != 2));
// Prediction: True
// Actual: Boolean

console.log("hamburger" + "s");
// Prediction: hamburgers
// Actual:hamburgers

"hamburgers" - "s";
// Prediction:hamburger
// Actual:hamburger

console.log("1" + "3");
// Prediction: 13
// Actual: 13

console.log("1" - "3");
// Prediction: Null
// Actual: -2

console.log("johnny" + 5);
// Prediction: johnny5
// Actual:johnny5

console.log("johnny" - 5);
// Prediction:johnny-5
// Actual:NaN

console.log(99 * "hello");
// Prediction:NaN
// Actual: Nan

console.log(1 != 1);
// Prediction: False
// Actual: False

console.log(1 == "1");
// Prediction: False
// Actual: True

console.log(1 === "1");
// Prediction: False
// Actual: False

// Exercise 6 : Guess The Answers #3

console.log(5 + "34");
// Prediction: 534
// Actual: 534

console.log(5 - "4");
// Prediction: 1
// Actual:1

console.log(10 % 5);
// Prediction:2
// Actual:0

console.log(5 % 10);
// Prediction:0
// Actual:5

console.log("Java" + "Script");
// Prediction:JavaScript
// Actual:JavaScript

console.log(" " + " ");
// Prediction:
// Actual:

console.log(" " + 0);
// Prediction:0
// Actual:0

console.log(true + true);
// Prediction: Error
// Actual:2

console.log(true + false);
// Prediction:1
// Actual:1

console.log(false + true);
// Prediction:1
// Actual:1

console.log(false - true);
// Prediction:0
// Actual:-1

console.log(!true);
// Prediction: False
// Actual:False

console.log(3 - 4);
// Prediction: -1
// Actual: -1

console.log("Bob" - "bill");
// Prediction: Bob
// Actual: NaN
