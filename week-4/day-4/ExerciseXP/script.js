// // Retrieve the div and console.log it
// div = document.getElementsByTagName("div");
// console.log(div);
// // Change the name “Pete” to “Richard”.
// liPete = document.getElementsByTagName("li")[1];
// liPete.innerHTML = "Richard";
// // Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// const secondUl = document.getElementsByTagName("ul")[1];
// const sarahLi = secondUl.children[1];
// secondUl.removeChild(sarahLi);
// // Change each first name of the two <ul>'s to your name. (Hint : use a loop)
// const listUls = document.querySelectorAll("ul.list");
// for (let i = 0; i < listUls.length; i++) {
//   const ul = listUls[i];

//   // Access the first li within the current ul
//   const firstLi = ul.querySelector("li");

//   // Modify the first li
//   if (firstLi) {
//     // Ensure the first li exists
//     firstLi.textContent = "Jacob";
//     // Or, make other changes as needed
//   }
// }

// // Exercise 2:

// // Add light blue background and padding to the div
// const div = document.querySelector('div');
// div.style.backgroundColor = 'lightblue';
// div.style.padding = '10px';

// // Hide the li containing "John"
// const firstLi = document.querySelector('li:first-child');
// firstLi.style.display = 'none';

// // Add border to the li containing "Pete"
// const secondLi = document.querySelector('li:nth-child(2)');
// secondLi.style.border = '1px solid black';

// // Change font size of the body
// document.body.style.fontSize = '16px';

// // Bonus: Alert if the div's background color is light blue
// if (div.style.backgroundColor === 'lightblue') {
//   const users = div.textContent.trim().split(':');
//   alert(`Hello ${users[1].trim()}!`);
// }

// Exercise 3:
// Change the ID of the div
const div = document.getElementById("navBar");
div.setAttribute("id", "socialNetworkNavigation");

// Create a new list item and text node
const newListItem = document.createElement("li");
const logoutText = document.createTextNode("Logout");
newListItem.appendChild(logoutText);

// Append the new list item to the unordered list
const ul = document.querySelector("ul");
ul.appendChild(newListItem);

// Retrieve and display the first and last list items
const firstListItem = ul.firstElementChild;
const lastListItem = ul.lastElementChild;
console.log("First link text:", firstListItem.textContent);
console.log("Last link text:", lastListItem.textContent);

// Exercise 4:
const allBooks = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    image: "https://images.example.com/harry-potter.jpg",
    alreadyRead: true,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    image: "https://images.example.com/lord-of-the-rings.jpg",
    alreadyRead: false,
  },
];

// Create the table and set it as innerHTML of the div
const table = document.createElement("table");
const booksDiv = document.querySelector(".listBooks");
booksDiv.innerHTML = ""; // Clear any existing content
booksDiv.appendChild(table);

// Create the table header row
const headerRow = table.insertRow();
headerRow.innerHTML = `
  <th>Title</th>
  <th>Author</th>
  <th>Image</th>
`;

// Create a table row for each book
allBooks.forEach((book) => {
  const row = table.insertRow();

  // Title cell
  const titleCell = row.insertCell();
  titleCell.textContent = book.title;
  titleCell.style.color = book.alreadyRead ? "red" : "black";

  // Author cell
  const authorCell = row.insertCell();
  authorCell.textContent = `written by ${book.author}`;
  authorCell.style.color = book.alreadyRead ? "red" : "black";

  // Image cell
  const imageCell = row.insertCell();
  const image = document.createElement("img");
  image.src = book.image;
  image.width = 100;
  imageCell.appendChild(image);
});
