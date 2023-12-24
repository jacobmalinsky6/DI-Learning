function singBottlesOfBeer(startingBottles) {
  let bottlesOnWall = startingBottles;
  let bottlesTakenDown = 1;

  while (bottlesOnWall > 0) {
    let bottlePlural = bottlesOnWall === 1 ? "bottle" : "bottles";
    let takePlural = bottlesTakenDown === 1 ? "it" : "them";

    console.log(
      `${bottlesOnWall} ${bottlePlural} of beer on the wall, ${bottlesOnWall} ${bottlePlural} of beer.`
    );
    console.log(`Take ${bottlesTakenDown} down, pass ${takePlural} around,`);
    bottlesOnWall -= bottlesTakenDown;
    bottlesTakenDown++;

    if (bottlesOnWall > 0) {
      console.log(`${bottlesOnWall} ${bottlePlural} of beer on the wall.`);
      console.log("");
    } else {
      console.log(`${bottlesOnWall} ${bottlePlural} of beer on the wall,`);
      console.log("No more bottles of beer! No more bottles of beer!");
      console.log(
        "Go to the store and buy some more, 99 bottles of beer on the wall!"
      );
    }
  }
}

const startingBottles = Number(prompt("Enter a number to start the song:"));
singBottlesOfBeer(startingBottles);
