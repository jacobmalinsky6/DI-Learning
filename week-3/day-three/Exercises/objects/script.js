// Exercise One

// Create an object which has properties "username" and "password". Fill those values with strings
let credentials = {
  username: "Jacob",
  password: "Hello123Password456",
};

let credentials1 = {
  username: "Jacob1",
  password: "NEWHello123Password456",
};

// Accessing the key within the object within the array
console.log(credentials[0].username);
console.log(credentials1[1].username);

// Create an array which contains the objects you have made above and name the array database:

let database = [credentials, credentials1];

// Create an array called "newsfeed" which contains the three objects with properties "username" and "timeline"

let newsFeed = [
  {
    username: "Jacob2",
    timeline: "1997-2003",
  },
  {
    username: "Jacob3",
    timeline: "1998-2004",
  },
  {
    username: "Jacob4",
    timeline: "1999-2005",
  },
];

// Accessing the entire data
console.log(newsFeed);

// Accessing the nested data with newsFeed
console.log(newsFeed[1].username);
