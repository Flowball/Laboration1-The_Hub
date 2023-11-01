const playerState = {
  roomNr: "room0",
  inventorySlots: 5,
};

const roomBtns = document.getElementsByClassName("roomBtn");

for (btn of roomBtns) {
  btn.addEventListener("click", (e) => {
    playerState.roomNr = e.target.id;
    console.log(playerState.roomNr);

    renderRoom(e.target.id);
  });
}
// LÄGG TILL LOGIK FÖR ATT RENDERA , KANSKE LÄGGA TILL ATT MAN BHEÖVER FYLLA I NAMN INNAN ALLT RENDERAS?
// FRAMFÖRALLT LÄGG TILL SÅ ATT SIDA RENDERAS BEROENDE PÅ roomNr
if (playerState.roomNr == "room1") {
}

// RENDER ROOM!!!
function renderRoom(target) {
  if (playerState.roomNr == target) {
    const targetRoom = target;
    const targetDiv = document.getElementById(targetRoom);
    targetDiv.classList.remove("hide");
  }
}
// RENDER ROOM!!!

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
    const itemId = itemName;
    const itemDiv = document.getElementById(itemId);
    itemDiv.classList.add("hide");
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

//burger menu toggle
const burger = document.querySelector("#burger");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector("#closeMenu");

burger.addEventListener("click", () => {
  modal.classList.toggle("showModal");
});

closeModal.addEventListener("click", () => {
  modal.classList.toggle("showModal");
});

//RESET FUNCTION

function resetAll() {
  const playerState = {
    roomNr: 0,
    inventorySlots: 5,
  };
  const inventory = [];
  localStorage.clear();
  location.reload();
}

//reroute to new site function

function reRoute(siteValue) {
  window.location.href = siteValue;
}
