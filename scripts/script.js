/**
 * Initiate application (like a main script)
 */
checkInventory();
checkTheme();
parseLS();

/** Set variables */
const roomBtns = document.getElementsByClassName("roomBtn");
const response = document.querySelector("#response");
const secondResponse = document.querySelector("#secondResponse");
const containerDiv = document.querySelector("#container");

const playerState = {
  roomNr: "room0",
  inventorySlots: 5,
};

/** Set itemsArray to localstorage, this to keep track of pickedup true/false */
function parseLS() {
  localStorage.setItem("itemsArray", JSON.stringify(items));
  let itemsArray = localStorage.getItem("itemsArray");
  JSON.parse(itemsArray);
  return itemsArray;
}
let itemsArray = JSON.parse(parseLS());

/** Render items in array dynamically based on data from itemsarray (-->items.js)*/
function renderItems(pickUpItem) {
  for (item of itemsArray) {
    if (item.name === pickUpItem && item.pickedUpStatus == false) {
      //ändra itemholder, rendera DIV med funktion
      const itemHolder = document.querySelector("#test");
      itemHolder.textContent = item.icon;
      itemHolder.id = item.name;
      itemHolder.classList = "itemToPickUp";
      // itemHolder.addEventListener("click", pickUpFunction(item));
    }
  }
}

// LÄGG TILL LOGIK FÖR ATT INJICERA TRUE VÄRDE PER ITEM VID KLICK.
const itemHolder = document.querySelector("#test");
itemHolder.addEventListener("click", (e) => {
  let selectedItem = e.target.id;
  for (stuff of items) {
    let hej = stuff;
    if (stuff.name == selectedItem) {
      console.log(stuff);
      stuff.pickedUpStatus = true;
    }
  }
  renderItems();
});

for (btn of roomBtns) {
  btn.addEventListener("click", (e) => {
    playerState.roomNr = e.target.id;
    console.log(playerState.roomNr);
    renderRoom(e.target.id);
  });
}

/** Render rooms depending on click */
function renderRoom(target) {
  if (playerState.roomNr == target) {
    const pickedRoom = document.querySelector(`#${target}`);
    const playRoom = document.querySelector("#playRoom");
    const roomText = document.querySelector("#roomText");
    const roomSubtext = document.querySelector("#roomSubText");
    const itemToPickup = document.querySelector(".itemToPickup");
    const musicHolder = document.querySelector(".musicHolder");
    const diceDiv = document.querySelector("#diceDiv");

    switch (pickedRoom) {
      case room1:
        roomPicker.classList.add("hide");
        playRoom.classList.remove("hide");
        musicHolder.classList.toggle("hide");
        roomText.innerHTML = scenes[0].text;
        roomSubtext.innerHTML = scenes[0].subText;
        renderItems("knife");
        break;
      case room2:
        roomPicker.classList.add("hide");
        playRoom.classList.remove("hide");
        roomText.innerHTML = scenes[1].text;
        renderItems("frog");
        loadDiceGame();
        break;
      case room3:
        roomPicker.classList.add("hide");
        loadSpecies();
        renderItems("cash");
        break;
      case room4:
        roomPicker.classList.add("hide");
        playRoom.classList.remove("hide");
        roomText.innerHTML = scenes[3].text;
        renderItems("dynamite");
        break;
    }
  }
}

/** Setting variables for inventory modal */
const inventory = [];
const invItem = document.querySelector("#inventoryDiv");
const invModal = document.querySelector(".invModal");

// SKRIV EN LOOP SOM TRYCKER IN VARJE ITEM SOM FINNS I LOCAL STORAGE!!!!!
for (stuff of inventory) {
  const invModal = document.querySelector(".invModal");
}
function checkInventory() {
  console.log(localStorage.knife);
}

/** Dynamic notification toaster, use a string for argument
 * @param string
 */
const notificationDiv = document.querySelector("#notification");

function notification(value) {
  notificationDiv.innerHTML = value;
  notificationDiv.className = "show";
  setTimeout(function () {
    notificationDiv.className = notificationDiv.className.replace("show", "");
  }, 2000);
}

/** Show inventory bottom right corner */
const inventoryBox = document.querySelector("#inventoryDiv");
const inventoryBtn = document.querySelector("#inventoryBtn");
inventoryBtn.addEventListener("click", () => {
  inventoryBox.classList.toggle("red");
  inventoryBox.classList.toggle("showMenu");
  inventoryBox.classList.toggle("hideMenu");
});

/** Toggle burger-menu */
const burger = document.querySelector("#burger");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector("#closeMenu");

burger.addEventListener("click", () => {
  modal.classList.toggle("showModal");
});

closeModal.addEventListener("click", () => {
  modal.classList.toggle("showModal");
});

/** Resets all data, refreshes, clears local-storage, resets variables */
function resetAll() {
  const playerState = {
    roomNr: 0,
    inventorySlots: 5,
  };
  const inventory = [];
  songIndex = 0;
  localStorage.clear();
  location.reload();
  enableDarkMode();
}
/** Dark/light - Mode function */
const toggleTheme = document.querySelector("#themeToggle");
toggleTheme.addEventListener("click", changeTheme);
function changeTheme() {
  darkmode = localStorage.getItem("dark-mode");
  if (darkmode === "disabled") {
    enableDarkMode();
  }
  if (darkmode === "enabled") {
    disableDarkMode();
  }
}

function checkTheme() {
  darkmode = localStorage.getItem("dark-mode");
  if (darkmode === "disabled") {
    disableDarkMode();
  } else if (darkmode === "enabled") {
    enableDarkMode();
  } else if (darkmode === null) {
    enableDarkMode();
  }
}
function enableDarkMode() {
  localStorage.setItem("dark-mode", "enabled");
  document.body.style.backgroundColor = "#252629";
  const header = document.querySelector("header");
  const roomText = document.querySelector("#roomText");
  const roomSubtext = document.querySelector("#roomSubText");
  const response = document.querySelector("#response");
  response.classList.remove("roomTextDark");
  response.classList.add("roomTextLight");
  roomText.classList.remove("roomTextDark");
  roomText.classList.add("roomTextLight");
  roomSubtext.classList.remove("roomTextDark");
  roomSubtext.classList.add("roomTextLight");
  header.style.color = "white";
  header.style.borderBottom = "1px solid white";
  console.log("Dark mode enabled!");
}

function disableDarkMode() {
  localStorage.setItem("dark-mode", "disabled");
  document.body.style.backgroundColor = "white";
  const header = document.querySelector("header");
  const roomText = document.querySelector("#roomText");
  const roomSubtext = document.querySelector("#roomSubText");
  const response = document.querySelector("#response");
  response.classList.add("roomTextDark");
  response.classList.remove("roomTextLight");
  roomSubtext.classList.add("roomTextDark");
  roomSubtext.classList.remove("roomTextLight");
  roomText.classList.add("roomTextDark");
  roomText.classList.remove("roomTextLight");
  header.style.borderBottom = "1px solid #252629";
  header.style.color = "#252629";
  console.log("Dark mode disabled!!");
}
