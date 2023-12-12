//Exercise 1:

//Using this array :

// const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Remove Banana from the array.
// Sort the array in alphabetical order.
// Add “Kiwi” to the end of the array.
// Remove “Apples” from the array. Don’t use the same method as in part 1.
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//1.

fruits.splice(0, 1);
console.log(fruits);

//2.

fruits.sort();
console.log(fruits);

//3.

fruits.push("Kiwi");
console.log(fruits);

//4.

delete fruits[0];
console.log(fruits);

//5.

//fruits.sort()
fruits.reverse();
console.log(fruits);

//Exercise 2:

// Using this array :

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// Access and then console.log “Oranges”.

console.table(moreFruits);
console.log(moreFruits[1][1][0]);
