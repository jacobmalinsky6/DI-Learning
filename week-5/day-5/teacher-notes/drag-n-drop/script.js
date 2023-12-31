// let globalId ;

function onDragStart4PinkSquare(event) {
  console.log("start");
  event.dataTransfer.setData("text/plain", event.target.id);
//   globalId = event.target.id
}

function onDragEnd4PinkSquare(event) {
  console.log("end");
}

function onDrag4PinkSquare(event) {
  event.target.textContent = event.clientX + " " + event.clientY;
}

function onDragOver4OrangeSquare(event) {
  console.log("over orangae");
  event.preventDefault();
}

function onDrop4OrangeSquare(event) {
  console.log("drop");

  const id = event.dataTransfer.getData("text/plain");
  console.log(id);

  const pinkSquare = document.getElementById(id)
  console.log(pinkSquare);

  event.target.appendChild(pinkSquare)
}
