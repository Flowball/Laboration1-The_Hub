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

// RENDER ROOM!!!
function renderRoom(target) {
  if (playerState.roomNr == target) {
    const targetRoom = target;
    const pickedRoom = document.querySelector(`#${target}`);

    const playRoom = document.querySelector("#playRoom");
    const roomText = document.querySelector("#roomText");
    const roomSubtext = document.querySelector("#roomSubText");
    const itemToPickup = document.querySelector(".itemToPickup");
    const musicHolder = document.querySelector(".musicHolder");

    switch (pickedRoom) {
      case room1:
        roomPicker.classList.add("hide");
        playRoom.classList.remove("hide");
        console.log("DU VALDE RUM1!");
        musicHolder.classList.toggle("hide");
        roomText.innerHTML = scenes[0].text;
        roomSubtext.innerHTML = scenes[0].subText;
        break;
      case room2:
        roomPicker.classList.add("hide");
        playRoom.classList.remove("hide");
        roomText.innerHTML = scenes[1].text;
        console.log("DU VALDE RUM2!");
        break;
      case room3:
        roomPicker.classList.add("hide");
        playRoom.classList.remove("hide");
        roomText.innerHTML = scenes[2].text;
        console.log("DU VALDE RUM3!");
        break;
      case room4:
        roomPicker.classList.add("hide");
        playRoom.classList.remove("hide");
        roomText.innerHTML = scenes[3].text;
        console.log("DU VALDE RUM4!");
        break;
    }
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

//MUSIC QUIZ
const playBtn = document.querySelector("#musicBtn-1");
const response = document.querySelector("#response");
const secondResponse = document.querySelector("#secondResponse");
const guessInput = document.querySelector("#guessInput");
let songIndex = 0;

playBtn.addEventListener("click", startMusicQuiz);
console.log("songidex =" + songIndex);
function startMusicQuiz() {
  let songSource = someMusic[`${songIndex}`].source;
  console.log("songidex =" + songIndex);
  secondResponse.textContent = "";
  console.log(songSource);
  playBtn.textContent = "PLAY";
  playMusic(songSource);
  let songTitle = someMusic[`${songIndex}`].songTitle;
  guessInput.classList.remove("hide");
  response.textContent = someMusic[`${songIndex}`].question;
  guessInput.addEventListener("change", () => {
    if (guessInput.value.toUpperCase() === someMusic[`${songIndex}`].correct) {
      console.log("songidex =" + songIndex);
      console.log("YEA!!!");
      secondResponse.textContent = `korrekt svar!`;
      playBtn.textContent = "Klicka för att spela nästa";
      playBtn.addEventListener("click", () => {
        songIndex++;
        startMusicQuiz();
      });
    } else {
      console.log("songidex =" + songIndex);
      console.log("fel svar!!!!!");
      secondResponse.textContent = `fel svar... prova igen!`;
    }
  });
}

function guess() {
  if (guessInput.value === "hej") {
    console.log("YEHOW");
  } else {
    console.log("super fail...");
  }
}
function playMusic(songSource) {
  var audio = new Audio(songSource);
  audio.play();
}
// function playError() {
//   var audio = new Audio("audio/error.mp3");
//   audio.play();
// }
