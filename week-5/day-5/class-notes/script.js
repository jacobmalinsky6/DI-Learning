function onDragStartForPinkSquare(event) {
  console.log("start");
  event.dataTransfer.setData("text/plain", event.target.id);
}

function onDragEndForPinkSquare(event) {
  console.log("end");
}

function onDragForPinkSquare(event) {
  event.target.textContent = event.clientX + " " + event.clientY;
}

function onDragOverForOrangeSquare(event) {
  event.preventDefault();
  console.log("Over orange");
}
function OnDropOverOrangeSquare(event) {
  const id = event.dataTransfer.getData("text/plain");
  console.log("dropped orange");
  console.log(id);
  const pinkSqaure = document.getElementById(id);
  event.target.appendChild(pinkSqaure);
}

function onDragOverForPinkSquare(event) {
  event.preventDefault();
  console.log("start");
  event.dataTransfer.setData("text/plain", event.target.id);
}

function OnDropOverPinkSquare(event) {
  const idPink = event.dataTransfer.getData("text/plain");
  console.log("dropped pink");
  console.log(idPink);
  const dottedSqaure = document.getElementById(idPink);
  event.target.appendChild(dottedSqaure);
}

function onDragStartForPinkText(event) {
  console.log("start");
  event.dataTransfer.setData("text/plain", event.target.id);
}
function OnDropOverPinkText(event) {
  const idText = event.dataTransfer.getData("text/plain");
  console.log("dropped pink text");
  idText.target.appendChild(".squares-container");
}
