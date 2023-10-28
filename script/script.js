const playerState = {
  roomNr: 1,
  inventorySlots: 5,
};

// LOOPA IGENOM DETTA ?
const room1 = document.querySelector("#room1");
const room2 = document.querySelector("#room2");
const room3 = document.querySelector("#room3");
const room4 = document.querySelector("#room4");

room1.addEventListener("click", () => {
  playerState.roomNr = 1;
  console.log(playerState.roomNr);
});
room2.addEventListener("click", () => {
  playerState.roomNr = 2;
  console.log(playerState.roomNr);
});
room3.addEventListener("click", () => {
  playerState.roomNr = 3;
  console.log(playerState.roomNr);
});
room4.addEventListener("click", () => {
  playerState.roomNr = 4;
  console.log(playerState.roomNr);
});
// LOOPA IGENOM DETTA ?

//SHOW INVENTORY
const inventoryBox = document.querySelector("#inventoryDiv");
const inventoryBtn = document.querySelector("#inventoryBtn");
inventoryBtn.addEventListener("click", () => {
  inventoryBox.classList.toggle("red");
  inventoryBox.classList.toggle("showMenu");
  inventoryBox.classList.toggle("hideMenu");
});
//SHOW INVENTORY
