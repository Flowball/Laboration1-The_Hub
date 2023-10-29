const playerState = {
  roomNr: 0,
  inventorySlots: 5,
};

const roomBtns = document.getElementsByClassName("roomBtn");

for (btn of roomBtns) {
  btn.addEventListener("click", (e) => {
    playerState.roomNr = e.target.id;
    // collectItemToInv("nubben");
    console.log(playerState.roomNr);
  });
}

// INVENTORY & COLLECT
const inventory = [];
const invItem = document.querySelector("#inventoryDiv");
const invModal = document.querySelector(".invModal");

function collectItemToInv(itemName) {
  const div = document.createElement("div");
  const itemInInvDiv = document.querySelector("invModal");
  const itemToPickUp = document.querySelector("#itemToPickUp");

  if (inventory.includes("knife")) {
    console.log("already in inventory!");
    itemInInvDiv.textContent = "ALREADY IN INVENTORY!";
    itemInInvDiv.id = "invModal";
    itemInInvDiv.appendChild(itemInInvDiv);
  } else {
    inventory.push(itemName);
    div.textContent = itemName;
    div.id = "invItem";
    console.log(`ITEM PICKED: ${itemName}`);
    invItem.appendChild(div);
  }
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
