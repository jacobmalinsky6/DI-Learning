// Write a JavaScript program that recreates the pattern below.
let item = " * ";
let count = 1;

while (count <= 6) {
  console.log(item.repeat(count));
  count++;
}
// Do this challenge twice: first by using one loop, then by using two nested for loops
let star = 6;
for (let i = 0; i < star; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
