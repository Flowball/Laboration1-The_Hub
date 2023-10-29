const playerState = {
  roomNr: 0,
  inventorySlots: 5,
};

const inventory = [];
const roomBtns = document.getElementsByClassName("roomBtn");

for (btn of roomBtns) {
  btn.addEventListener("click", (e) => {
    playerState.roomNr = e.target.id;
    console.log(playerState.roomNr);
  });
}
// Collect item!
function collectItem(itemId) {
  inventory.push(itemId);
}
// Collect item!

//SHOW INVENTORY
const inventoryBox = document.querySelector("#inventoryDiv");
const inventoryBtn = document.querySelector("#inventoryBtn");
inventoryBtn.addEventListener("click", () => {
  inventoryBox.classList.toggle("red");
  inventoryBox.classList.toggle("showMenu");
  inventoryBox.classList.toggle("hideMenu");
});
//SHOW INVENTORY
