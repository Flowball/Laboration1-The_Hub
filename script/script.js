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

  if (inventory.includes(itemName)) {
    console.log("already in inventory!");
    notification(`${itemName.toUpperCase()} ALREADY IN INVENTORY`);
  } else {
    inventory.push(itemName);
    div.textContent = itemName;
    div.id = "invItem";
    console.log(`ITEM PICKED UP: ${itemName}`);
    notification(`${itemName.toUpperCase()} PICKED UP`);
    invItem.appendChild(div);
  }
}
// INVENTORY & COLLECT

// Notification / error with popup
const notificationDiv = document.querySelector("#notification");

function notification(value) {
  notificationDiv.innerHTML = value;
  notificationDiv.className = "show";
  setTimeout(function () {
    notificationDiv.className = notificationDiv.className.replace("show", "");
  }, 2000);
}

//SHOW INVENTORY
const inventoryBox = document.querySelector("#inventoryDiv");
const inventoryBtn = document.querySelector("#inventoryBtn");
inventoryBtn.addEventListener("click", () => {
  inventoryBox.classList.toggle("red");
  inventoryBox.classList.toggle("showMenu");
  inventoryBox.classList.toggle("hideMenu");
});
//SHOW INVENTORY
