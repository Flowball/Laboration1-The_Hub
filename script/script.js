const playerState = {
  roomNr: 0,
  inventorySlots: 5,
};

const roomBtns = document.getElementsByClassName("roomBtn");

for (btn of roomBtns) {
  btn.addEventListener("click", (e) => {
    playerState.roomNr = e.target.id;
    collectItemToInv("nubben");
    console.log(playerState.roomNr);
  });
}

// INVENTORY & COLLECT
const inventory = [];
const invItem = document.querySelector("#inventoryDiv");

function collectItemToInv(itemName) {
  inventory.push(itemName);
  const div = document.createElement("div");
  div.textContent = itemName;
  div.id = "invItem";
  invItem.appendChild(div);
}
// INVENTORY & COLLECT

//SHOW INVENTORY
const inventoryBox = document.querySelector("#inventoryDiv");
const inventoryBtn = document.querySelector("#inventoryBtn");
inventoryBtn.addEventListener("click", () => {
  inventoryBox.classList.toggle("red");
  inventoryBox.classList.toggle("showMenu");
  inventoryBox.classList.toggle("hideMenu");
});
//SHOW INVENTORY
